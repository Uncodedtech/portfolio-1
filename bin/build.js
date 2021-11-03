#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const RESERVED_DIRS = ['_next', 'static'];
const EXCLUDED_ROUTES = ['200', '404'];

const BUILD_DIR = path.resolve(process.cwd(), 'build');
const API_DIR = path.resolve(process.cwd(), 'api');

/**
 * Executes a command, returning promisified stdout.
 */
const run = async command => new Promise(res => exec(command, res));

/**
 * Checks whether path is a folder.
 */
const isFolder = filePath => fs.lstatSync(filePath).isDirectory();

/**
 * Crawls through directories via a matcher, returning a list of matched files.
 */
const crawl = (dir, matcher, crawled = [], root = true) => {
  // Scan directory for file contents
  const files = fs.readdirSync(dir);

  // Sort through files
  files.forEach(file => {
    const filePath = path.resolve(dir, file);
    const fileName = file.replace(/\.\w+/g, '');
    const localPath = `${dir}/${fileName}`;

    // Add matching routes to coverage
    if (matcher.test(file) && !EXCLUDED_ROUTES.includes(fileName)) {
      const pathName = localPath.replace(/(^index|\/index)$/, '');
      return crawled.push(`/${pathName}`);
    }

    // Recursively optimize HTML in subfolders
    if (isFolder(filePath) && !RESERVED_DIRS.includes(file)) {
      return crawl(localPath, matcher, crawled, false);
    }
  });

  // Cleanup paths
  if (root) {
    return crawled.map(route => route.replace(`/${dir}`, '/').replace(/\/{2,}/g, '/'));
  }
};

/**
 * De-dups HTML output.
 */
const cleanHTML = dir => {
  // Scan directory for file contents
  const files = fs.readdirSync(dir);

  // Sort through files
  files.forEach(file => {
    const filePath = path.resolve(dir, file);
    const fileName = file.replace(/\.\w+/g, '');

    // Delete duplicate HTML
    if (filePath.endsWith('.html') && files.includes(fileName)) {
      return fs.unlinkSync(filePath);
    }

    // Recursively clean HTML in subfolders
    if (isFolder(filePath) && !RESERVED_DIRS.includes(file)) {
      return cleanHTML(filePath);
    }
  });
};

(async () => {
  // Start
  console.info('Creating an optimized production build...');

  // Build & export
  await run('next build');
  await run('next export -o build/');

  // Build API
  await run('rimraf api && rollup -c');

  // Pre-render & optimize
  await run('react-snap');
  cleanHTML(BUILD_DIR);

  // Display built routes
  const apiRoutes = crawl(API_DIR, /\.js$/).map(route => `/api${route}`);
  const buildRoutes = crawl(BUILD_DIR, /\.html$/);

  console.info(`\nBuilt routes:\n\n  ${[...apiRoutes, ...buildRoutes].join('\n  ')}\n`);
})();
