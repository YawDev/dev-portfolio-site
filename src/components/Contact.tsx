import { profile, socials } from '../data/content'
import Icon from './Icon'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" index="04" title="contact">
      <div className="glow-card mx-auto max-w-2xl p-8 text-center md:p-12">
        <p className="mb-3 font-mono text-sm text-accent">$ ./say-hello.sh</p>
        <h3 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">
          Let&apos;s build something.
        </h3>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed">
          I&apos;m open to new opportunities and collaborations. Whether you have
          a question or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-accent/60 bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20"
        >
          <Icon name="email" className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-5">
          {socials
            .filter((s) => s.icon !== 'email')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-ink-faint transition-colors hover:text-accent"
              >
                <Icon name={s.icon} className="h-6 w-6" />
              </a>
            ))}
        </div>
      </div>
    </Section>
  )
}
