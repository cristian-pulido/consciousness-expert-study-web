const fs = require('fs');
const assert = require('assert');
const html = fs.readFileSync(require('path').join(__dirname, '..', 'index.html'), 'utf8');
const app = fs.readFileSync(require('path').join(__dirname, '..', 'app.js'), 'utf8');
assert(html.includes('lang="en"'));
assert(html.includes('id="study-frame"'));
assert(app.includes('appsScriptUrl'));
console.log('web shell smoke test passed');
