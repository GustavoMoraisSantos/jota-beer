import { productCategories } from "@/data/business";
import SectionTitle from "./SectionTitle";
import WhatsAppButton from "./WhatsAppButton";

export default function Products() {
  return (
    <section id="produtos" className="bg-ink py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Produtos e atendimento"
          title="Produtos e soluções para diferentes momentos"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-white/5 bg-ink-soft p-6 transition-colors hover:border-brand/40"
            >
              <h3 className="text-lg font-semibold text-brand">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {category.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/5 bg-ink-soft p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted">
            A disponibilidade de produtos pode variar conforme estoque,
            fornecedores e programação da empresa. Para informações comerciais
            atualizadas, entre em contato com a equipe.
          </p>
          <div className="mt-6">
            <WhatsAppButton label="Consultar informações comerciais" />
          </div>
        </div>
      </div>
    </section>
  );
}
