/**
 * Dados editáveis da empresa.
 *
 * Centralize aqui todas as informações comerciais (nome, contatos, textos,
 * diferenciais, categorias e mapa). Os componentes consomem este arquivo, então
 * para atualizar o site basta editar os valores abaixo.
 */

const whatsappNumber = "5544920011507";
const whatsappMessage = "Olá! Vim pelo site da Jota Beer e gostaria de mais informações.";

export const business = {
  name: "Jota Beer! Distribuidora de Bebidas",
  shortName: "Jota Beer!",
  segment: "Bar, conveniência e distribuidora de bebidas",
  foundedYear: 2022,
  description:
    "A Jota Beer nasceu em 2022 em Corumbataí do Sul - PR, com origem familiar e foco em atendimento próximo, variedade e confiança. A marca foi idealizada por João Paulo Vieira e vem construindo sua presença no ramo de bebidas e alimentos, trabalhando com fornecedores nacionais, importados e empresas parceiras.",

  // Logo: substitua o arquivo em /public/logo-jota-beer.png mantendo o mesmo nome.
  logo: "/logo-jota-beer.png",

  address: {
    street: "R. Guarani, 164",
    district: "Centro",
    city: "Corumbataí do Sul",
    state: "PR",
    zip: "86970-000",
    get full() {
      return `${this.street} - ${this.district}, ${this.city} - ${this.state}, ${this.zip}`;
    },
  },

  phone: {
    display: "(44) 92001-1507",
    raw: "5544920011507",
  },

  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    get url() {
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    },
  },

  social: {
    instagram: {
      handle: "@jotabeeroficial",
      url: "https://instagram.com/jotabeeroficial",
    },
    facebook: {
      handle: "jotabeeroficial",
      url: "https://facebook.com/jotabeeroficial",
    },
  },

  /**
   * Mapa incorporado (Google Maps).
   * Troque a URL abaixo pelo src do iframe gerado em "Compartilhar > Incorporar um mapa".
   * Não é necessária chave de API para o embed público padrão do Google Maps.
   */
  map: {
    embedUrl:
      "https://www.google.com/maps?q=R.+Guarani,+164+-+Centro,+Corumbatai+do+Sul+-+PR,+86970-000&output=embed",
    label: "Mapa da localização da Jota Beer em Corumbataí do Sul - PR",
  },

  openingHours: "Consulte o horário de funcionamento atualizado nos canais oficiais.",
} as const;

export const differentials = [
  {
    title: "Variedade",
    text: "Seleção de bebidas nacionais, importadas e opções para diferentes ocasiões.",
  },
  {
    title: "Atendimento próximo",
    text: "Empresa familiar, com relacionamento direto com os clientes da cidade e região.",
  },
  {
    title: "Parcerias comerciais",
    text: "Atuação com fornecedores do setor e empresas parceiras para fortalecer o atendimento.",
  },
  {
    title: "Presença local",
    text: "Localizada no centro de Corumbataí do Sul, com fácil acesso para clientes da região.",
  },
] as const;

export const productCategories = [
  {
    title: "Bebidas nacionais",
    text: "Opções nacionais para o dia a dia e momentos especiais.",
  },
  {
    title: "Bebidas importadas",
    text: "Seleção de rótulos importados para diferentes ocasiões.",
  },
  {
    title: "Conveniência",
    text: "Produtos de conveniência para a sua praticidade.",
  },
  {
    title: "Atendimento para eventos e encontros",
    text: "Suporte para eventos, confraternizações e encontros.",
  },
  {
    title: "Alimentos e produtos parceiros",
    text: "Itens de alimentação e produtos de empresas parceiras.",
  },
] as const;

export const galleryItems = [
  {
    title: "Fachada e atendimento",
    text: "Imagens reais da fachada e do atendimento podem ser adicionadas aqui.",
  },
  {
    title: "Produtos e conveniência",
    text: "Fotos reais dos produtos e da conveniência podem ser adicionadas aqui.",
  },
  {
    title: "Eventos e momentos especiais",
    text: "Registros de eventos e momentos especiais podem ser adicionados aqui.",
  },
  {
    title: "Parceiros e novidades",
    text: "Imagens de parceiros e novidades podem ser adicionadas aqui.",
  },
] as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Produtos", href: "#produtos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

export const aboutCard = [
  "Fundada em 2022",
  "Corumbataí do Sul - PR",
  "Distribuidora, conveniência e bar",
  "Fornecedores e parceiros do setor",
] as const;

export const heroBadges = [
  "Desde 2022",
  "Empresa familiar",
  "Bebidas nacionais e importadas",
  "Atendimento local",
] as const;
