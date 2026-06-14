import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Called by prerender.js at build time to produce the static HTML
// that ships inside index.html (so content paints before JS loads).
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
