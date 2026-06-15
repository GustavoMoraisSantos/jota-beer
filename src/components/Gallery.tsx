import Image from "next/image";
import { galleryItems } from "@/data/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-ink-soft py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="Galeria"
            title="Cases e momentos da Jota Beer"
            description="Um pouco do ambiente e da variedade da Jota Beer. Os cards marcadores podem ser substituídos por fotos reais quando o material oficial estiver disponível."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) =>
            item.image ? (
              <Reveal key={item.title} delay={index * 100}>
              <figure
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-brand/20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                />
                <figcaption className="relative p-6">
                  <h3 className="text-base font-semibold text-cloud">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.text}
                  </p>
                </figcaption>
              </figure>
              </Reveal>
            ) : (
              <Reveal key={item.title} delay={index * 100}>
              <figure
                className="flex aspect-[4/5] flex-col justify-end rounded-2xl border border-brand/20 bg-ink p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand/30 text-brand"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="1.6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <figcaption>
                  <h3 className="text-base font-semibold text-cloud">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.text}
                  </p>
                </figcaption>
              </figure>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
