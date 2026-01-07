import type { FaqItem } from "../types/faq";

export const faqEn: readonly FaqItem[] = [
  {
    q: "How do I book a charter or reserve a seat?",
    a: "Call or email us with your trip details and we’ll help you with availability, pricing, and next steps.",
    open: true,
  },
  {
    q: "What areas do you serve?",
    a: "We provide charter bus transportation throughout Texas and to select destinations in Mexico.",
  },
  {
    q: "How much does a tour or charter cost?",
    a: "Pricing depends on the destination, length of the trip, and number of passengers. Contact us for a quote.",
  },
  {
    q: "Are refunds available?",
    a: "Refund policies vary by tour. Some trips may be non-refundable as stated on the flyer.",
  },
  {
    q: "How early should I arrive before departure?",
    a: "We recommend arriving 10–15 minutes early. Departure times are typically “sharp.”",
  }
] as const;