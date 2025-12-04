import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
