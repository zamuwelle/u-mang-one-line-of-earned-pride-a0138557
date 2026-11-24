const fs = require('node:fs');
const path = require('node:path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), 'He practiced the landlord’s voicemail in the stairwell until his voice stopped shaking; then he called back and asked for the repair.');
