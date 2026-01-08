export type Review = {
  name: string;
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  source?: string;     // e.g. "Google", "Facebook"
  date?: string;       // optional, like "2025-09"
};