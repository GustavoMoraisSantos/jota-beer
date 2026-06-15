import { differentials } from "@/data/business";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-ink-soft py-20 md:py-28">
      <div className="container-px">
        <Reveal>
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher a Jota Beer"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-white/5 bg-ink p-6 transition-colors hover:border-brand/40">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brand" />
                </div>
                <h3 className="text-lg font-semibold text-cloud">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
