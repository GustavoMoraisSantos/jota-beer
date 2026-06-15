# Jota Beer! Distribuidora de Bebidas — Landing Page

Landing page institucional one-page da **Jota Beer! Distribuidora de Bebidas**, bar, conveniência e distribuidora localizada em Corumbataí do Sul - PR.

Construída em **Next.js (App Router) + TypeScript + Tailwind CSS**. Sem banco de dados, sem backend, sem CMS — pronta para deploy em Vercel, Netlify ou hospedagem estática compatível.

## Tecnologias

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Pré-requisitos

- Node.js 18.18+ (recomendado 20+)
- npm

## Como instalar as dependências

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Como gerar o build de produção

```bash
npm run build
npm run start
```

## Estrutura do projeto

```txt
src/
  app/
    layout.tsx       # Metadata/SEO + fonte + html base
    page.tsx         # Monta a landing page (ordem das seções)
    globals.css      # Estilos globais + utilitários Tailwind
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Differentials.tsx
    Products.tsx
    Gallery.tsx
    Location.tsx
    Contact.tsx
    Footer.tsx
    SectionTitle.tsx
    WhatsAppButton.tsx
  data/
    business.ts      # Todos os dados editáveis da empresa
public/
  logo-jota-beer.png # Logo da marca
```

## Onde editar os dados da empresa

Todos os textos e informações comerciais estão centralizados em
[`src/data/business.ts`](src/data/business.ts). Edite ali:

- Nome, segmento e descrição
- Endereço completo e CEP
- Telefone e WhatsApp (número + mensagem pré-preenchida)
- Instagram e Facebook
- Diferenciais (`differentials`)
- Categorias de produtos (`productCategories`)
- Cards da galeria (`galleryItems`)
- Itens dos menus, badges do hero e card "Sobre"

Evite alterar textos direto nos componentes — prefira sempre o `business.ts`.

## Onde trocar a logo

Substitua o arquivo `public/logo-jota-beer.png` mantendo o **mesmo nome**.
Se quiser usar outro nome/caminho, atualize o campo `logo` em
`src/data/business.ts`.

> Observação: a logo atual é um **placeholder**. Substitua pelo arquivo oficial
> enviado pelo cliente.

## Onde configurar o mapa

O mapa é um `iframe` do Google Maps. A URL fica em `business.map.embedUrl` em
[`src/data/business.ts`](src/data/business.ts).

Para trocar: no Google Maps, busque o endereço → **Compartilhar** →
**Incorporar um mapa** → copie o valor do atributo `src` do iframe e cole em
`embedUrl`. O embed público padrão **não exige chave de API**, então nenhuma
chave fica exposta no código.

## Onde adicionar fotos reais na galeria

A galeria é controlada por `galleryItems` em
[`src/data/business.ts`](src/data/business.ts). Cada item tem `title`, `text` e
um campo opcional `image`:

1. Adicione o arquivo da foto em `public/galeria/` (ex.: `public/galeria/fachada.jpg`).
2. Em `galleryItems`, preencha `image: "/galeria/fachada.jpg"` no item desejado.
3. Itens **sem** `image` exibem automaticamente um card placeholder elegante.

O `title` de cada item é usado como `alt` da imagem, então mantenha-o descritivo.
Não é necessário editar `Gallery.tsx`.

## Variáveis de ambiente (opcional)

- `NEXT_PUBLIC_SITE_URL`: URL pública do site, usada como base das imagens de
  Open Graph (ex.: `https://jotabeer.com.br`). Se não definida, usa um valor
  padrão.

## Deploy

O projeto é compatível com Vercel/Netlify (deploy direto do repositório). Para
hospedagem estática, gere o build com `npm run build`.

---

Conteúdo destinado ao público maior de 18 anos. Consuma com responsabilidade.
