import type { Review } from "../types/review";

export const reviewsEs: readonly Review[] = [
  {
    name: "Cliente Satisfecho",
    quote: "Muy profesionales y el viaje fue tranquilo de principio a fin. ¡Recomendados!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Viajero del Valle",
    quote: "Autobús limpio, puntuales y muy amables. Volvería a reservar.",
    rating: 5,
    source: "Facebook",
  },
  {
    name: "Organizador de Grupo",
    quote: "Nos facilitaron el viaje del grupo — excelente comunicación y buen precio.",
    rating: 5,
  },
] as const;