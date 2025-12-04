"use client";

import { motion, useMotionValue, useTransform, animate, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const suffixes = ["Manager", "Owner"];
    const [suffixIndex, setSuffixIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displaySuffix = useTransform(rounded, (latest) => suffixes[suffixIndex].slice(0, latest));

    // Scroll Animation Logic
    const { scrollY } = useScroll();

    // Transform values for "ImAntoine"
    // Font size: 14vw -> 1.25rem (approx 20px)
    // Top: 8rem (pt-32) -> 1.5rem (py-6)
    // Left: Centered initially (implied by layout) -> Left aligned in navbar

    // We need to map scrollY to progress (0 to 1)
    // Shortened range to make it feel more "sticky" (moves closer to scroll speed)
    const scrollRange = [0, 150];

    const fontSize = useTransform(scrollY, scrollRange, ["14vw", "1.25rem"]);
    const top = useTransform(scrollY, scrollRange, ["8rem", "1.3rem"]);
    const opacity = useTransform(scrollY, [0, 100], [1, 1]); // Always visible

    // We need to handle horizontal positioning. 
    // Initially it's in a container with padding. Finally it's fixed left.
    // A simple way is to use `fixed` positioning for the text element always.
    // Initial left: 6rem (px-24) or responsive equivalent.
    // Final left: 3rem (px-12) or responsive equivalent.
    // Actually, let's use a percentage or calc to be safe.
    // But since the navbar has specific padding, we should match it.
    // Navbar has px-6 md:px-12.
    // Hero has px-6 md:px-12 lg:px-24.

    // Let's assume desktop (md/lg) for the main effect, and handle mobile gracefully.
    // On mobile, navbar is px-6. Hero is px-6. So left can be constant or similar.
    // On desktop, Hero is px-12 or px-24. Navbar is px-12.

    // Let's try to keep it simple: Fixed position, left matches navbar padding.

    // Image animation: 
    // 0-300: Slide up (100 -> 0)
    // 300-450: Stick (0) - Shortened stick phase
    // 450+: Scroll away (0 -> -1000) - 1:1 sync with scroll
    const imageY = useTransform(scrollY, [0, 300, 450, 1450], [100, 0, 0, -1000]);

    useEffect(() => {
        const animateText = async () => {
            const text = suffixes[suffixIndex];
            await animate(count, text.length, { type: "tween", duration: 1, ease: "linear" });
            await new Promise((resolve) => setTimeout(resolve, 2000));
            await animate(count, 0, { type: "tween", duration: 0.8, ease: "linear" });
            setSuffixIndex((prev) => (prev + 1) % suffixes.length);
        };
        animateText();
    }, [suffixIndex, count]);

    // Smart Navbar Logic for Fixed Text
    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <section className="min-h-screen flex flex-col px-6 md:px-12 lg:px-24 pt-32 relative overflow-hidden">

            {/* Placeholder to reserve space for the fixed element in the Navbar */}
            <div className="h-[14vw] w-full mb-8" aria-hidden="true" />

            <div className="max-w-[90rem] w-full mx-auto z-10 flex flex-col h-full justify-between pb-20">

                {/* Bottom Section */}
                <div className="mt-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="text-3xl md:text-5xl font-medium text-white mb-2 h-[1.5em] flex items-center">
                            <span>Product&nbsp;</span>
                            <motion.span>{displaySuffix}</motion.span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="ml-1 w-1 h-[1em] bg-white inline-block"
                            />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium text-muted">
                            Based in Paris 🇫🇷
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Get in touch</span>
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Fixed Hero Image */}
            <motion.div
                className="fixed bottom-0 right-6 md:right-12 lg:right-24 z-0 w-[40vw] md:w-[30vw] lg:w-[25vw] max-w-[500px] pointer-events-none"
                style={{ y: imageY }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <img
                    src="/images/me.jpg"
                    alt="Antoine Baudot"
                    className="w-full h-auto object-cover mask-image-gradient"
                    style={{
                        maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)"
                    }}
                />
            </motion.div>

            {/* Subtle Background Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
