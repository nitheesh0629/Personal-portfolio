"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { personal, techStack } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#FAFAF8]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#F5EDD8]/30 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#EDE8DF]/25 blur-[110px]" />
        <div className="absolute top-[35%] left-[15%] w-[300px] h-[300px] rounded-full bg-[#F0E8D8]/20 blur-[90px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A96E22 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-sm text-[#16A34A] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-5">
              <p className="text-[#9B9B9B] text-base font-medium mb-1 tracking-wide">
                Hi there, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold text-[#1C1C1C] tracking-tight leading-[1.05]">
                B. Nitheesh
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #C9A96E 0%, #9A7645 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kumar
                </span>
              </h1>
            </motion.div>

            {/* Title chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-5">
              <span className="px-3.5 py-1 bg-[#1C1C1C] text-white text-sm font-medium rounded-full">
                Full Stack Developer
              </span>
              <span className="px-3.5 py-1 bg-[#F5EDD8] text-[#9A7645] text-sm font-medium rounded-full">
                MERN Stack Engineer
              </span>
              <span className="inline-flex items-center gap-1 px-3.5 py-1 bg-[#F5F5F5] text-[#6B6B6B] text-sm font-medium rounded-full">
                <MapPin size={11} /> Chennai, India
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-[#6B6B6B] text-base lg:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building scalable, user-centric web applications with clean code and modern design.
              Specialized in healthcare systems at{" "}
              <span className="text-[#1C1C1C] font-medium">Tata Consultancy Services</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1C] text-white font-medium text-sm rounded-xl hover:bg-[#2D2D2D] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work <ArrowRight size={15} />
              </button>
              <a
                href={personal.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1C1C1C] font-medium text-sm rounded-xl border border-[#E8E2D9] hover:border-[#C9A96E] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download size={15} /> Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 sm:gap-8 pt-8 border-t border-[#E8E2D9] mb-8"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "3+", label: "Projects Built" },
                { value: "TCS", label: "Current Company" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-[#1C1C1C] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#9B9B9B] mt-0.5 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech at a Glance */}
            <motion.div variants={itemVariants}>
              <p className="text-[10px] font-semibold text-[#9B9B9B] tracking-widest uppercase mb-3">
                Tech at a glance
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech.name}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#4A4A4A] text-xs font-medium rounded-full border border-[#E8E2D9] shadow-[0_1px_6px_rgba(0,0,0,0.04)] hover:border-[#C9A96E] hover:shadow-[0_3px_12px_rgba(201,169,110,0.15)] transition-all duration-200 cursor-default"
                  >
                    <span>{tech.emoji}</span>
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-28px] rounded-full border border-dashed border-[#E8E2D9]"
              />
              {/* Counter-rotating middle ring with dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-14px] rounded-full border border-[#EDE8DF]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#C9A96E]" />
              </motion.div>

              {/* Avatar — photo with NK fallback */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 border-white bg-gradient-to-br from-[#F5EDD8] via-[#EDE8DF] to-[#E0D8CB]">
                {/* NK fallback — always rendered, hidden when photo loads */}
                {imgError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl lg:text-7xl font-bold text-[#C9A96E] leading-none">
                      NK
                    </span>
                    <span className="text-xs text-[#9B9B9B] font-medium mt-1 tracking-widest uppercase">
                      Portfolio
                    </span>
                  </div>
                )}
                {!imgError && (
                  <Image
                    src="/profile.jpg"
                    alt="B. Nitheesh Kumar"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                    style={{ objectPosition: "center 15%" }}
                    sizes="(max-width: 768px) 288px, 320px"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Floating chips */}
              {[
                { label: "⚛️ React.js", top: "-top-4", right: "-right-10", delay: 0 },
                { label: "🟢 Node.js", top: "top-1/2 -translate-y-1/2", right: "-right-20", delay: 0.8 },
                { label: "🍃 MongoDB", bottom: "-bottom-4", left: "-left-10", delay: 0.4 },
                { label: "⚡ Express", top: "-top-4", left: "-left-14", delay: 1.2 },
              ].map((chip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + chip.delay, duration: 0.4 }}
                  className={`absolute ${chip.top || ""} ${chip.bottom || ""} ${chip.right || ""} ${chip.left || ""} px-3 py-1.5 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#E8E2D9] text-xs font-medium text-[#1C1C1C] whitespace-nowrap`}
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="block"
                  >
                    {chip.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[10px] text-[#9B9B9B] tracking-[0.2em] uppercase font-medium group-hover:text-[#C9A96E] transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-[#E8E2D9] flex items-start justify-center pt-1.5 group-hover:border-[#C9A96E] transition-colors"
          >
            <div className="w-1 h-2 rounded-full bg-[#C9A96E]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
