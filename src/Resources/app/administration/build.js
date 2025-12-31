const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const entry = path.resolve(__dirname, 'src/main.js');
// Write bundle into the plugin's public assets so it gets copied by Shopware
const outDir = path.resolve(__dirname, '../..', 'public/administration/js');
const outFile = path.join(outDir, 'special-blocks.js');

fs.mkdirSync(outDir, { recursive: true });

esbuild.build({
    entryPoints: [entry],
    bundle: true,
    format: 'iife',
    target: 'es2018',
    outfile: outFile,
    loader: {
        '.twig': 'text',
        '.html.twig': 'text',
        '.scss': 'text',
        '.css': 'text'
    },
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    logLevel: 'info'
}).catch(() => process.exit(1));
