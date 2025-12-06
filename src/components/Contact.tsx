"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
            <motion.div
                className="max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-primary font-medium tracking-wider mb-8 block text-sm">
                    CONTACT
                </span>

                <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
                    Let's work <br />
                    <span className="text-muted">together.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <a
                        href="mailto:hello@antoinebaudot.com"
                        className="text-2xl md:text-3xl hover:text-primary transition-colors border-b border-white/20 pb-2 hover:border-primary"
                    >
                        hello@antoinebaudot.com
                    </a>

                    <div className="flex gap-6">
                        {[
                            { icon: Linkedin, href: "https://www.linkedin.com/in/antoinebaudot/" },
                            { icon: Twitter, href: "https://twitter.com/" },
                            { icon: Github, href: "https://github.com/AntoineBaudot" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-muted">
                    <span>© {new Date().getFullYear()} Antoine Baudot</span>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>Paris, France</span>
                        <span>Local time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
