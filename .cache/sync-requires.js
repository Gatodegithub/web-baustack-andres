
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/andresmaldonado/Documents/Baustack/web-baustack/src/pages/using-typescript.tsx"))
}

