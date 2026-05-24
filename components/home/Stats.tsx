import AnimatedNumber from "@/components/ui/AnimatedNumber";

const stats = [
  { target: 12, suffix: "+", label: "Jahre Erfahrung" },
  { target: 200, suffix: "+", label: "Projekte realisiert" },
  { target: 32, suffix: "", label: "Gemeinden betreut" },
  { target: 4, suffix: "", label: "Leistungsbereiche" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#1D4ED8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ target, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                <AnimatedNumber target={target} suffix={suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
