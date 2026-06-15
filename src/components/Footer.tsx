import Image from "next/image";
import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-12">
      <div className="container-px">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src={business.logo}
                alt={`Logo da ${business.name}`}
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="text-base font-bold text-cloud">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted md:text-nowrap">
              {business.address.full}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Redes sociais
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={business.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Instagram: {business.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Facebook: {business.social.facebook.handle}
                </a>
              </li>
              <li>
                <a
                  href={business.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  WhatsApp: {business.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-white/5 pt-6 text-center">
          <p className="text-sm font-medium text-muted">
            Conteúdo destinado ao público maior de 18 anos. Consuma com
            responsabilidade.
          </p>
          <p className="text-xs text-muted/70">
            Site institucional desenvolvido para apresentação comercial da
            empresa.
          </p>
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} {business.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
