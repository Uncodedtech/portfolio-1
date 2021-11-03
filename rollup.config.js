import { join } from 'path';
import { mkdirSync, copyFileSync, statSync, readdirSync } from 'fs';

const API_DIR = join(process.cwd(), 'src/api');
const BUILD_DIR = join(process.cwd(), 'api');

// Copy package.json to build dir
mkdirSync(BUILD_DIR);
copyFileSync(join(process.cwd(), 'package.json'), join(BUILD_DIR, 'package.json'));

/**
 * Recursively crawl directories for API routes.
 */
const crawlRoutes = (path, routes = []) => {
  if (statSync(path).isDirectory()) {
    readdirSync(path).map(file => crawlRoutes(join(path, file), routes));
  } else {
    routes.push(path);
  }

  return routes;
};

const config = crawlRoutes(API_DIR).map(route => ({
  input: route,
  output: {
    file: route.replace(API_DIR, BUILD_DIR),
    format: 'cjs',
    exports: 'auto',
  },
}));

export default config;
