"use client";

import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";


const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Work", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollY, scrollYProgress } = useScroll();
    const pathname = usePathname();
    const isHome = pathname === "/";

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.replace("/#", ""));
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Animation Logic for Logo - Conditional
    const scrollRange = [0, 150];
    const fontSizeAnim = useTransform(scrollY, scrollRange, ["14vw", "1.25rem"]);
    const topAnim = useTransform(scrollY, scrollRange, ["8rem", "0rem"]);

    // Dynamic Color Logic (Synced with DynamicBackgroundWrapper)
    // Black -> White -> Black text
    // Thresholds: [0, 0.15, 0.25, 0.8, 0.9, 1]
    const color = useTransform(
        scrollYProgress,
        [0, 0.15, 0.25, 0.8, 0.9, 1],
        ["#ffffff", "#ffffff", "#050505", "#050505", "#ffffff", "#ffffff"]
    );

    // CV Button Colors (Reverse of text)
    const buttonBg = useTransform(
        scrollYProgress,
        [0, 0.15, 0.25, 0.8, 0.9, 1],
        ["#ffffff", "#ffffff", "#050505", "#050505", "#ffffff", "#ffffff"]
    );

    const buttonText = useTransform(
        scrollYProgress,
        [0, 0.15, 0.25, 0.8, 0.9, 1],
        ["#050505", "#050505", "#ffffff", "#ffffff", "#050505", "#050505"]
    );

    // Only animate on Home page, otherwise fixed small
    const fontSize = (isMobile || !isHome) ? "1.25rem" : fontSizeAnim;
    const top = (isMobile || !isHome) ? "0rem" : topAnim;

    // Fixed colors if not on home
    const finalColor = isHome ? color : "#ffffff";

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300",
                scrolled ? "bg-background/0 backdrop-blur-md py-4" : "bg-transparent"
            )}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100px" },
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Animated Logo */}
            <motion.div
                style={{
                    y: top,
                    color: finalColor
                }}
                className="font-bold leading-none tracking-tighter origin-top-left whitespace-nowrap pointer-events-none md:pointer-events-auto"
            >
                <Link href="/" className="pointer-events-auto">
                    <motion.h1 style={{ fontSize }}>
                        ImAntoine
                    </motion.h1>
                </Link>
            </motion.div>

            <div className="flex items-center gap-8">
                <motion.div
                    className="hidden md:flex gap-8 text-lg font-medium"
                    style={{ color: finalColor }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: (!isHome || scrolled) ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:opacity-70 transition-opacity relative"
                        >
                            {link.name}
                            {activeSection === link.href.replace("/#", "") && isHome && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                />
                            )}
                        </Link>
                    ))}
                </motion.div>

                {/* CV Button */}
                <motion.a
                    href="/AntoineBaudot_CV.pdf"
                    target="_blank"
                    style={{
                        backgroundColor: isHome ? buttonBg : "#ffffff",
                        color: isHome ? buttonText : "#000000"
                    }}
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm hover:opacity-80 transition-opacity pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={16} />
                    <span>CV</span>
                </motion.a>


            </div>

            {/* Mobile Menu Button Placeholder */}
            <motion.div
                className="md:hidden"
                style={{ color: finalColor }}
            >
                Menu
            </motion.div>
        </motion.nav>
    );
}
