'use client';
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";


export default function Footer() {
  const { lang } = useLanguage();
  const t = {
    en: { contact: "Contact", thanks: "Thanks for review." },
    es: { contact: "Contacto", thanks: "Gracias por revisar." },
  } as const;
  return (
    <motion.div
      className="flex flex-col gap-10 px-4 lg:px-52 py-10 lg:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h3
        className="text-3xl lg:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {t[lang].contact}
      </motion.h3>

      <nav>
        <motion.ul
          className="text-lg lg:text-xl flex flex-col gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link target="_blank" className="link" href="mailto:verarodrigoignacio@hotmail.com">Mail</Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link target="_blank" className="link" href="https://www.linkedin.com/in/verarodrigoignacio/">LinkedIn</Link>
          </motion.li>
          <motion.li whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link target="_blank" className="link" href="https://github.com/Rodriivera">GitHub</Link>
          </motion.li>
        </motion.ul>
      </nav>

      <motion.p
        className="text-xl lg:text-2xl text-end"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {t[lang].thanks}
      </motion.p>
    </motion.div>
  )
}
