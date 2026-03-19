"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Projects"
          title="Featured Projects"
          subtitle="A selection of projects I've built — from healthcare platforms to productivity tools."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Card top gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${project.cardBg}`}
                style={{ background: `linear-gradient(90deg, ${project.accentColor}20, ${project.accentColor}40)` }}
              />

              {/* Emoji + Category */}
              <div className="px-5 pt-5 flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAFAF8] to-[#F5F0E8] border border-[#E8E2D9] flex items-center justify-center text-xl">
                  {project.emoji}
                </div>
                <span
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                  style={{
                    backgroundColor: project.accentColor + "15",
                    color: project.accentColor,
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
                <h3 className="font-bold text-[#1C1C1C] text-base mb-2 group-hover:text-[#C9A96E] transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#4A4A4A]">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: project.accentColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium rounded-md bg-[#F5F5F5] text-[#6B6B6B] border border-[#E4E4E4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[#E8E2D9]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1C1C] text-white text-xs font-medium rounded-lg hover:bg-[#2D2D2D] transition-colors duration-200"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5EDD8] text-[#9A7645] text-xs font-medium rounded-lg hover:bg-[#EBDCBA] transition-colors duration-200"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F5] text-[#9B9B9B] text-xs font-medium rounded-lg">
                      Demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/nitheesh0629"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1C] text-white text-sm font-medium rounded-xl hover:bg-[#2D2D2D] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Github size={15} />
            View All Projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
