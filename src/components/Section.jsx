import Reveal from "./Reveal";

/**
 * Consistent section shell: id anchor, max width, vertical rhythm and a
 * numbered heading in the shared "01 / About" style.
 */
export default function Section({ id, index, title, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:px-8 md:py-28">
        {title ? (
          <Reveal as="header" className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span className="font-mono text-sm text-accent">
              {String(index).padStart(2, "0")}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
