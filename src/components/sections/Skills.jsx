"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Monitor, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const iconMap = { Code2, Monitor, Server, Wrench };

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#1C1C1C]">{name}</span>
        <span className="text-xs text-[#9B9B9B] font-medium">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#F0EDE8] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-[#C9A96E] to-[#9A7645]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Skills"
          title="Technical Expertise"
          subtitle="A curated set of technologies I've mastered through real-world projects and professional experience."
        />

        {/* Skill Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: group.color + "18" }}
                  >
                    <Icon size={17} style={{ color: group.color }} />
                  </div>
                  <h3 className="font-semibold text-[#1C1C1C] text-sm">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
