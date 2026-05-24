import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – INFRA BAU GmbH",
};

export default function AgbPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0D1F3C] mb-10 tracking-[-0.02em]">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-[#6B7280] leading-relaxed">
          Die Allgemeinen Geschäftsbedingungen der INFRA BAU GmbH werden auf
          Anfrage zugesendet. Bitte wenden Sie sich an{" "}
          <a href="mailto:office@infrabau.at" className="text-[#1D4ED8]">
            office@infrabau.at
          </a>
          .
        </p>
      </div>
    </section>
  );
}
