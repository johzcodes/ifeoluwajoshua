import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" };

/**
 * Reveal-on-scroll helper. Returns a ref and a boolean that flips to true
 * the first time the element enters the viewport. Falls back to visible
 * when IntersectionObserver is unavailable. Options are read once on mount.
 */
export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const optsRef = useRef(options || DEFAULT_OPTIONS);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, optsRef.current);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
