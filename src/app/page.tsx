import HeroSection from "./components/main/hero_section";
import AboutMeSection from "./components/main/about_me";
import InteractiveResume from "./components/main/my_experience";
import Projects from "./components/main/my_project";
import { WhatsNext } from "./components/main/what_next";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <AboutMeSection />
        <InteractiveResume />
        <Projects />
        <WhatsNext />
        
        <div className="max-w-5xl mx-auto mt-16 mb-6 sm:mt-24 md:mt-32 text-center text-xs sm:text-sm text-slate-400 px-4">
          <p>Built by Cosmas Ngeno</p>
          <p className="mt-2 font-mono text-xs">+254 792 163 183</p>
        </div>
    </div>
  );
}