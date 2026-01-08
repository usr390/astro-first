import type { Review } from "../types/review";

export const reviewsEn: readonly Review[] = [
  {
    name: "Happy Customer",
    quote: "Super professional and the trip was smooth the whole way. Highly recommend!",
    rating: 5,
    source: "Google",
  },
  {
    name: "RGV Traveler",
    quote: "Clean bus, on time, and very friendly staff. Would book again.",
    rating: 5,
    source: "Facebook",
  },
  {
    name: "Group Organizer",
    quote: "Made our group trip easy — communication was great and pricing was fair.",
    rating: 5,
  },
] as const;