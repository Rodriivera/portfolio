'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageProvider";


export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = {
    en: { work: "Work", about: "About" },
    es: { work: "Trabajos", about: "Sobre mí" },
  } as const;
  const nextLabel = lang === "en" ? "ES" : "EN";
  const nextFlagSrc = lang === "en" ? "/icons/argentina.svg" : "/icons/united-states.svg";
  return (
    <div className="flex items-center justify-between p-10 lg:p-20">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <Image src="/rg-sf.png" alt="Rodrigo Vera Logo" width={65} height={16} className="w-14 lg:w-16" />
        </Link>
      </motion.div>
      
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ul className="flex gap-3 lg:gap-6 text-lg lg:text-xl items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`work-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="link" href="#work">{t[lang].work}</Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`about-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link className="link" href="#about">{t[lang].about}</Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.button
              key={`lang-${lang}`}
              onClick={toggleLang}
              aria-label="Toggle language"
              className="link text-lg lg:text-xl inline-flex items-center cursor-pointer gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>{nextLabel}</span>
              <Image src={nextFlagSrc} alt={`Switch to ${nextLabel}`} width={20} height={14} className="inline-block" />
            </motion.button>
          </AnimatePresence>
        </ul>
      </motion.nav>

    </div>
  )
}
