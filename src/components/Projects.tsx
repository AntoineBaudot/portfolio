"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.span
                    className="text-primary font-medium tracking-wider mb-16 block text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    SELECTED WORK
                </motion.span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}


                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <Link href={`/projects/${project.slug}`}>
            <motion.div
                ref={ref}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-surface mb-6 relative">
                    <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <span className="opacity-60">{project.category}</span>
                    </div>
                    <div className="bg-current/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
