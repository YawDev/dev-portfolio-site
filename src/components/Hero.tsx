import { profile, socials } from '../data/content'
import Icon from './Icon'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        {/* avatar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-accent-2 blur-md opacity-60" />
          <img
            src={profile.avatar}
            alt={profile.name}
            onError={(e) => {
              // graceful fallback to initials placeholder if no photo yet
              const t = e.currentTarget
              t.style.display = 'none'
              t.nextElementSibling?.classList.remove('hidden')
            }}
            className="relative h-40 w-40 rounded-full border-2 border-navy-700 object-cover object-top md:h-44 md:w-44"
          />
          <div className="relative hidden h-40 w-40 items-center justify-center rounded-full border-2 border-navy-700 bg-navy-800 font-mono text-4xl text-accent md:h-44 md:w-44">
            JA
          </div>
        </div>

        <p className="mb-4 font-mono text-sm text-accent">
          $ whoami
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Hi, I&apos;m {profile.name}.
        </h1>

        <h2 className="mt-3 font-mono text-xl text-ink-muted sm:text-2xl">
          {profile.role}
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {profile.tagline}
        </p>

        {/* social links */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-md border border-navy-700 bg-navy-900/60 px-4 py-2 font-mono text-sm text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Icon name={s.icon} className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </div>

        {/* scroll cue */}
        <a
          href="#about"
          className="mt-16 font-mono text-xs text-ink-faint transition-colors hover:text-accent"
        >
          scroll ↓
        </a>
      </div>
    </section>
  )
}
