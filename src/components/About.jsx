import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "../data/profile";
import { education } from "../data/experience";

export default function About() {
  return (
    <Section id="about" index={1} title="About">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <h3 className="section-label mb-4">Education</h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.title} className="border-l border-line pl-4">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-sm text-ink-muted">{item.org}</p>
                <p className="font-mono text-xs text-ink-faint">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
