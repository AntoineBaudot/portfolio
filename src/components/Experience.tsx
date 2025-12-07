"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Capgemini",
        role: "Product Manager",
        period: "Apr 2024 - Present",
        description: "Leading product initiatives for enterprise clients, focusing on AI-powered solutions and digital transformation projects. Collaborating with cross-functional teams to deliver scalable platforms.",
    },
    {
        company: "Retreeb",
        role: "Product Manager",
        period: "Nov 2022 - Dec 2023",
        description: "Led the product redesign initiative, improving user engagement by 40%. Managed the roadmap and coordinated with engineering teams to deliver new features.",
    },
    {
        company: "Skaleet (Ex-TagPay)",
        role: "Product Owner",
        period: "May 2022 - Nov 2022",
        description: "Managed the backlog and roadmap for the core banking platform components. Worked closely with stakeholders to prioritize features and ensure timely delivery.",
    },
    {
        company: "Algoan",
        role: "Product Owner",
        period: "May 2021 - Oct 2021",
        description: "Collaborated with data scientists to implement credit scoring algorithms. Optimized user flows and improved the loan application process.",
    },
    {
        company: "Artsper",
        role: "Product Owner",
        period: "Jul 2020 - Sep 2020",
        description: "Optimized the artist onboarding flow, reducing drop-off rates. Conducted user research and implemented data-driven improvements.",
    },
];

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
    const isLeft = index % 2 === 0;

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: moves content slightly slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div
            ref={ref}
            className={`relative min-h-screen flex items-start pt-[12vh] justify-between md:justify-normal w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Empty space for opposite side */}
            <div className="hidden md:block w-5/12" />

            {/* Content with Entrance + Parallax Animation */}
            <motion.div
                style={{ y }}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:text-left md:pl-8'}`}
            >
                <div className="p-6 rounded-2xl md:bg-transparent md:p-0">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.company}
                    </h3>
                    <p className="text-xl text-neutral-400 font-medium mb-1">
                        {item.role}
                    </p>
                    <p className="text-sm text-neutral-500 mb-4 inline-block">
                        {item.period}
                    </p>
                    <p className="text-neutral-300 leading-relaxed text-base">
                        {item.description}
                    </p>
                </div>
            </motion.div>

            {/* Dot on the timeline - COMPLETELY STATIC */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-neutral-500 bg-background z-10 top-[12vh] mt-8" />

        </div>
    );
};

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const height = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);

    return (
        <section id="experience" className="py-10 mt-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-medium tracking-wider mb-16 block text-sm text-center"
                >
                    EXPERIENCE
                </motion.span>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Line */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-neutral-200/30"
                    >
                        <motion.div
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-primary via-lime-400 to-transparent origin-top"
                        />
                        {/* Dot at top */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                            <motion.div
                                style={{
                                    scale: useTransform(scrollYProgress, [0, 0.05], [1, 0.8]),
                                }}
                                className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/50"
                            />
                        </div>
                    </motion.div>

                    <div className="pb-40"> :
                        {experiences.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
