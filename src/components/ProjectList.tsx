import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lib/utils";
import type { Project } from "@data/projects";

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedId(expandedId === title ? null : title);
  };

  return (
    <div className="flex flex-col reveal-stagger">
      {projects.map((project) => {
        const isOpen = expandedId === project.title;
        return (
          <div
            key={project.title}
            className="group border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300 reveal-child"
          >
            <button
              onClick={() => toggleProject(project.title)}
              className="w-full flex flex-col md:flex-row md:items-baseline justify-between py-6 cursor-pointer text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3
                className={cn(
                  "font-serif text-2xl md:text-3xl transition-all duration-300",
                  isOpen
                    ? "text-neutral-900 dark:text-neutral-50 italic"
                    : "text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 group-hover:italic",
                )}
              >
                {project.title}
              </h3>
              <div
                className={cn(
                  "flex gap-8 md:gap-24 text-sm md:text-base font-mono transition-colors duration-300 mt-2 md:mt-0",
                  isOpen
                    ? "text-neutral-900 dark:text-neutral-300"
                    : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-300",
                )}
              >
                <span className="w-56 text-left">
                  {project.description.slice(0, 50)}...
                </span>
                <span>{project.category}</span>
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-12 pt-4 prose prose-neutral dark:prose-invert max-w-none">
                    <div className="relative h-full aspect-[1/1] md:aspect-[16/9] rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden border mb-6">
                      <img
                        src={project.image.src}
                        alt={project.image.alt}
                        className="object-cover object-top h-full w-full my-0"
                        width={800}
                        height={800}
                        loading="lazy"
                      />
                    </div>
                    <p className="text-lg">{project.description}</p>
                    <div className="flex gap-4 mt-6 not-prose">
                      <a
                        href={project.href}
                        className="inline-block font-medium dark:decoration-white dark:hover:text-white decoration-black/15 hover:decoration-black/25 text-current hover:text-black transition-colors duration-300 ease-in-out underline underline-offset-2 text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
