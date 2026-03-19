"use client";
import { motion } from "framer-motion";
import { Rocket, BookOpen, Code2, Palette } from "lucide-react";
import { interests } from "@/data/portfolio";
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

const iconMap = { Rocket, BookOpen, Code2, Palette };

export default function Interests() {
  return (
    <section id="interests" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Interests"
          title="Beyond the Code"
          subtitle="What keeps me curious, motivated, and constantly learning outside of work."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {interests.map((item, i) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 bg-[#FAFAF8] rounded-2xl border border-[#E8E2D9] hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${item.color}08, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#1C1C1C] text-sm mb-2 group-hover:text-[#1C1C1C]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9B9B9B] text-xs leading-relaxed">{item.description}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
