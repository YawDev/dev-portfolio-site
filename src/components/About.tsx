import { profile, skills } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" index="01" title="about">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="glow-card p-5">
          <p className="mb-4 font-mono text-sm text-ink-faint">
            <span className="text-accent">const</span> stack ={' '}
            <span className="text-ink">[</span>
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-navy-700 bg-navy-850 px-2.5 py-1 font-mono text-xs text-accent-2"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-sm text-ink">]</p>
        </div>
      </div>
    </Section>
  )
}
