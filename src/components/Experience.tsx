import { experience } from '../data/content'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" index="02" title="experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={job.org} className="glow-card p-6 md:p-8">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {job.role}{' '}
                <span className="text-accent">· {job.org}</span>
              </h3>
              <span className="font-mono text-xs text-ink-faint">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2.5">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 text-accent" aria-hidden>
                    ▹
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
