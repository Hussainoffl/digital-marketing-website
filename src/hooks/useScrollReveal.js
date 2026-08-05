import { useEffect } from "react";

/**
 * useScrollReveal
 * Observes all elements with the `.reveal` class and adds `.is-visible`
 * when they enter the viewport, triggering CSS transition animations.
 * Re-scans on route changes by accepting a dependency key.
 */
function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window) || elements.length === 0) {
      // Fallback: just show everything
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useScrollReveal;