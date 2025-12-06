"use client";

import Image from 'next/image';

const logos = [
    { name: 'Capgemini', src: '/logos/capgemini.svg' },
    { name: 'Retreeb', src: '/logos/retreeb.svg', hoverSrc: '/logos/retreeb-green.svg' },
    { name: 'Skaleet', src: '/logos/skaleet.svg' },
    { name: 'Algoan', src: '/logos/algoan.svg' },
    { name: 'Artsper', src: '/logos/artsper.svg' },
    { name: 'Colissimo', src: '/logos/colissimo.png' },

    { name: 'La Poste', src: '/logos/laposte.svg' },
];

export default function References() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-12 text-black/80 tracking-wider">
                    TRUSTED BY
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
                    {logos.map((logo) => (
                        <div key={logo.name} className={`relative h-12 w-32 md:w-40 transition-all duration-300 group ${logo.name === 'Retreeb' || logo.name === 'Artsper' ? '' : 'grayscale brightness-0 hover:grayscale-0 hover:brightness-100'} ${logo.name === 'Capgemini' ? 'brightness-0' : ''}`}>
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
                </div>
            </div>
        </section>
    );
}
