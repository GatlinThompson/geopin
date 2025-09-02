import { useEffect } from "react";

type SwoopProps = {
  selector: string;
  threshold: number;
};

export function useInviewAnimation({ threshold, selector }: SwoopProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, [selector]);
}
