"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Work from "@/components/Work";
import Availability from "@/components/Availability";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Toolbox from "@/components/Toolbox";
import Education from "@/components/Education";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Lightbox from "@/components/Lightbox";
import { clips, type Clip } from "@/lib/content";

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Statement />
        <Work
          onSelectClip={(c: Clip) =>
            setSelected(clips.findIndex((x) => x.id === c.id))
          }
        />
        <Availability />
        <Approach />
        <Services />
        <About />
        <Experience />
        <Toolbox />
        <Education />
        <Banner />
        <Contact />
      </main>

      {selected !== null && (
        <Lightbox
          clips={clips}
          index={selected}
          onIndex={setSelected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
