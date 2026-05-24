interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
        light ? "text-[#1D4ED8]" : "text-[#1D4ED8]"
      }`}
    >
      {children}
    </span>
  );
}
