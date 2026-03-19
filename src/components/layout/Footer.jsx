"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#111111] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#1C1C1C] text-xs font-bold">NK</span>
              </div>
              <span className="font-semibold">Nitheesh Kumar</span>
            </div>
            <p className="text-[#9B9B9B] text-sm leading-relaxed mb-5">
              Full Stack Developer specializing in the MERN stack. Building scalable, user-centric
              web applications with clean code and modern design.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-[#9B9B9B]">
              <MapPin size={13} />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9B9B9B] text-sm hover:text-[#C9A96E] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Get in Touch</p>
            <ul className="space-y-3">
              {[
                { icon: Mail, href: `mailto:${personal.email}`, label: personal.email },
                { icon: Phone, href: `tel:${personal.phone}`, label: personal.phone },
                { icon: Github, href: personal.github, label: "GitHub Profile", external: true },
                { icon: Linkedin, href: personal.linkedin, label: "LinkedIn Profile", external: true },
              ].map(({ icon: Icon, href, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-[#9B9B9B] text-sm hover:text-[#C9A96E] transition-colors duration-200"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9B9B9B] text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} B. Nitheesh Kumar · Built with{" "}
            <Heart size={12} className="text-[#C9A96E] fill-[#C9A96E]" /> using Next.js
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personal.github },
              { icon: Linkedin, href: personal.linkedin },
              { icon: Mail, href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#C9A96E] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={14} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#C9A96E] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
