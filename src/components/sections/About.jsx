"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Code2, Heart, Zap, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
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

const highlights = [
  {
    icon: Briefcase,
    title: "2+ Years at TCS",
    desc: "Enterprise healthcare domain, MERN stack development",
    color: "#C9A96E",
    bg: "#F5EDD8",
  },
  {
    icon: Code2,
    title: "MERN Stack",
    desc: "Proficient in React, Node.js, Express & MongoDB",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: Heart,
    title: "Healthcare Domain",
    desc: "Clinical workflow and patient management systems",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    desc: "Fast, accessible, and scalable applications",
    color: "#10B981",
    bg: "#F0FDF4",
  },
];

export default function About() {
  const [avatarError, setAvatarError] = useState(false);
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Passionate about building great software"
          subtitle="A Full Stack Developer focused on clean code, exceptional user experience, and real-world impact."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Profile card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-[#E8E2D9] mb-8"
            >
              {/* Quote banner — replaces photo banner */}
              <div className="relative px-6 pt-6 pb-10 bg-gradient-to-br from-[#FAFAF8] to-[#F5EDD8] border-b border-[#E8E2D9] overflow-hidden">
                {/* Decorative large quote mark */}
                <span className="absolute -top-2 left-4 text-[88px] font-serif leading-none text-[#C9A96E]/15 select-none pointer-events-none">
                  &ldquo;
                </span>
                <div className="relative z-10 pl-3 pt-3">
                  <p className="text-[#3D3D3D] text-sm leading-relaxed italic">
                    First, solve the problem. Then, write the code.
                  </p>
                </div>
              </div>

              <div className="px-6 pt-2 pb-6 bg-[#FAFAF8]">
                <div className="flex items-end gap-4 -mt-10 mb-4">
                  {/* Small profile avatar — profile-small.jpg with NK fallback */}
                  {avatarError ? (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C9A96E] to-[#9A7645] flex items-center justify-center border-4 border-white shadow-[0_8px_24px_rgba(201,169,110,0.3)] flex-shrink-0">
                      <span className="text-white text-2xl font-bold">NK</span>
                    </div>
                  ) : (
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex-shrink-0">
                      <Image
                        src="/profile-small.jpg"
                        alt="B. Nitheesh Kumar"
                        fill
                        quality={100}
                        className="object-cover"
                        style={{ objectPosition: "center top" }}
                        sizes="80px"
                        onError={() => setAvatarError(true)}
                      />
                    </div>
                  )}
                  <div className="pb-1">
                    <p className="font-semibold text-[#1C1C1C]">{personal.name}</p>
                    <p className="text-sm text-[#6B6B6B]">{personal.title}</p>
                  </div>
                </div>

                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{personal.bio}</p>

                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#9B9B9B]">
                    <MapPin size={12} className="text-[#C9A96E]" /> {personal.location}
                  </span>
                  <span className="text-[#E8E2D9]">·</span>
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                    <span className="text-[#16A34A] font-medium">Available for work</span>
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {[
                    { icon: Github, href: personal.github, label: "GitHub" },
                    { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
                    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E2D9] text-[#4A4A4A] text-xs font-medium hover:bg-[#F5EDD8] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all duration-200"
                    >
                      <Icon size={13} /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Extended bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              {personal.bioExtended?.map((para, i) => (
                <p key={i} className="text-[#6B6B6B] leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <p className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.title}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Stats card */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 p-5 rounded-2xl bg-[#1C1C1C] text-white"
            >
              <p className="text-[10px] text-[#9B9B9B] font-semibold tracking-widest uppercase mb-4">
                At a glance
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "2+", label: "Yrs Exp." },
                  { value: "3+", label: "Projects" },
                  { value: "8.20", label: "CGPA" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-[#C9A96E]">{s.value}</p>
                    <p className="text-xs text-[#9B9B9B] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
