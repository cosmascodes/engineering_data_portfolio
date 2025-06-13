
import HeroSection from "./components/main/hero_section";
import AboutMeSection from "./components/main/about_me";
import InteractiveResume from "./components/main/my_experience";
import Projects from "./components/main/my_project";
import { WhatsNext } from "./components/main/what_next";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-8 py-20 sm:p-20 ">
        <HeroSection />
        <AboutMeSection />
        <InteractiveResume />
        <Projects />
        <WhatsNext />
      <div className="max-w-5xl mx-auto mt-32 text-center text-sm text-slate-400">
        <p>Designed & Built by Brittany Chiang</p>
        <p className="mt-2 font-mono">7,908J4,861</p>
      </div>
      </main>
    </div>
  );
}
