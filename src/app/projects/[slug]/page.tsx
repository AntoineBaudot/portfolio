"use client";

import { projects } from "@/lib/projects";
import { notFound, useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.slug === slug);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white" ref={containerRef}>
            {/* Navigation */}
            <nav className="fixed top-24 left-6 z-50 mix-blend-difference">
                <Link href="/#projects" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>
            </nav>

            {/* Immersive Hero */}
            <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                    style={{ opacity: headerOpacity, scale: headerScale }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-primary tracking-widest text-sm uppercase mb-4 block">{project.category}</span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-muted font-light">{project.subtitle}</p>
                </motion.div>
            </section>

            {/* Stats / Outcomes */}
            <section className="py-12 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {project.outcome.map((stat, i) => (
                        <div key={i}>
                            <motion.span
                                className="block text-4xl md:text-5xl font-bold text-white mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-sm text-muted uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

                {/* Sidebar Info */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-sm text-muted uppercase tracking-wider mb-4">Role</h3>
                        <p className="text-xl text-white">{project.role}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-muted uppercase tracking-wider mb-4">Timeline</h3>
                        <p className="text-xl text-white">{project.period}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-muted uppercase tracking-wider mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Narrative */}
                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary">The Challenge</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            {project.challenge}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary">The Solution</h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            {project.solution}
                        </p>
                    </motion.div>

                    {/* Placeholder for rich content / images */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="aspect-square bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-muted">
                            Process Img 1
                        </div>
                        <div className="aspect-square bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-muted">
                            Process Img 2
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}
