import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiGithubFill, RiGlobalLine } from "@remixicon/react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen p-6 lg:p-20">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition"
      >
        <RiArrowLeftLine size={20} />
        Volver
      </Link>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">{project.title}</h1>
          <p className="text-xl text-white/70 mb-6">{project.description}</p>
          
          <div className="flex gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition rounded-lg"
              >
                <RiGithubFill size={20} />
                GitHub
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition rounded-lg"
              >
                <RiGlobalLine size={20} />
                Ver sitio
              </a>
            )}
          </div>
        </div>

        <div className="relative w-full h-[400px] lg:h-[600px] mb-12 rounded-2xl overflow-hidden border-work">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-medium mb-6">Tecnologías utilizadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 p-6 bg-white/5 hover:bg-white/10 transition rounded-xl"
              >
                <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                <span className="text-sm text-white/70">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
