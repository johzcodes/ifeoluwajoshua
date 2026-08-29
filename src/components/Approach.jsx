import Section from "./Section";
import Reveal from "./Reveal";
import { approach } from "../data/skills";

export default function Approach() {
  return (
    <Section id="approach" index={5} title="How I work">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {approach.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 60}>
            <h3 className="text-base font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
