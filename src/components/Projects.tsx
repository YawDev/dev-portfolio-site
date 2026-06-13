import { projects } from '../data/content'
import Icon from './Icon'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" index="03" title="projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="glow-card flex flex-col p-6">
            <div className="mb-4 flex items-center justify-between">
              <Icon name="external" className="h-7 w-7 text-accent" />
              <div className="flex items-center gap-3">
                {p.repos?.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} ${r.label} source`}
                    className="flex items-center gap-1 text-ink-faint transition-colors hover:text-accent"
                  >
                    <Icon name="github" className="h-5 w-5" />
                    {p.repos && p.repos.length > 1 && (
                      <span className="font-mono text-xs">{r.label}</span>
                    )}
                  </a>
                ))}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="text-ink-faint transition-colors hover:text-accent"
                  >
                    <Icon name="arrow" className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-ink">{p.title}</h3>
            <p className="flex-1 text-sm leading-relaxed">{p.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-xs text-ink-faint"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
