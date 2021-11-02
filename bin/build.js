#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const RESERVED_DIRS = ['_next', 'static'];
const EXCLUDED_ROUTES = ['200', '404'];
const BUILD_DIR = path.resolve(process.cwd(), 'build');

/**
 * Executes a command, returning promisified stdout.
 */
const run = async command => new Promise(res => exec(command, res));

/**
 * De-dups and optimizes HTML output.
 */
const optimizeHTML = (dir = '', routes = []) => {
  // Scan directory for file contents
  const files = fs.readdirSync(path.resolve(BUILD_DIR, dir));

  // Sort through files
  files.forEach(entry => {
    // Delete duplicate HTML
    const fileName = entry.replace(/\.\w+/g, '');
    const localPath = dir ? `${dir}/${fileName}` : fileName;

    if (entry.endsWith('.html') && files.includes(fileName)) {
      fs.unlinkSync(path.resolve(BUILD_DIR, dir, entry));
    } else if (entry.endsWith('.html') && !EXCLUDED_ROUTES.includes(localPath)) {
      const pathName = localPath.replace(/(^index|\/index)$/, '');
      routes.push(`/${pathName}`);
    }

    // Recursively optimize HTML in subfolders
    if (!entry.includes('.') && !RESERVED_DIRS.includes(entry)) {
      optimizeHTML(localPath, routes);
    }
  });

  return routes;
};

(async () => {
  // Start
  console.info('Creating an optimized production build...');

  // Build & export
  await run('next build');
  await run('next export -o build/');

  // Pre-render & optimize
  await run('react-snap');
  const routes = optimizeHTML();

  // Display routes
  console.info(`\nBuilt routes:\n\n  ${routes.join('\n  ')}\n`);
})();
