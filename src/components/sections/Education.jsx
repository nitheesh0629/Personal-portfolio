"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { education } from "@/data/portfolio";
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

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="The foundation that shaped my engineering mindset and problem-solving approach."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <div className="flex gap-5 sm:gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#9A7645] flex items-center justify-center shadow-[0_4px_20px_rgba(201,169,110,0.3)] flex-shrink-0">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <div className="w-px flex-1 bg-gradient-to-b from-[#C9A96E]/30 to-transparent mt-3" />
                </div>

                {/* Card */}
                <div className="flex-1 pb-8">
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                  >
                    {/* Header */}
                    <div className="px-6 pt-6 pb-5 border-b border-[#E8E2D9]">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-lg font-bold text-[#1C1C1C] mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-[#C9A96E] font-semibold text-sm">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5EDD8] text-[#9A7645] text-xs font-semibold rounded-full">
                            <Calendar size={11} /> {edu.year}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1C1C1C] text-white text-xs font-semibold rounded-full">
                            <Star size={11} className="fill-[#C9A96E] text-[#C9A96E]" />
                            {edu.achievement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body — only for degree-level entries */}
                    {edu.description && edu.id === 1 && (
                      <div className="px-6 py-5">
                        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                          {edu.description}
                        </p>
                        {edu.highlights && edu.highlights.length > 0 && (
                          <ul className="space-y-2">
                            {edu.highlights.map((h, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-[#4A4A4A]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Footer — only for college entry */}
                    {edu.id === 1 && (
                      <div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#E8E2D9] flex items-center gap-2 flex-wrap">
                        {["Computer Science", "Data Structures", "Web Technologies", "OOP"].map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-white text-[#6B6B6B] text-xs font-medium rounded-lg border border-[#E8E2D9]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
