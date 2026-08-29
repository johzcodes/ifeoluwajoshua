import Section from "./Section";
import Reveal from "./Reveal";
import { experience, community } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" index={2} title="Experience">
      <ol className="space-y-12">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.org} delay={i * 60}>
            <div className="grid gap-2 md:grid-cols-[1fr_2.4fr]">
              <div>
                <p className="font-mono text-xs text-ink-faint">{job.period}</p>
                <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink">
                  {job.role} &middot;{" "}
                  <span className="text-ink-muted">{job.org}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-ink-faint" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-faint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal as="li" delay={experience.length * 60}>
          <div className="grid gap-2 md:grid-cols-[1fr_2.4fr]">
            <div>
              <p className="font-mono text-xs text-ink-faint">{community.period}</p>
              <p className="mt-1 text-sm text-ink-muted">Community</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-ink">
                {community.role} &middot;{" "}
                <span className="text-ink-muted">{community.org}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {community.detail}
              </p>
            </div>
          </div>
        </Reveal>
      </ol>
    </Section>
  );
}
