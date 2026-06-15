import { business } from "@/data/business";
import SectionTitle from "./SectionTitle";

export default function Location() {
  return (
    <section id="localizacao" className="bg-ink py-20 md:py-28">
      <div className="container-px">
        <SectionTitle
          eyebrow="Localização"
          title="Onde encontrar a Jota Beer"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-ink-soft lg:col-span-2">
            <iframe
              src={business.map.embedUrl}
              title={business.map.label}
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="rounded-2xl border border-brand/20 bg-ink-soft p-6 sm:p-8">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Endereço
                </dt>
                <dd className="mt-1 text-base text-cloud">
                  {business.address.street} - {business.address.district}
                </dd>
                <dd className="text-sm text-muted">
                  CEP {business.address.zip}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Cidade
                </dt>
                <dd className="mt-1 text-base text-cloud">
                  {business.address.city} - {business.address.state}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Telefone
                </dt>
                <dd className="mt-1 text-base text-cloud">
                  <a
                    href={`tel:+${business.phone.raw}`}
                    className="transition-colors hover:text-brand"
                  >
                    {business.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Horário
                </dt>
                <dd className="mt-1 text-sm text-muted">{business.openingHours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
