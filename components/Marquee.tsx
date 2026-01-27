'use client';
import React, { memo } from 'react';
import { RiAsterisk } from "@remixicon/react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";

const Marquee = memo(function Marquee() {
  const { lang } = useLanguage();
  const t = {
    en: { text: "SELECTED WORKS" },
    es: { text: "TRABAJOS SELECCIONADOS" },
  } as const;

  const content = (
    <>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest">{t[lang].text}</span>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest"><RiAsterisk /></span>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest">{t[lang].text}</span>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest"><RiAsterisk /></span>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest">{t[lang].text}</span>
      <span className="mx-6 text-xl lg:text-3xl tracking-widest"><RiAsterisk /></span>
    </>
  );

  return (
    <section className="w-full overflow-hidden mt-20 mb-20">
      <motion.div 
        className="bg-black py-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white py-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <div className="flex text-black text-outline star">{content}</div>
          <div className="flex text-black text-outline star">{content}</div>
          <div className="flex text-black text-outline star">{content}</div>
          <div className="flex text-black text-outline star">{content}</div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-black py-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
          <div className="flex text-white">{content}</div>
        </div>
      </motion.div>
    </section>
  );
});

export default Marquee;