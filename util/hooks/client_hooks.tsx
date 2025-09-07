"use client";

import { useInviewAnimation } from "./useInviewAnimation";

export default function ClientHooks() {
  useInviewAnimation({ selector: ".swoop-up", threshold: 0.2 });
  useInviewAnimation({ selector: ".show-up", threshold: 0.75, unmount: false });
  useInviewAnimation({ selector: ".hide", threshold: 0.75, unmount: false });

  return null;
}
