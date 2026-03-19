"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("flex flex-col mb-12 lg:mb-16", alignClass[align], className)}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-widest text-[#C9A96E] bg-[#F5EDD8] rounded-full uppercase mb-4 w-fit">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-[#1C1C1C] tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
