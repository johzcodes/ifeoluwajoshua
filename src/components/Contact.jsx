import Section from "./Section";
import Reveal from "./Reveal";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: FiMail },
  {
    label: "LinkedIn",
    value: "in/ifeoluwajohz",
    href: profile.links.linkedin,
    Icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ifeoluwajohz",
    href: profile.links.github,
    Icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <Section id="contact" index={6} title="Contact">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="max-w-md text-lg text-ink-muted">
            Open to software engineering roles and freelance projects. The
            fastest way to reach me is email — I usually reply within a day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <FiMail aria-hidden="true" />
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={80}>
          <ul className="divide-y divide-line border-y border-line">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-between py-3.5 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="h-4 w-4 text-ink-faint" />
                    <span className="text-ink">{label}</span>
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs">
                    {value}
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
