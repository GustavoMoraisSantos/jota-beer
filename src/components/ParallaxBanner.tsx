import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Faixa com imagem de fundo fixa (efeito parallax via background-attachment: fixed).
 * Troque a imagem em `backgroundImage` por outra foto de /public, se desejar.
 */
export default function ParallaxBanner() {
  return (
    <section
      aria-label="Variedade e atendimento da Jota Beer"
      className="relative bg-ink bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/galeria/bar-e-produtos.jpg')" }}
    >
      <div className="bg-ink/80 backdrop-blur-[2px]">
        <div className="container-px py-24 text-center md:py-36">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Jota Beer!
            </p>
            <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-cloud sm:text-3xl md:text-4xl">
              Variedade e atendimento próximo em Corumbataí do Sul
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Empresa familiar desde 2022, com seleção de bebidas nacionais e
              importadas e relacionamento direto com a região.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
