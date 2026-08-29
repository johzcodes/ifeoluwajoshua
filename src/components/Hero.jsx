import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/profile";
import { coreStack } from "../data/skills";

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: FiGithub },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
  { href: profile.links.twitter, label: "X (Twitter)", Icon: FaXTwitter },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid w-full max-w-content items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.5fr_1fr] md:pb-28 md:pt-24">
        <div className="animate-fade-up">
          <p className="section-label">
            {profile.role} &nbsp;·&nbsp; {profile.location}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-muted sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base text-ink-faint">{profile.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View projects
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-self-end md:block">
          <img
            src="/Myself.png"
            width={500}
            height={500}
            alt="Portrait of Israel Ifeoluwa Joshua"
            className="w-full max-w-[16rem] rounded-xl border border-line object-cover lg:max-w-[18rem]"
          />
        </div>
      </div>

      <div className="border-y border-line">
        <div className="mx-auto flex w-full max-w-content flex-wrap gap-x-6 gap-y-2 px-5 py-4 sm:px-8">
          {coreStack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-ink-faint">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
