"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const logos = [
    { name: 'Capgemini', src: '/logos/capgemini.svg' },
    { name: 'Retreeb', src: '/logos/retreeb.svg', hoverSrc: '/logos/retreeb-green.svg' },
    { name: 'Skaleet', src: '/logos/skaleet.svg' },
    { name: 'Algoan', src: '/logos/algoan.svg' },
    { name: 'Artsper', src: '/logos/artsper.svg' },
    { name: 'Colissimo', src: '/logos/colissimo.svg' },
    { name: 'La Poste', src: '/logos/laposte.svg' },
];

export default function References() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section className="py-40" ref={container}>
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-12 text-black/80 tracking-wider">
                    TRUSTED BY
                </h2>
                <motion.div style={{ y }} className="flex flex-wrap justify-center items-center gap-20 md:gap-32 opacity-80">
                    {logos.map((logo) => (
                        <div key={logo.name} className={`relative h-18 w-48 md:w-64 transition-all duration-300 group ${logo.name === 'Retreeb' || logo.name === 'Artsper' || logo.name === 'Ministère de l\'Économie' ? '' : 'grayscale brightness-0 hover:grayscale-0 hover:brightness-100'} ${logo.name === 'Capgemini' ? 'brightness-0' : ''}`}>
                            <Image
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                fill
                                className={`object-contain transition-opacity duration-300 ${logo.hoverSrc ? 'group-hover:opacity-0' : ''}`}
                            />
                            {logo.hoverSrc && (
                                <Image
                                    src={logo.hoverSrc}
                                    alt={`${logo.name} logo hover`}
                                    fill
                                    className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                                />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
