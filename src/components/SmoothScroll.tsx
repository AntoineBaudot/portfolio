"use client";

// Temporary fallback - Install @studio-freight/react-lenis to enable smooth scroll
// Run: npm install @studio-freight/react-lenis

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Simple wrapper - smooth scroll will be enabled once the package is installed
    return <>{children}</>;
}

/* 
Uncomment this when you install the package:

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
*/
