import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" index={4} title="Skills">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 60}>
            <h3 className="section-label mb-3">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line px-2.5 py-1 text-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
