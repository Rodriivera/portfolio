import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion } from "motion/react";
import { memo } from "react";

const Hero = memo(function Hero() {
  const { lang } = useLanguage();
  const t = {
    en: {
      title: "Hi, I'm Rodrigo Vera.",
      subtitle: "Focused on ",
      performance: " performance",
      rest: ", minimal design, usability, and solid code.",
    },
    es: {
      title: "Hola, soy Rodrigo Vera.",
      subtitle: "Enfocado en",
      performance: " rendimiento",
      rest: ", diseño minimalista, usabilidad y código sólido.",
    },
  } as const;
  return (
    <section className="w-full min-h-[calc(100vh-189.78px)] lg:min-h-[calc(100vh-269.78px)] flex flex-col gap-6 p-10 lg:px-80 mt-20">

      <motion.div 
        className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gray-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        
          <Image
            src="/yo2.png"
            alt="Rodrigo Vera Avatar"
            fill
            sizes="64px"
            className="object-cover"
            priority
            quality={100}
          />
        
      </motion.div>

      <motion.h1 
        className="text-2xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t[lang].title}
      </motion.h1>

      <motion.p 
        className="text-3xl lg:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t[lang].subtitle}
        <span className="text-gray-500">{t[lang].performance}</span>{t[lang].rest}
      </motion.p>
    </section>
  );
});

export default Hero;
