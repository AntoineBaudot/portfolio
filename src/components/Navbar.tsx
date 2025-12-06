"use client";

import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Animation Logic for Logo - Conditional
    const scrollRange = [0, 150];
    const fontSizeAnim = useTransform(scrollY, scrollRange, ["14vw", "1.25rem"]);
    const topAnim = useTransform(scrollY, scrollRange, ["8rem", "0rem"]);

    const fontSize = isMobile ? "1.25rem" : fontSizeAnim;
    const top = isMobile ? "0rem" : topAnim;

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent"
            )}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100px" },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Animated Logo */}
            <motion.div
                style={{
                    y: top,
                    // We need to ensure it doesn't push other elements when large?
                    // But justify-between handles it.
                }}
                className="font-bold leading-none tracking-tighter text-white mix-blend-difference origin-top-left whitespace-nowrap"
            >
                <motion.h1 style={{ fontSize }}>
                    ImAntoine
                </motion.h1>
            </motion.div>

            <motion.div
                className="hidden md:flex gap-8 text-lg font-medium text-white/80 mix-blend-difference"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <Link href="#about" className="hover:text-white transition-colors">
                    About
                </Link>
                <Link href="#experience" className="hover:text-white transition-colors">
                    Experience
                </Link>
                <Link href="#projects" className="hover:text-white transition-colors">
                    Work
                </Link>
                <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                </Link>
            </motion.div>

            {/* Mobile Menu Button Placeholder */}
            <div className="md:hidden text-white mix-blend-difference">
                Menu
            </div>
        </motion.nav>
    );
}
