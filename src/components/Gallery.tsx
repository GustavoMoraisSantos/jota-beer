import { galleryItems } from "@/data/business";
import SectionTitle from "./SectionTitle";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-ink-soft py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Galeria"
          title="Cases e momentos da Jota Beer"
          description="Espaço preparado para receber fotos reais da empresa. As imagens abaixo são marcadores que podem ser substituídos quando o material oficial estiver disponível."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
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
                <h3 className="text-base font-semibold text-cloud">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
