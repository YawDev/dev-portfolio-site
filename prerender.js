import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Read the client-built template and the server bundle, render the app to
// static HTML, and inject it into the #root placeholder.
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist-ssr/entry-server.js')

const html = template.replace('<!--app-html-->', render())
fs.writeFileSync(toAbsolute('dist/index.html'), html)

console.log('✓ Prerendered dist/index.html')
