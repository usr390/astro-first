import type { FaqItem } from "../types/faq";

export const faqEs: readonly FaqItem[] = [
  {
    q: "¿Cómo reservo un tour o aparto un asiento?",
    a: "Llámenos o envíenos un correo con los detalles de su viaje y le ayudaremos con disponibilidad, precio y próximos pasos.",
    open: true,
  },
  {
    q: "¿Qué áreas cubren?",
    a: "Ofrecemos transporte charter por todo Texas y a destinos seleccionados en México.",
  },
  {
    q: "¿Cuánto cuesta un tour o un charter?",
    a: "El precio depende del destino, la duración del viaje y la cantidad de pasajeros. Contáctenos para una cotización.",
  },
  {
    q: "¿Hay reembolsos?",
    a: "La política de reembolso varía según el tour. Algunos viajes pueden ser no reembolsables, tal como se indica en el flyer.",
  },
  {
    q: "¿Con cuánta anticipación debo llegar?",
    a: "Recomendamos llegar 10–15 minutos antes. Las salidas suelen ser “en punto”.",
  },
] as const;