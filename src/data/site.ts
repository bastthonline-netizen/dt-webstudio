// Zentrale Inhalte & Stammdaten der Seite.
// TODO(Basti): echte Kontaktdaten / Impressum-Angaben eintragen.

export const site = {
  name: "DT Webstudio",
  tagline: "Websites für die Region",
  claim: "Handgemachte Websites für Handwerk & kleine Betriebe.",
  region: "Rosenheim · Inntal · Oberbayern",
  email: "dt.webstudio@web.de",
  emailHref: "mailto:dt.webstudio@web.de",
  phone: "+49 159 060 12 878",
  phoneHref: "tel:+4915906012878",
  owner: "Bastian Thome & Christian Dachauer",
  legalForm: "GbR",
  partners: ["Bastian Thome", "Christian Dachauer"],
  address: {
    company: "DT Webstudio GbR",
    street: "Mittelfeldweg 23",
    zip: "83064", // PLZ Raubling – bitte kurz bestätigen
    city: "Raubling",
    country: "Deutschland",
  },
};

export const navigation = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

// Primärer CTA — überall mit GLEICHEM Label (kein Duplicate-Intent)
export const primaryCta = { label: "Projekt anfragen", href: "/#kontakt" };

export type Service = {
  title: string;
  text: string;
  icon: "layout" | "code" | "gauge" | "access" | "phone" | "wrench";
};

export const services: Service[] = [
  {
    title: "Webdesign",
    text: "Ein Auftritt, der zu Ihrem Betrieb passt – klar, hochwertig und unverwechselbar. Kein Baukasten von der Stange.",
    icon: "layout",
  },
  {
    title: "Entwicklung",
    text: "Sauber programmiert, blitzschnell und ohne unnötigen Ballast. Moderne Technik, die Jahre hält.",
    icon: "code",
  },
  {
    title: "SEO & Tempo",
    text: "Schnelle Ladezeiten und sinnvolle Optimierung, damit Kundinnen und Kunden Sie bei Google finden.",
    icon: "gauge",
  },
  {
    title: "Barrierefreiheit",
    text: "Lesbar und bedienbar für alle – mit guten Kontrasten, Tastatur-Navigation und klarer Struktur.",
    icon: "access",
  },
  {
    title: "Mobil zuerst",
    text: "Über die Hälfte Ihrer Besucher kommt vom Handy. Jede Seite wird zuerst fürs Smartphone gebaut.",
    icon: "phone",
  },
  {
    title: "Pflege & Betreuung",
    text: "Auch nach dem Start bleibe ich Ansprechpartner: Updates, kleine Änderungen, neue Inhalte.",
    icon: "wrench",
  },
];

export type Step = {
  title: string;
  text: string;
};

export const process: Step[] = [
  {
    title: "Kennenlernen",
    text: "Wir reden – am Telefon oder bei Ihnen vor Ort. Ich höre zu, was Sie brauchen und wer Ihre Kunden sind.",
  },
  {
    title: "Konzept",
    text: "Sie bekommen einen klaren Vorschlag: Aufbau, Stil und Inhalte. Erst wenn das passt, geht es weiter.",
  },
  {
    title: "Umsetzung",
    text: "Ich baue die Seite, Sie sehen Zwischenstände. Änderungen sind eingeplant, kein starres Schema.",
  },
  {
    title: "Launch & Betreuung",
    text: "Die Seite geht online – und ich bleibe erreichbar. Persönlich, ohne Hotline-Warteschleife.",
  },
];

export type Value = {
  title: string;
  text: string;
};

export const values: Value[] = [
  {
    title: "Ein fester Ansprechpartner",
    text: "Kein Callcenter, keine wechselnden Zuständigkeiten. Sie sprechen immer mit derselben Person.",
  },
  {
    title: "Ihre Website, Ihre Wünsche",
    text: "Die Seite soll Ihren Betrieb widerspiegeln – nicht meine Vorlage. Wir bauen genau das, was zu Ihnen passt.",
  },
  {
    title: "Bezahlbar für kleine Betriebe",
    text: "Auch Handwerk und kleine Unternehmen verdienen eine schöne, gepflegte Website. Faire Preise, klar vorher genannt.",
  },
];

export type Reference = {
  name: string;
  kind: string;
};

export const references: Reference[] = [
  { name: "ASV Kiefersfelden", kind: "Sportverein" },
  { name: "TC Kiefersfelden", kind: "Tennisclub" },
  { name: "ASV Großholzhausen", kind: "Sportverein" },
  { name: "Apato Sport", kind: "Hersteller" },
  { name: "Schuhwiedu Oberaudorf", kind: "Fachgeschäft" },
];

export type Package = {
  name: string;
  price: string;
  desc: string;
};

export const pricing = {
  note: "Alle Preise sind Richtwerte – der genaue Preis hängt von euren Wünschen ab.",
  packages: [
    {
      name: "One-Pager",
      price: "750 €",
      desc: "Eine übersichtliche Startseite mit allem Wichtigen – ideal, wenn ein klarer, schöner Auftritt reicht.",
    },
    {
      name: "Mehrseitige Website",
      price: "850 – 900 €",
      desc: "Mehrere Seiten (z. B. Leistungen, Über uns, Galerie, Kontakt) – für Betriebe, die mehr zeigen wollen.",
    },
  ] as Package[],
  factors: [
    "Habt ihr schon eine Domain – oder sollen wir eine für euch besorgen?",
    "Sollen wir die Website hosten – oder hostet ihr selbst?",
    "Wollt ihr laufende Pflege (Updates & Backups) – oder reicht die Seite, wie sie ist?",
    "Braucht ihr ein SSL-Sicherheitszertifikat (https)?",
  ],
};
