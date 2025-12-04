"use client";

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

export default function About() {
    const paragraph1 = "I’m Antoine Baudot, a Product Owner with over 3 years of experience shaping SaaS and mobile products. I translate complex needs into user-focused experiences that bridge strategic vision with operational delivery.";
    const paragraph2 = "I work with organizations of all sizes, from Fintechs to the public sector, to craft useful and sustainable digital solutions.";

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.9', 'end 0.5']
    });

    const words1 = paragraph1.split(" ");
    const words2 = paragraph2.split(" ");
    const totalWords = words1.length + words2.length;

    return (
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative z-10">
            <div className="max-w-2xl">
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
        </section>
    )
}

function Paragraph({ words, startIndex, totalWords, scrollYProgress }: { words: string[], startIndex: number, totalWords: number, scrollYProgress: MotionValue<number> }) {
    return (
        <p className="flex flex-wrap">
            {words.map((word, i) => {
                const globalIndex = startIndex + i;
                // Calculate range based on global index
                // We want the animation to be spread across the scroll progress
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
