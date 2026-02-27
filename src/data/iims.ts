/**
 * All 21 Indian Institutes of Management (IIMs).
 * slug: used for routing (/iims/:slug)
 * logo: favicon from official domain (replace with /iim-logos/[slug].png for custom logos)
 */
export const IIMS = [
  { name: "IIM Ahmedabad", short: "Ahmedabad", slug: "ahmedabad", domain: "iima.ac.in", url: "https://iima.ac.in" },
  { name: "IIM Bangalore", short: "Bangalore", slug: "bangalore", domain: "iimb.ac.in", url: "https://iimb.ac.in" },
  { name: "IIM Calcutta", short: "Calcutta", slug: "calcutta", domain: "iimcal.ac.in", url: "https://iimcal.ac.in" },
  { name: "IIM Lucknow", short: "Lucknow", slug: "lucknow", domain: "iiml.ac.in", url: "https://iiml.ac.in" },
  { name: "IIM Kozhikode", short: "Kozhikode", slug: "kozhikode", domain: "iimk.ac.in", url: "https://iimk.ac.in" },
  { name: "IIM Indore", short: "Indore", slug: "indore", domain: "iimidr.ac.in", url: "https://iimidr.ac.in" },
  { name: "IIM Mumbai", short: "Mumbai", slug: "mumbai", domain: "iimmumbai.ac.in", url: "https://iimmumbai.ac.in" },
  { name: "IIM Shillong", short: "Shillong", slug: "shillong", domain: "iimshillong.ac.in", url: "https://iimshillong.ac.in" },
  { name: "IIM Rohtak", short: "Rohtak", slug: "rohtak", domain: "iimrohtak.ac.in", url: "https://iimrohtak.ac.in" },
  { name: "IIM Ranchi", short: "Ranchi", slug: "ranchi", domain: "iimranchi.ac.in", url: "https://iimranchi.ac.in" },
  { name: "IIM Raipur", short: "Raipur", slug: "raipur", domain: "iimraipur.ac.in", url: "https://iimraipur.ac.in" },
  { name: "IIM Tiruchirappalli", short: "Trichy", slug: "trichy", domain: "iimtrichy.ac.in", url: "https://iimtrichy.ac.in" },
  { name: "IIM Kashipur", short: "Kashipur", slug: "kashipur", domain: "iimkashipur.ac.in", url: "https://iimkashipur.ac.in" },
  { name: "IIM Udaipur", short: "Udaipur", slug: "udaipur", domain: "iimu.ac.in", url: "https://iimu.ac.in" },
  { name: "IIM Nagpur", short: "Nagpur", slug: "nagpur", domain: "iimnagpur.ac.in", url: "https://iimnagpur.ac.in" },
  { name: "IIM Visakhapatnam", short: "Vizag", slug: "vizag", domain: "iimv.ac.in", url: "https://iimv.ac.in" },
  { name: "IIM Amritsar", short: "Amritsar", slug: "amritsar", domain: "iimamritsar.ac.in", url: "https://iimamritsar.ac.in" },
  { name: "IIM Bodh Gaya", short: "Bodh Gaya", slug: "bodh-gaya", domain: "iimbg.ac.in", url: "https://iimbg.ac.in" },
  { name: "IIM Sambalpur", short: "Sambalpur", slug: "sambalpur", domain: "iimsambalpur.ac.in", url: "https://iimsambalpur.ac.in" },
  { name: "IIM Sirmaur", short: "Sirmaur", slug: "sirmaur", domain: "iimsirmaur.ac.in", url: "https://iimsirmaur.ac.in" },
  { name: "IIM Jammu", short: "Jammu", slug: "jammu", domain: "iimjammu.ac.in", url: "https://iimjammu.ac.in" },
] as const;

export function getIIMBySlug(slug: string) {
  return IIMS.find((i) => i.slug === slug);
}
