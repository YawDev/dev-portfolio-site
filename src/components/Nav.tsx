import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-navy-700 bg-navy-950/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-ink transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>jason-ampah
          <span className="ml-0.5 animate-pulse text-accent">_</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-sm text-accent md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-navy-700 bg-navy-950/95 px-6 py-4 font-mono text-sm md:hidden">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
