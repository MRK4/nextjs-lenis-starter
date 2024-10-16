"use client";

import { ReactLenis } from "lenis/react";

import { ReactNode } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
