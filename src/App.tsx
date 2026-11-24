import { useCallback, useMemo, useState } from "react";
import { Toaster } from "sonner";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import CaseStudyModal from "./components/CaseStudyModal";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? null,
    [activeId],
  );

  const openProject = useCallback((project: Project) => setActiveId(project.id), []);
  const closeProject = useCallback(() => setActiveId(null), []);

  const step = useCallback((direction: 1 | -1) => {
    setActiveId((current) => {
      if (!current) return current;
      const index = projects.findIndex((project) => project.id === current);
      const nextIndex = (index + direction + projects.length) % projects.length;
      return projects[nextIndex]?.id ?? current;
    });
  }, []);

  const showPrevious = useCallback(() => step(-1), [step]);
  const showNext = useCallback(() => step(1), [step]);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F2F3EF] antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#D8F34F] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0E0F12]"
      >
        Skip to work
      </a>

      <Nav />

      <main>
        <Hero />
        <Gallery onOpen={openProject} />
        <About />
        <Contact />
      </main>

      <CaseStudyModal
        project={activeProject}
        onClose={closeProject}
        onPrev={showPrevious}
        onNext={showNext}
      />

      <Toaster
        theme="dark"
        richColors
        closeButton
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#16181D",
            border: "1px solid #26292F",
            color: "#F2F3EF",
          },
        }}
      />
    </div>
  );
}