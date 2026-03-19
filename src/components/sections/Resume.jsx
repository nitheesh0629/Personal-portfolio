"use client";
import { motion } from "framer-motion";
import { Download, Eye, FileText, ExternalLink, Briefcase, GraduationCap, Code2 } from "lucide-react";
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

const resumeHighlights = [
  {
    icon: Briefcase,
    title: "2+ Years at TCS",
    desc: "Healthcare domain, MERN stack",
    color: "#C9A96E",
    bg: "#F5EDD8",
  },
  {
    icon: GraduationCap,
    title: "B.E. CSE — CGPA 8.20",
    desc: "Rajalakshmi Engineering College",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: Code2,
    title: "3+ Projects",
    desc: "Healthcare, HealthTech, Productivity",
    color: "#10B981",
    bg: "#F0FDF4",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Resume"
          title="Download My Resume"
          subtitle="A comprehensive overview of my professional experience, skills, and achievements."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto"
        >
          {/* Main download card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_4px_30px_rgba(0,0,0,0.07)] overflow-hidden mb-6"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#C9A96E] via-[#D4B896] to-[#F5EDD8]" />
            <div className="p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#F5EDD8] to-[#EDE8DF] border border-[#E8E2D9] flex items-center justify-center flex-shrink-0">
                  <FileText size={30} className="text-[#C9A96E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-1">
                    B. Nitheesh Kumar — Resume
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mb-4">
                    Full Stack Developer · MERN Stack · Healthcare Domain · 2+ Years Experience
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={personal.resume}
                      download="Nitheesh_Kumar_Resume.pdf"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] text-white text-sm font-medium rounded-xl hover:bg-[#2D2D2D] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                    >
                      <Download size={15} />
                      Download PDF
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={personal.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1C1C1C] text-sm font-medium rounded-xl border border-[#E8E2D9] hover:border-[#C9A96E] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all duration-200"
                    >
                      <Eye size={15} />
                      Open in New Tab
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-4 mb-6"
          >
            {resumeHighlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <p className="font-semibold text-[#1C1C1C] text-xs mb-0.5">{item.title}</p>
                <p className="text-[#9B9B9B] text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* PDF Preview — iframe */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {/* Browser-style top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E2D9] bg-[#FAFAF8]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  {["#FF5F57", "#FEBC2E", "#28C840"].map((color) => (
                    <div key={color} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <span className="text-xs text-[#9B9B9B] ml-2 font-medium">
                  Nitheesh_Kumar_Resume.pdf
                </span>
              </div>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#C9A96E] hover:text-[#B8935A] font-medium transition-colors"
              >
                Open full screen <ExternalLink size={10} />
              </a>
            </div>

            {/* Actual PDF iframe */}
            <iframe
              src={`${personal.resume}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume Preview"
              className="w-full"
              style={{ height: "680px", border: "none" }}
            />

            {/* Footer action */}
            <div className="px-5 py-4 bg-[#FAFAF8] border-t border-[#E8E2D9] flex items-center justify-between flex-wrap gap-3">
              <p className="text-xs text-[#9B9B9B]">
                Having trouble viewing?{" "}
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A96E] hover:text-[#B8935A] font-medium underline"
                >
                  Open directly
                </a>
              </p>
              <a
                href={personal.resume}
                download="Nitheesh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1C1C] text-white text-xs font-medium rounded-lg hover:bg-[#2D2D2D] transition-colors duration-200"
              >
                <Download size={12} /> Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
