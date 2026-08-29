import { useInView } from "../hooks/useInView";

/**
 * Fades and lifts its children into view on first scroll.
 * Motion is disabled automatically via the reduced-motion media query in CSS.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
