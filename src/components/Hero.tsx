import Image from "next/image";
import { business, heroBadges } from "@/data/business";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pt-28 md:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="container-px relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            Corumbataí do Sul - PR
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-cloud sm:text-4xl md:text-5xl">
            Jota Beer! Conveniência e Distribuidora em{" "}
            <span className="text-brand">Corumbataí do Sul</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Empresa familiar desde 2022, oferecendo variedade, atendimento
            próximo e uma seleção de bebidas nacionais e importadas para clientes
            da região.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#sobre" className="btn-primary">
              Conhecer a Jota Beer
            </a>
            <WhatsAppButton variant="secondary" />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:max-w-lg">
            {heroBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-xl border border-white/5 bg-ink-soft px-4 py-3 text-sm font-medium text-cloud"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-brand/20 bg-ink-soft p-8 shadow-2xl sm:h-80 sm:w-80">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent"
            />
            <Image
              src={business.logo}
              alt={`Logo da ${business.name}`}
              width={280}
              height={280}
              className="relative h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
