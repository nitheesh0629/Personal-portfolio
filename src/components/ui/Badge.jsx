import { cn } from "@/lib/utils";

export default function Badge({ children, variant = "default", className }) {
  const variants = {
    default: "bg-[#F5F5F5] text-[#4A4A4A] border-[#E4E4E4]",
    warm: "bg-[#F5EDD8] text-[#9A7645] border-[#EBDCBA]",
    dark: "bg-[#1C1C1C] text-white border-transparent",
    success: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    info: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    purple: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
