import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 text-center font-mono text-xs text-ink-faint">
        <p>
          <span className="text-accent">$</span> built with React · Vite ·
          Tailwind
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
