"use client";

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

export default function About() {
    const paragraph1 = "I'm Antoine Baudot, a Product Owner with over 3 years of experience shaping SaaS and mobile products.";
    const paragraph2 = "I translate complex needs into user-focused experiences that bridge strategic vision with operational delivery. I work with organizations of all sizes, from Fintechs to the public sector, to craft useful and sustainable digital solutions.";

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.9', 'end 0.5']
    });

    // Precise Exit Logic
    // Trigger when bottom of container (text) hits bottom of image position (20vh from bottom = 0.8 from top)
    const { scrollYProgress: exitProgress } = useScroll({
        target: container,
        offset: ['end 0.8', 'end 0']
    });

    // Map exit progress to upward movement
    // When text moves from 0.8 (image bottom) to 0 (top), it travels 80vh.
    // Image should match that travel.
    const exitY = useTransform(exitProgress, [0, 1], ["0vh", "-80vh"]);

    // Image Entrance Logic - Global Scroll
    // Slide Up effect from Hero
    const { scrollY: globalScrollY } = useScroll();
    const entranceY = useTransform(globalScrollY, [0, 300], ["10vh", "0vh"]);

    // Combine Entrance and Exit
    const imageY = useTransform(() => {
        const entrance = entranceY.get();
        const exit = exitY.get();
        const entVal = parseFloat(entrance);
        const exitVal = parseFloat(exit);
        return `${entVal + exitVal}vh`;
    });

    const words1 = paragraph1.split(" ");
    const words2 = paragraph2.split(" ");
    const totalWords = words1.length + words2.length;

    return (
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative z-10">
            <div className="max-w-2xl md:max-w-[55vw] lg:max-w-[50vw] xl:max-w-[55vw] 2xl:max-w-[60vw]">
                <motion.span
                    className="text-primary font-medium tracking-wider mb-8 block text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    ABOUT ME
                </motion.span>
                <div ref={container} className="space-y-8 text-2xl md:text-3xl font-bold leading-relaxed text-white">
                    <Paragraph words={words1} startIndex={0} totalWords={totalWords} scrollYProgress={scrollYProgress} />
                    <Paragraph words={words2} startIndex={words1.length} totalWords={totalWords} scrollYProgress={scrollYProgress} />
                </div>
            </div>

            {/* Hero Image - Moved to About for better sync */}
            <motion.div
                className="fixed bottom-[20vh] right-6 md:right-12 lg:right-24 z-0 w-[40vw] md:w-[30vw] lg:w-[25vw] max-w-[500px] pointer-events-none"
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
        </section>
    )
}

function Paragraph({ words, startIndex, totalWords, scrollYProgress }: { words: string[], startIndex: number, totalWords: number, scrollYProgress: MotionValue<number> }) {
    return (
        <p className="flex flex-wrap">
            {words.map((word, i) => {
                const globalIndex = startIndex + i;
                const step = 1 / totalWords;
                const start = globalIndex * step;
                const end = start + step;

                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </p>
    )
}

function Word({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-[0.25em]">
            {children}
        </motion.span>
    )
}
