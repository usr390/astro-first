export type Lang = "en" | "es";

export const footerCopy = {
  en: { follow: "Follow Us" },
  es: { follow: "Síganos" },
} as const;

export const socialLinks = [
  { platform: "facebook", username: "profile.php?id=61550318662353" },
  { platform: "instagram", username: "mapstourbuses" },
] as const;

export const siteMeta = {
  brand: "Map’s Tour Buses",
} as const;

export const phoneContacts = [
  { name: "Flor Perales", tel: "+19568975416", display: "(956) 897-5416" },
  { name: "Fidencio Perales", tel: "+19567809501", display: "(956) 780-9501" },
] as const;