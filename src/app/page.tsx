import References from "@/components/References";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            <Hero />
            <About />
            <Experience />
            <References />
            <Projects />
            <Contact />
        </main>
    );
}
