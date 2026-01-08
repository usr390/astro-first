export type TravelArea = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  subhead: string;
  bullets: readonly string[];
};

export type WhereWeTravelContent = {
  ariaLabel: string;
  heading: string;
  intro: string;
  areas: readonly TravelArea[];
};