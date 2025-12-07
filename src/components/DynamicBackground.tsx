"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function DynamicBackground({ children }: { children: ReactNode }) {
    const { scrollYProgress } = useScroll();

    // Map scroll progress to colors
    // 0 - 0.15: Black (Hero)
    // 0.25: Fully White (About starts)
    // 0.8: Still White (Projects ends)
    // 0.9: Fully Black (Contact starts)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.12, 0.16, 0.9, 0.95, 1],
        ["#0a0a0a", "#0a0a0a", "#ffffff", "#ffffff", "#0a0a0a", "#0a0a0a"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.12, 0.16, 0.9, 0.95, 1],
        ["#ffffff", "#ffffff", "#000000", "#000000", "#ffffff", "#ffffff"]
    );

    // Muted text color (opacity 60% of main color)
    // We can't easily transform a class, but we can provide a CSS variable or just rely on opacity classes in components
    // If components use opacity-60, it will work with the dynamic textColor.

    return (
        <motion.div style={{ backgroundColor, color: textColor }} className="transition-colors duration-100 min-h-screen">
            {/* Fixed background layer if needed, but backgroundColor on the container works if it covers everything */}
            {children}
        </motion.div>
    );
}
