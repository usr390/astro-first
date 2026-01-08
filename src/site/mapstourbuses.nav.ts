export type NavItem = {
  key: string;
  path: string;
};

export const navItems: NavItem[] = [
  { key: "home", path: "/" },
  { key: "tours", path: "/tours" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
  { key: "faq", path: "/faq" },
];

export const navLabels = {
  en: {
    home: "Home",
    tours: "Tours",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    switch: "Español",
  },
  es: {
    home: "Inicio",
    tours: "Tours",
    about: "Sobre Nosotros",
    contact: "Contacto",
    faq: "Preguntas Frecuentes",
    switch: "English",
  },
} as const;