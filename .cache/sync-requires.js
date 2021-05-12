
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/src/pages/index.js"))
}

