'use client';


import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";


export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Marquee />
      
      <Work />
    </>
  );
}
