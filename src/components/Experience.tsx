"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Capgemini",
        role: "Product Manager CDI",
        period: "April 2024 - Present",
        description: "Paris, France",
    },
    {
        company: "Retreeb",
        role: "Product Manager Alternance",
        period: "November 2022 - December 2023",
        description: "Paris, France",
    },
    {
        company: "Skaleet (Ex-TagPay)",
        role: "Product Owner Stage",
        period: "May 2022 - November 2022",
        description: "Paris, France",
    },
    {
        company: "Algoan",
        role: "Product Owner Stage",
        period: "May 2021 - October 2021",
        description: "Paris, France",
    },
    {
        company: "Artsper",
        role: "Product Owner Stage",
        period: "July 2020 - September 2020",
        description: "Paris, France",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto">
                <motion.span
                    className="text-primary font-medium tracking-wider mb-16 block text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    EXPERIENCE
                </motion.span>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-white/10 pt-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
                                <span className="text-muted">{exp.period}</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-4">{exp.role}</h4>
                                <p className="text-muted text-lg leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
