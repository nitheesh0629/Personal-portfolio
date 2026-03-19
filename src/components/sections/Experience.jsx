"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          title="Work Experience"
          subtitle="Professional journey and the impact I've made building real-world applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto"
        >
          {experience.map((job, i) => (
            <motion.div key={job.id} variants={itemVariants} className="relative">
              <div className="flex gap-5 sm:gap-6">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1C1C] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <Building2 size={20} className="text-white" />
                  </div>
                  <div className="w-px flex-1 bg-gradient-to-b from-[#E8E2D9] to-transparent mt-3" />
                </div>

                {/* Content card */}
                <div className="flex-1 pb-8">
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  >
                    {/* Header */}
                    <div className="p-6 pb-5 border-b border-[#E8E2D9]">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-[#1C1C1C]">{job.title}</h3>
                          <p className="text-[#C9A96E] font-semibold text-sm mt-0.5">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5EDD8] text-[#9A7645] text-xs font-semibold rounded-full">
                            <Calendar size={11} />
                            {job.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0FDF4] text-[#16A34A] text-xs font-semibold rounded-full border border-[#BBF7D0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#9B9B9B] font-medium">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#9B9B9B] font-medium">
                          <Briefcase size={12} />
                          Domain: {job.domain}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-6 pt-5">
                      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <p className="text-xs font-semibold text-[#1C1C1C] tracking-wider uppercase">
                          Key Contributions
                        </p>
                        {job.achievements.map((ach, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.08, duration: 0.4 }}
                            className="flex items-start gap-2.5"
                          >
                            <div className="w-5 h-5 rounded-lg bg-[#F5EDD8] flex items-center justify-center mt-0.5 flex-shrink-0">
                              <ChevronRight size={11} className="text-[#C9A96E]" />
                            </div>
                            <p className="text-sm text-[#4A4A4A] leading-relaxed">{ach}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech used */}
                      <div className="mt-5 pt-5 border-t border-[#E8E2D9]">
                        <p className="text-xs font-semibold text-[#9B9B9B] tracking-wider uppercase mb-3">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.techUsed.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-[#F5F5F5] text-[#4A4A4A] text-xs font-medium rounded-lg border border-[#E4E4E4]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Currently working indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 ml-3"
          >
            <div className="w-6 h-6 rounded-full bg-[#F0FDF4] border-2 border-[#16A34A] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            </div>
            <span className="text-sm text-[#9B9B9B]">Currently here</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
