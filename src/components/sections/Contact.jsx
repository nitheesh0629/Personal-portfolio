"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "#EA4335",
    bg: "#FEF2F2",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: "#10B981",
    bg: "#F0FDF4",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@nitheesh0629",
    href: personal.github,
    external: true,
    color: "#1C1C1C",
    bg: "#F5F5F5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nitheesh-kumar",
    href: personal.linkedin,
    external: true,
    color: "#0077B5",
    bg: "#EFF6FF",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
    color: "#C9A96E",
    bg: "#F5EDD8",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      // EmailJS integration — replace with your service/template/public key
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          to_name: "Nitheesh Kumar",
        },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFAF8] text-[#1C1C1C] placeholder-[#C4C4C4] outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[#C9A96E]/30 ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-[#E8E2D9] focus:border-[#C9A96E]"
    }`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Intro card */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-[#1C1C1C] text-white rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C9A96E] flex items-center justify-center mb-4">
                <Mail size={18} />
              </div>
              <h3 className="font-bold text-lg mb-2">Open to opportunities</h3>
              <p className="text-[#9B9B9B] text-sm leading-relaxed">
                Whether it&apos;s a full-time role, freelance project, or just a conversation — I&apos;m always open to exploring what&apos;s possible.
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div variants={itemVariants} className="space-y-2.5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#E8E2D9] hover:border-[#C9A96E] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all duration-200 group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                        style={{ backgroundColor: item.bg }}
                      >
                        <item.icon size={16} style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-[#9B9B9B] font-medium uppercase tracking-wider leading-tight">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[#1C1C1C] truncate">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#E8E2D9]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: item.bg }}
                      >
                        <item.icon size={16} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#9B9B9B] font-medium uppercase tracking-wider leading-tight">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[#1C1C1C]">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl border border-[#E8E2D9] shadow-[0_4px_30px_rgba(0,0,0,0.07)] p-6 lg:p-8"
            >
              <h3 className="font-bold text-[#1C1C1C] text-lg mb-1">Send a Message</h3>
              <p className="text-[#9B9B9B] text-sm mb-6">
                I&apos;ll get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity"
                    className={inputClass("subject")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A4A4A] mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1C1C] text-white text-sm font-medium rounded-xl hover:bg-[#2D2D2D] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2.5 p-3.5 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0] text-[#16A34A] text-sm"
                    >
                      <CheckCircle size={16} />
                      Message sent! I&apos;ll get back to you shortly.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2.5 p-3.5 bg-[#FEF2F2] rounded-xl border border-[#FCA5A5] text-red-600 text-sm"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please email me directly at{" "}
                      <a href={`mailto:${personal.email}`} className="underline font-medium">
                        {personal.email}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-[10px] text-[#C4C4C4] text-center">
                  To enable email sending, configure EmailJS credentials in Contact.jsx
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
