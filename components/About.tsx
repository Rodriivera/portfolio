import React, { useEffect, useRef, useState, memo } from "react";
import { useLanguage } from "./LanguageProvider";
import { motion } from "motion/react";

const About = memo(function About() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "About me.",
      lines: [
        "I’m a systems analyst with a strong focus on full-stack development.",
        "I enjoy building clean, intuitive, and visually engaging interfaces that feel natural to use.",
        "I work comfortably across the stack, from designing user experiences to implementing solid backend logic and database structures.",
        "I’m especially interested in creating functional web applications that solve real problems, not just look good.",
        "When I’m not coding or improving my projects, I’m probably exploring new technologies, refining my skills, or chilling indoors with music or a good movie.",
      ],
    },
    es: {
      title: "Sobre mí.",
      lines: [
        "Soy analista de sistemas con un fuerte enfoque en desarrollo full-stack.",
        "Disfruto construir interfaces limpias, intuitivas y visualmente atractivas que se sientan naturales de usar.",
        "Trabajo cómodamente en todo el stack, desde diseñar experiencias de usuario hasta implementar lógica backend sólida y estructuras de base de datos.",
        "Estoy especialmente interesado en crear aplicaciones web funcionales que resuelvan problemas reales, no solo que se vean bien.",
        "Cuando no estoy programando o mejorando mis proyectos, probablemente esté explorando nuevas tecnologías, refinando mis habilidades, o relajándome en casa con música o una buena película.",
      ],
    },
  };

  const lines = content[lang].lines;

  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const activatedRef = useRef<boolean[]>(Array(lines.length).fill(false));
  const [opacities, setOpacities] = useState<boolean[]>(
    Array(lines.length).fill(false),
  );

  useEffect(() => {
    let rafId: number | null = null;
    let lastCallTime = 0;
    const throttleMs = 100;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCallTime < throttleMs) return;
      lastCallTime = now;

      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const midScreen = window.innerHeight / 2;

        const newOpacities = lineRefs.current.map((ref, idx) => {
          if (!ref) return false;
          const rect = ref.getBoundingClientRect();
          const isInMid = rect.top < midScreen && rect.bottom > midScreen;
          const hasPassed = rect.bottom < midScreen;

          if (isInMid || hasPassed) {
            if (!activatedRef.current[idx]) {
              activatedRef.current[idx] = true;
            }
          }

          return (
            isInMid || hasPassed || (activatedRef.current[idx] && rect.top < midScreen)
          );
        });

        setOpacities((prev) => {
          if (
            prev.length === newOpacities.length &&
            prev.every((v, i) => v === newOpacities[i])
          ) {
            return prev;
          }
          return newOpacities;
        });
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    activatedRef.current = Array(lines.length).fill(false);
    setOpacities(Array(lines.length).fill(false));
  }, [lines.length]);

  return (
    <section id="about" className="relative px-4 lg:px-10 flex flex-col gap-4 lg:w-5/6 pt-30">
      {/* Texto circular */}
      <motion.div 
        className="absolute top-0 left-0 w-30 h-30  -translate-x-8 -translate-y-8 ml-11 lg:ml-18 mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="text-[27px] font-normal fill-current tracking-wider">
              <textPath href="#circlePath" startOffset="0%">
                RODRIGO VERA • RODRIGO VERA • 
              </textPath>
            </text>
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-current"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.h2 
        className="text-3xl lg:text-5xl mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {content[lang].title}
      </motion.h2>
      <motion.p 
        className="text-xl lg:text-2xl font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className={`block transition-opacity duration-500 py-0.5 ${opacities[i] ? "opacity-100" : "opacity-40"}`}
          >
            {line}
          </span>
        ))}
      </motion.p>
    </section>
  );
});

export default About;
