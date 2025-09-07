import { useEffect } from "react";

type animationType = {
  selector: string;
  threshold: number;
  unmount?: boolean;
};

export function useInviewAnimation({
  threshold,
  selector,
  unmount = true,
}: animationType) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (unmount) {
              obs.unobserve(entry.target);
            }
          }

          if (!entry.isIntersecting && !unmount) {
            entry.target.classList.remove("in-view");
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
