type SectionProps = {
  id: string
  index: string
  title: string
  children: React.ReactNode
}

/**
 * Consistent section shell: a "// 01. title" terminal-style heading
 * followed by content, centered in a max-width container.
 */
export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="flex items-baseline gap-3 text-2xl font-semibold text-ink md:text-3xl">
          <span className="font-mono text-base text-accent">{index}.</span>
          {title}
        </h2>
        <span className="h-px flex-1 bg-navy-700" />
      </div>
      {children}
    </section>
  )
}
