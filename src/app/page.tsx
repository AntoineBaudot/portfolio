import References from "@/components/References";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
    return (
        <DynamicBackground>
            <Hero />
            <About />
            <References />
            <Experience />
            <Projects />
            <Contact />
        </DynamicBackground>
    );
}
