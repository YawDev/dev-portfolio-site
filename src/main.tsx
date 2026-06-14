import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

const root = document.getElementById('root')!

// In production the HTML is prerendered (see entry-server.tsx + prerender.js),
// so hydrate the existing markup. In dev there's no prerender, so render fresh.
if (root.childElementCount > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
