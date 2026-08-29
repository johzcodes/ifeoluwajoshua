import Section from "./Section";
import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, otherProjects } from "../data/projects";

function DetailRow({ label, children }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <dt className="section-label pt-0.5">{label}</dt>
      <dd className="text-sm leading-relaxed text-ink-muted">{children}</dd>
    </div>
  );
}

function ProjectCard({ project, priority }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface">
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="group block aspect-[16/10] overflow-hidden border-b border-line"
      >
        <img
          src={project.image}
          alt={`${project.name} — screenshot of the live site`}
          width={1366}
          height={854}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </a>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
          <span className="font-mono text-xs text-ink-faint">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-ink-muted">{project.tagline}</p>

        <dl className="mt-6 space-y-4">
          <DetailRow label="Problem">{project.problem}</DetailRow>
          <DetailRow label="Built">{project.build}</DetailRow>
          {project.engineering ? (
            <DetailRow label="Engineering">{project.engineering}</DetailRow>
          ) : null}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-faint"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          Visit live site
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index={3} title="Selected projects">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 80}>
            <ProjectCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="section-label mb-4">Also built</h3>
        <ul className="divide-y divide-line border-y border-line">
          {otherProjects.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink hover:text-accent"
                >
                  {item.name}
                  <FiArrowUpRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <p className="text-sm text-ink-muted">{item.detail}</p>
              </div>
              <span className="font-mono text-xs text-ink-faint">
                {item.stack.join(" · ")}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-muted">
          More on{" "}
          <a
            href="https://github.com/ifeoluwajohz"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
