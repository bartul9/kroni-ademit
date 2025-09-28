"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const BRAND = "Tebaca Adem";

const LANGUAGES = [
  { code: "sq", label: "SQ", name: "Shqip" },
  { code: "hr", label: "HR", name: "Bosanski" },
  { code: "en", label: "EN", name: "English" },
];

const translations = {
  sq: {
    nav: {
      about: "Rreth Nesh",
      services: "Shërbimet",
      gallery: "Galeria",
      menu: "Menuja",
      stay: "Qëndrime",
      location: "Lokacioni",
      contact: "Kontakti",
      book: "Rezervo",
    },
    hero: {
      title: "Restorant & Apartamente në majë të kodrës në Skënderaj",
      lead:
        "Mirë se vini në {brand} — një arratisje e qetë me ushqim të freskët, fusha të gjelbra, kuaj dhe pamje panoramike. Qëndroni një natë, festoni një moment të veçantë ose mblidhni miqtë për një ditë të paharrueshme.",
      cta1: "Rezervo Tavolinë",
      cta2: "Shiko Shërbimet",
      facts: [
        { label: "Evente në vit", value: "120+" },
        { label: "Apartamente boutique", value: "6" },
        { label: "Sipërfaqe natyrore", value: "15 ha" },
        { label: "Staf në gatishmëri", value: "24/7" },
      ],
    },
    about: {
      eyebrow: "Rreth {brand}",
      title: "Në majën e kodrës, ku shijet vendore takojnë dizajnin modern",
      body:
        "Në majë të një kodre mbi Skënderaj, {brand} bashkon hijeshinë rurale me rehati moderne. Kuzhina jonë fokusohet te shijet vendore dhe produktet sezonale, ndërsa oborret dhe tarracat ftojnë biseda të gjata nën qiellin e hapur.",
      features: [
        {
          title: "E Freskët & Vendore",
          detail:
            "Specialitete në skarë, pjata për t'u ndarë dhe prodhime sezonale direkt nga fermerët tanë partnerë.",
        },
        {
          title: "Pamje Kodrinore",
          detail:
            "Tarraca me pamje panoramike, livadhe për piknik dhe gjelbërim i paprekur për foto të paharrueshme.",
        },
        {
          title: "Rezervim i Lehtë",
          detail:
            "Ekipi ynë kujdeset për çdo detaj – nga darkat familjare te dasmat dhe eventet më të mëdha.",
        },
      ],
    },
    services: {
      title: "Shërbimet",
      subtitle: "Për drekë të thjeshtë apo për një ngjarje madhështore – ne jemi këtu për ju.",
      items: [
        {
          title: "Restorant",
          description:
            "Specialitete në skarë, pjata tradicionale për t’u ndarë, sallata të freskëta dhe ëmbëlsira shtëpie.",
        },
        {
          title: "Dasma & Evente",
          description:
            "Hapësira të gjera me gjelbërim, tenda elegante dhe koordinim të plotë për ditën tuaj të madhe.",
        },
        {
          title: "Apartamente",
          description:
            "Dhoma komode në vend, me mëngjese artizanale dhe balkone private me pamje në horizonte të gjera.",
        },
        {
          title: "Kuaj & Kafshë",
          description:
            "Njihuni me kuajt tanë miqësorë dhe përjetoni kalërim të lehtë për të gjitha moshat.",
        },
        {
          title: "Arratisje në Natyrë",
          description:
            "Ajër i pastër, shtigje të qeta për shëtitje dhe hapësira relaksi nën pemët shekullore.",
        },
      ],
    },
    gallery: {
      title: "Galeria",
      subtitle: "Një vështrim në hapësirë, atmosferë dhe përvojat tona.",
    },
    menu: {
      title: "Shija e Fshatit",
      body:
        "Pjatat tona për t’u ndarë kombinojnë mishrat në skarë, perimet sezonale dhe salcat e shtëpisë. Pyetni për ofertat e ditës dhe recetat tradicionale.",
      highlights: [
        "Pjatë e përbashkët për 2–4",
        "Sallata fshati & bukë e freskët",
        "Ëmbëlsira të shtëpisë & kafe artizanale",
      ],
    },
    stay: {
      title: "Qëndroni në {brand}",
      body:
        "Apartamente boutique me dushe shiu, krevate luksozë dhe shërbim 24/7. Zgjohuni me aromën e bukës së sapopjekur dhe pamje të gjelbra.",
      highlights: [
        "6 apartamente me dizajn të kujdesshëm",
        "Mëngjes lokal i përfshirë",
        "Takime me kuajt dhe guidë në natyrë",
      ],
    },
    location: {
      title: "Na Gjeni",
      subtitle: "Skënderaj, Kosovë — në kodrën mbi qytet.",
      addressTitle: "Adresa & Orari",
      addressText:
        "Fazli Barani Skenderaj, Kuqice, Skënderaj 41000, Kosovë\nVendndodhje në kodër me parking privat.",
      openHours: "Hapur: Hënë–Diele (telefononi për orarin & eventet)",
      openMaps: "Hape në Hartë",
    },
    contact: {
      title: "Kontakt & Rezervime",
      lead:
        "Po planifikoni dasmë apo festë? Dëshironi një fundjavë pushimi? Na shkruani dhe e realizojmë lehtë.",
      phoneLabel: "+383 49 700 700",
      emailLabel: "info@tebacaadem.com",
      form: {
        name: "Emri juaj",
        email: "Email",
        phone: "Telefon (opsionale)",
        message: "Na tregoni për vizitën apo eventin...",
        submit: "Dërgo",
      },
    },
    ctas: {
      reserve: "Rezervo Tavolinë",
      explore: "Shiko Shërbimet",
    },
  },
  hr: {
    nav: {
      about: "O nama",
      services: "Usluge",
      gallery: "Galerija",
      menu: "Jelovnik",
      stay: "Smještaj",
      location: "Lokacija",
      contact: "Kontakt",
      book: "Rezerviraj",
    },
    hero: {
      title: "Brdski restoran i apartmani u Skenderaju",
      lead:
        "Dobrodošli u {brand} — mirno utočište sa svježom hranom, prostranim travnjacima, konjima i panoramskim pogledima. Ostanite preko noći, proslavite važan trenutak ili okupite ekipu za dan za pamćenje.",
      cta1: "Rezerviraj stol",
      cta2: "Pogledaj usluge",
      facts: [
        { label: "Događaja godišnje", value: "120+" },
        { label: "Boutique apartmana", value: "6" },
        { label: "Prirodni prostor", value: "15 ha" },
        { label: "Tim na raspolaganju", value: "24/7" },
      ],
    },
    about: {
      eyebrow: "O {brand}",
      title: "Na uzvisini gdje seoski šarm susreće moderni dizajn",
      body:
        "Na mirnoj uzvisini iznad Skenderaja, {brand} spaja seoski šarm i modernu udobnost. Kuhinja se oslanja na lokalne okuse i sezonske namirnice, a travnjaci i terase mame na duge razgovore pod otvorenim nebom.",
      features: [
        {
          title: "Svježe & Lokalno",
          detail:
            "Roštilj, tradicionalne plate za dijeljenje i proizvodi od obližnjih farmi u svakoj sezoni.",
        },
        {
          title: "Pogledi s uzvisine",
          detail:
            "Terase s panoramom, zelene livade i ambijent savršen za fotografije i događaje.",
        },
        {
          title: "Jednostavno rezerviranje",
          detail:
            "Naš tim vodi računa o detaljima — od ručkova do vjenčanja i poslovnih okupljanja.",
        },
      ],
    },
    services: {
      title: "Usluge",
      subtitle: "Za ručak ili veliki događaj — tu smo za vas.",
      items: [
        {
          title: "Restoran",
          description:
            "Roštilj i specijaliteti, seoske plate, svježe salate i domaći deserti.",
        },
        {
          title: "Vjenčanja & Događaji",
          description:
            "Prostrani travnjaci, elegantne tende i koordinacija kompletnog slavlja.",
        },
        {
          title: "Apartmani",
          description:
            "Udobne sobe u sklopu objekta s doručkom i privatnim balkonima.",
        },
        {
          title: "Konji & Životinje",
          description:
            "Upoznajte naše pitome životinje i doživite laganu jahačku avanturu.",
        },
        {
          title: "Bijeg u prirodu",
          description:
            "Čist zrak, mirne staze za šetnju i kutci za opuštanje ispod stoljetnih stabala.",
        },
      ],
    },
    gallery: {
      title: "Galerija",
      subtitle: "Zavirite u prostor, atmosferu i iskustva.",
    },
    menu: {
      title: "Okus sela",
      body:
        "Naše zajedničke plate savršene su za dijeljenje — meso s roštilja, sezonsko povrće i domaći umaci. Pitajte za dnevne ponude i tradicionalna jela.",
      highlights: [
        "Miješana plata za 2–4",
        "Seoske salate i svježi kruh",
        "Domaći deserti i kava",
      ],
    },
    stay: {
      title: "Smjestite se u {brand}",
      body:
        "Boutique apartmani s kišnim tuševima, luksuznim krevetima i uslugom 24/7. Probudite se uz mirise svježe pečenog kruha i pogled na zelene brežuljke.",
      highlights: [
        "6 pomno uređenih apartmana",
        "Uključen lokalni doručak",
        "Susret s konjima i vođene šetnje",
      ],
    },
    location: {
      title: "Pronađite nas",
      subtitle: "Skenderaj, Kosovo — na uzvisini iznad grada.",
      addressTitle: "Adresa & Radno vrijeme",
      addressText:
        "Fazli Barani Skenderaj, Kuqice, Skënderaj 41000, Kosovo\nLokacija na brdu s privatnim parkingom.",
      openHours: "Otvoreno: Pon–Ned (provjerite telefonom za sate i događaje)",
      openMaps: "Otvori u kartama",
    },
    contact: {
      title: "Kontakt & Rezervacije",
      lead:
        "Planirate vjenčanje ili proslavu? Želite vikend bijeg? Javite nam se — sve ćemo olakšati.",
      phoneLabel: "+383 49 700 700",
      emailLabel: "info@tebacaadem.com",
      form: {
        name: "Vaše ime",
        email: "Email",
        phone: "Telefon (opcionalno)",
        message: "Recite nam o posjetu ili događaju...",
        submit: "Pošalji",
      },
    },
    ctas: {
      reserve: "Rezerviraj stol",
      explore: "Pogledaj usluge",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      menu: "Menu",
      stay: "Stay",
      location: "Location",
      contact: "Contact",
      book: "Book",
    },
    hero: {
      title: "Hilltop Restaurant & Apartments in Skënderaj",
      lead:
        "Welcome to {brand} — a peaceful escape with fresh food, open lawns, horses, and panoramic views. Stay a night, celebrate a milestone, or gather your people for a memorable day.",
      cta1: "Reserve a Table",
      cta2: "See Services",
      facts: [
        { label: "Events each year", value: "120+" },
        { label: "Boutique suites", value: "6" },
        { label: "Countryside grounds", value: "15 ha" },
        { label: "Hosts on call", value: "24/7" },
      ],
    },
    about: {
      eyebrow: "About {brand}",
      title: "Hilltop roots where local flavour meets modern design",
      body:
        "Perched on a tranquil hill above Skënderaj, {brand} blends rural charm with modern comfort. Our kitchen spotlights local flavours and seasonal produce while the lawns and terraces invite long conversations under open skies.",
      features: [
        {
          title: "Fresh & Local",
          detail:
            "Wood-grilled specials, share-friendly platters, and seasonal ingredients from nearby farms.",
        },
        {
          title: "Hilltop Views",
          detail:
            "Panoramic terraces, open lawns, and unspoiled greens perfect for photographs and celebrations.",
        },
        {
          title: "Easy Booking",
          detail:
            "Our team handles every detail — from family lunches to weddings and corporate retreats.",
        },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Whether you’re here for lunch or a life event, we’ve got you.",
      items: [
        {
          title: "Restaurant",
          description:
            "Grilled specialties, village-style platters, crisp salads, and house-made desserts.",
        },
        {
          title: "Weddings & Events",
          description:
            "Expansive lawns, elegant tents, and full coordination for your milestone moments.",
        },
        {
          title: "Apartments",
          description:
            "On-site rooms with curated breakfasts and private balconies overlooking the valley.",
        },
        {
          title: "Horses & Animals",
          description:
            "Meet our gentle horses and enjoy relaxed, guided encounters for every age.",
        },
        {
          title: "Nature Escape",
          description:
            "Fresh air, quiet walking paths, and shaded lounges beneath century-old trees.",
        },
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "A peek at the spaces, atmosphere, and moments.",
    },
    menu: {
      title: "Taste of the Countryside",
      body:
        "Our shareable platters bring together wood-grilled meats, seasonal vegetables, and house sauces. Ask about daily specials and heritage recipes.",
      highlights: [
        "Signature sharing feast for 2–4",
        "Garden salads & fresh breads",
        "House desserts & artisan coffee",
      ],
    },
    stay: {
      title: "Stay with {brand}",
      body:
        "Boutique apartments with rainfall showers, plush bedding, and 24/7 service. Wake to fresh-baked bread aromas and emerald hill views.",
      highlights: [
        "6 thoughtfully finished suites",
        "Breakfast featuring local produce",
        "Horse encounters & guided nature walks",
      ],
    },
    location: {
      title: "Find Us",
      subtitle: "Skënderaj, Kosovo — on the hill above town.",
      addressTitle: "Address & Hours",
      addressText:
        "Fazli Barani Skenderaj, Kuqice, Skënderaj 41000, Kosovo\nHilltop location with private parking.",
      openHours: "Open: Mon–Sun (call to confirm hours & events)",
      openMaps: "Open in Maps",
    },
    contact: {
      title: "Contact & Bookings",
      lead:
        "Planning a wedding or celebration? Want a weekend away? Reach out and we’ll make it easy.",
      phoneLabel: "+383 49 700 700",
      emailLabel: "info@tebacaadem.com",
      form: {
        name: "Your name",
        email: "Email",
        phone: "Phone (optional)",
        message: "Tell us about your visit or event...",
        submit: "Send",
      },
    },
    ctas: {
      reserve: "Reserve a Table",
      explore: "See Services",
    },
  },
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    alt: "Ambient dining table with candles and glassware",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef plating food in a kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Guests enjoying an outdoor wedding setup",
  },
  {
    src: "https://images.unsplash.com/photo-1559697242-54e8e3ec7721?auto=format&fit=crop&w=1200&q=80",
    alt: "Boutique bedroom with soft lighting",
  },
];

const experienceImages = [
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80",
    alt: "Wedding setup on a lawn with flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80",
    alt: "People enjoying a countryside picnic",
  },
  {
    src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&q=80",
    alt: "Horse in a green field during sunset",
  },
];

const testimonials = [
  {
    quote:
      "We booked the entire property for our wedding weekend. The team orchestrated every detail and the sunsets were unreal.",
    author: "Arbëresh & Dafina",
  },
  {
    quote:
      "Fresh grilled specialties, warm hospitality, and a calm escape only minutes from Skënderaj city center.",
    author: "Gentrit",
  },
];

const navOrder = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "gallery", href: "#gallery" },
  { key: "menu", href: "#menu" },
  { key: "stay", href: "#stay" },
  { key: "location", href: "#location" },
  { key: "contact", href: "#contact" },
];

const fmt = (template, map) =>
  template.replace(/\{(\w+)\}/g, (_, token) => map[token] ?? "");

function usePreferredTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function useLanguage() {
  const [lang, setLang] = useState("sq");

  useEffect(() => {
    const url = new URL(window.location.href);
    const fromQuery = url.searchParams.get("lang");
    const saved = window.localStorage.getItem("lang");
    const candidates = [fromQuery, saved, navigator.language?.slice(0, 2)];
    for (const candidate of candidates) {
      if (candidate && candidate in translations) {
        setLang(candidate);
        break;
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  return [lang, setLang];
}

function ThemeToggle({ theme, onChange }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => onChange(isDark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-surface text-sm font-semibold text-default shadow-sm transition hover:scale-[1.03]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3.75A8.25 8.25 0 0 0 12 20.25a8.25 8.25 0 0 1 0-16.5Z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4.5v-2.25" strokeLinecap="round" />
          <path d="M12 21.75V19.5" strokeLinecap="round" />
          <path d="M4.5 12H2.25" strokeLinecap="round" />
          <path d="M21.75 12H19.5" strokeLinecap="round" />
          <path d="m6.53 6.53-1.59-1.59" strokeLinecap="round" />
          <path d="m19.06 19.06-1.59-1.59" strokeLinecap="round" />
          <path d="m17.47 6.53 1.59-1.59" strokeLinecap="round" />
          <path d="m4.94 19.06 1.59-1.59" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4.5" />
        </svg>
      )}
    </button>
  );
}

function LanguageSwitcher({ lang, onChange }) {
  return (
    <label className="relative inline-flex items-center gap-2 text-sm font-medium text-muted">
      <span className="sr-only">Select language</span>
      <select
        value={lang}
        onChange={(event) => onChange(event.target.value)}
        className="appearance-none rounded-full border border-[color:var(--border)] bg-surface px-4 py-2 pr-9 text-sm font-semibold text-default shadow-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
      >
        {LANGUAGES.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3 h-4 w-4 text-muted"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-title mt-4 text-3xl font-semibold text-default sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function AddressBlock({ title, addressText }) {
  const lines = addressText.split("\n");
  return (
    <div className="glass-card rounded-3xl p-6 text-left">
      <h3 className="text-lg font-semibold text-default">{title}</h3>
      <div className="mt-3 space-y-2 text-sm text-muted">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = usePreferredTheme();
  const [lang, setLang] = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [lang]);

  const t = useMemo(() => {
    const raw = translations[lang] ?? translations.sq;
    return {
      ...raw,
      hero: {
        ...raw.hero,
        title: fmt(raw.hero.title, { brand: BRAND }),
        lead: fmt(raw.hero.lead, { brand: BRAND }),
      },
      about: {
        ...raw.about,
        eyebrow: fmt(raw.about.eyebrow, { brand: BRAND }),
        title: fmt(raw.about.title, { brand: BRAND }),
        body: fmt(raw.about.body, { brand: BRAND }),
      },
      stay: {
        ...raw.stay,
        title: fmt(raw.stay.title, { brand: BRAND }),
        body: fmt(raw.stay.body, { brand: BRAND }),
      },
    };
  }, [lang]);

  return (
    <div className="relative flex min-h-screen flex-col bg-body">
      <header className="header-glass sticky top-0 z-50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#hero" className="heading-font text-xl font-semibold text-default">
            {BRAND}
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted lg:flex">
            {navOrder.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="transition hover:text-default"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher lang={lang} onChange={setLang} />
            <ThemeToggle theme={theme} onChange={setTheme} />
            <a
              href="#contact"
              className="button-primary inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold"
            >
              {t.nav.book}
            </a>
          </div>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6 text-default"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
        {mobileOpen ? (
          <div className="lg:hidden">
            <div className="mx-4 mb-4 space-y-3 rounded-3xl border border-[color:var(--border)] bg-surface p-4 shadow-lg">
              <nav className="grid gap-2 text-base font-semibold text-default">
                {navOrder.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-[rgba(16,185,129,0.1)]"
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
              </nav>
              <div className="flex flex-wrap items-center gap-3">
                <LanguageSwitcher lang={lang} onChange={setLang} />
                <ThemeToggle theme={theme} onChange={setTheme} />
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="button-primary inline-flex flex-1 items-center justify-center rounded-full px-5 py-2 text-sm font-semibold"
                >
                  {t.nav.book}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1920&q=80"
              alt="Candlelit dining table with rustic dishes"
              fill
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/20" />
          </div>
          <div className="relative">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200/90">
                  Hilltop Restaurant · Skënderaj
                </p>
                <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                </h1>
                <p className="mt-6 text-base text-white/85 sm:text-lg">{t.hero.lead}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+38349700700"
                    className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold"
                  >
                    {t.hero.cta1}
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    {t.hero.cta2}
                  </a>
                </div>
              </div>
              <div className="glass-card grid w-full max-w-lg grid-cols-2 gap-4 rounded-3xl p-6 text-white">
                {t.hero.facts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-3xl font-semibold">{fact.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={t.about.eyebrow}
                  title={t.about.title}
                  description={t.about.body}
                />
                <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                  {t.about.features.map((feature) => (
                    <div key={feature.title} className="glass-card flex h-full flex-col rounded-3xl p-6 text-left">
                      <h3 className="text-lg font-semibold text-default">{feature.title}</h3>
                      <p className="mt-3 text-sm text-muted">{feature.detail}</p>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1400&q=80"
                  alt="Countryside estate with lush greenery"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading title={t.services.title} description={t.services.subtitle} />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((item) => (
                <div key={item.title} className="glass-card flex h-full flex-col rounded-3xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5.25v13.5" strokeLinecap="round" />
                      <path d="M6.75 9.75h10.5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="9.25" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-default">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading title={t.gallery.title} description={t.gallery.subtitle} />
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {galleryImages.map((image) => (
                <div key={image.src} className="group relative overflow-hidden rounded-3xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="relative py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading title={t.menu.title} description={t.menu.body} />
                <ul className="mt-10 space-y-3 text-base text-default">
                  {t.menu.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-muted">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="tel:+38349700700" className="button-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold">
                    {t.ctas.reserve}
                  </a>
                  <a href="#services" className="button-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold">
                    {t.ctas.explore}
                  </a>
                </div>
              </div>
              <div className="grid gap-6">
                {experienceImages.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-3xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stay" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="glass-card grid gap-8 rounded-3xl p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
              <div>
                <SectionHeading title={t.stay.title} description={t.stay.body} />
                <ul className="mt-10 space-y-3 text-sm text-muted">
                  {t.stay.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-4 w-4 flex-none text-emerald-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.071 7.142a1 1 0 0 1-1.42.006L3.296 9.92a1 1 0 0 1 1.408-1.42l4.103 4.058 6.364-6.336a1 1 0 0 1 1.533.068Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Image
                  src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80"
                  alt="Boutique suite interior"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
                  alt="Breakfast setup with fresh bread"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="relative py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-sky-500/10 via-transparent to-emerald-500/10" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading title={t.location.title} description={t.location.subtitle} />
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <AddressBlock title={t.location.addressTitle} addressText={t.location.addressText} />
                  <div className="glass-card rounded-3xl p-6">
                    <h3 className="text-lg font-semibold text-default">{t.contact.phoneLabel}</h3>
                    <p className="mt-2 text-sm text-muted">{t.contact.lead}</p>
                    <div className="mt-5 space-y-2 text-sm text-muted">
                      <a href="tel:+38349700700" className="block font-semibold text-default">
                        {t.contact.phoneLabel}
                      </a>
                      <a href="mailto:info@tebacaadem.com" className="block font-semibold text-default">
                        {t.contact.emailLabel}
                      </a>
                      <p className="text-xs text-muted">{t.location.openHours}</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/Fx6y9JFxJYpahmNc7"
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold"
                    >
                      {t.location.openMaps}
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1400&q=80"
                  alt="Aerial view of hills and countryside"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeading title={t.contact.title} description={t.contact.lead} />
                <div className="mt-10 space-y-6">
                  <div className="glass-card rounded-3xl p-6">
                    <p className="text-sm text-muted">{t.location.openHours}</p>
                    <div className="mt-4 space-y-2 text-sm text-default">
                      <a href="tel:+38349700700" className="block font-semibold">
                        {t.contact.phoneLabel}
                      </a>
                      <a href="mailto:info@tebacaadem.com" className="block font-semibold">
                        {t.contact.emailLabel}
                      </a>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {testimonials.map((testimonial) => (
                      <div key={testimonial.author} className="glass-card rounded-3xl p-6">
                        <p className="text-base italic text-default">“{testimonial.quote}”</p>
                        <p className="mt-4 text-sm font-semibold text-muted">{testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form className="glass-card rounded-3xl p-8 shadow-lg">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-default" htmlFor="name">
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.contact.form.name}
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-default focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-default" htmlFor="email">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-default focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-default" htmlFor="phone">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+383 49 700 700"
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-default focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-default" htmlFor="message">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-default focus:border-emerald-400 focus:outline-none"
                      placeholder={t.contact.form.message}
                    />
                  </div>
                  <button type="submit" className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold">
                    {t.contact.form.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--border)] bg-body py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="heading-font text-lg text-default">{BRAND}</p>
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="flex gap-4 text-muted">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
