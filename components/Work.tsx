import { projects } from "@/data/projects";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  RiArrowRightUpLongLine,
  RiGithubLine,
  RiGlobalLine,
  RiLinksLine,
} from "@remixicon/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState, memo } from "react";
import Button from "./Button";
import { useLanguage } from "./LanguageProvider";

const ProjectCard = memo(function ProjectCard({ project, index }: { project: any; index: number }) {
  const { lang } = useLanguage();
  const t = {
    en: { github: "See on Github", online: "See online" },
    es: { github: "Ver en Github", online: "Ver online" },
  } as const;

  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        if (!ref.current) {
          rafId = null;
          return;
        }

        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const scrollingDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        if (isVisible && scrollingDown && !hasAnimated) {
          setShouldAnimate(true);
          setHasAnimated(true);
        } else if (!isVisible && rect.top > window.innerHeight) {
          setHasAnimated(false);
          setShouldAnimate(false);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-work w-full h-full flex flex-col justify-center rounded-3xl p-6 lg:py-16 lg:px-52 gap-4 lg:gap-6`}
      style={{ backgroundImage: project.gradient }}
    >
      <motion.h2
        className="text-2xl lg:text-5xl text-center lg:text-start"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {project.title}
      </motion.h2>

      <motion.p
        className="text-lg lg:text-2xl description-work bg-linear-to-b from-white/70 to-transparent bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {lang === "es" && project.description_es ? project.description_es : project.description}
      </motion.p>

      <div className="flex flex-wrap gap-4">
        {project.technologies?.map((tech: { name: string; icon: string }, i: number) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              title={tech.name}
              loading="lazy"
              className="transition-all duration-300 cursor-pointer filter brightness-0 invert hover:brightness-100 hover:invert-0"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={2000}
          height={1000}
          className="w-full rounded-2xl border-work object-cover"
          loading="lazy"
          quality={85}
        />
      </motion.div>

      <motion.div className="flex gap-4 justify-between" initial={{ opacity: 0, y: 20 }} animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <a target="_blank" rel="noopener noreferrer" href={project.github} className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2 group bg-black hover:bg-neutral-900 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-100 gap-1">
          <RiGithubLine />
          <span className="text-white font-normal">{t[lang].github}</span>
        </a>

        {project.website && (
          <a target="_blank" rel="noopener noreferrer" href={project.website} className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2 group bg-black hover:bg-neutral-900 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-100 gap-1">
            <RiGlobalLine />
            <span className="text-white font-normal">{t[lang].online}</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
});

export default function Work() {
  return (
    <div id="work" className="px-4 lg:px-10 flex flex-col gap-20">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
