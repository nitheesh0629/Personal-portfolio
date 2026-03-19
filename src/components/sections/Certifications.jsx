"use client";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Code2, Trophy } from "lucide-react";
import { certifications, achievements } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const iconMap = { Code2, Award, Trophy, BadgeCheck };

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Credentials"
          title="Certifications & Achievements"
          subtitle="Continuous learning milestones and recognitions beyond the classroom."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={itemVariants}
              className="text-[10px] font-semibold text-[#9B9B9B] tracking-widest uppercase mb-4"
            >
              Certifications
            </motion.p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="flex items-center gap-4 p-4 bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: cert.bg }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#1C1C1C] text-sm leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-[#9B9B9B] mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <BadgeCheck size={18} style={{ color: cert.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={itemVariants}
              className="text-[10px] font-semibold text-[#9B9B9B] tracking-widest uppercase mb-4"
            >
              Achievements
            </motion.p>
            <div className="space-y-3">
              {achievements.map((item) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="flex items-start gap-4 p-4 bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-200"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#1C1C1C] text-sm leading-snug mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
