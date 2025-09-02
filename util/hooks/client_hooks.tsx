"use client";

import { useInviewAnimation } from "./useInviewAnimation";

export default function ClientHooks() {
  useInviewAnimation({ selector: ".swoop-up", threshold: 0.2 });

  return null;
}
