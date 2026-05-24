interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "light";
}

export default function Badge({ children, variant = "blue" }: BadgeProps) {
  const styles = {
    blue: "bg-[#1D4ED8] text-white",
    navy: "bg-[#0D1F3C] text-white",
    light: "bg-[#F8FAFC] text-[#0D1F3C] border border-[#0D1F3C]/20",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-[2px] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
