import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { profile } from "../data/profile";

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: FiGithub },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
  { href: profile.links.twitter, label: "X (Twitter)", Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm text-ink">
            {profile.fullName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-faint">
            {profile.role} &middot; {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Resume
          </a>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-content px-5 pb-10 sm:px-8">
        <p className="text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.fullName}. Built with React,
          Vite and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
