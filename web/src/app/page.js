import Image from "next/image";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experiences", href: "#experiences" },
  { name: "Menu", href: "#menu" },
  { name: "Stay", href: "#stay" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const highlights = [
  {
    title: "Farm-to-table cooking",
    description:
      "Seasonal produce from our gardens and nearby farms anchors every dish and cocktail we prepare.",
    icon: (cls) => (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 21c2.25-1.5 6.75-5.25 6.75-9.75a6.75 6.75 0 0 0-13.5 0C0 15.75 4.5 19.5 6.75 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 11.25V6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 11.25C6 9 4.125 8.25 3 8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hilltop celebrations",
    description:
      "Lush lawns, starlit terraces, and elegant salons ready for weddings, birthdays, and corporate retreats.",
    icon: (cls) => (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 9 12 3l7.5 6v10.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 17.25h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Apartments & stables",
    description:
      "Wake up to birdsong in our boutique rooms and meet the gentle horses that roam our grounds.",
    icon: (cls) => (
      <svg
        className={cls}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 18s1.5-3 4.5-3 4.5 3 4.5 3 2.25-5.25 6-5.25c0 0 .75 1.5.75 3s-.75 3-2.25 3H3.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m14.25 10.5 3-4.5 3 2.25v4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const experiences = [
  {
    title: "Sunset dining terraces",
    description:
      "Golden-hour dinners with sweeping views over Skënderaj. Reserve a chef's table to experience our tasting menu.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gatherings that feel effortless",
    description:
      "From intimate anniversaries to 200-person celebrations, our team handles decor, planning, and bespoke menus.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Stay the night above the valley",
    description:
      "Boutique apartments with private balconies, curated minibars, and breakfast featuring our wood-fired breads.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];

const signatureMenu = [
  {
    name: "Tebaca Sharing Feast",
    description:
      "Wood-grilled meats, charred vegetables, and aromatic sauces designed for the table to gather around.",
  },
  {
    name: "Garden Harvest Salads",
    description:
      "Heirloom tomatoes, hand-picked herbs, and local cheeses dressed in cold-pressed olive oil.",
  },
  {
    name: "Sweet endings & coffee",
    description:
      "Baklava with mountain honey, seasonal tartlets, and slow-brewed espresso roasted in Prishtina.",
  },
];

const stayHighlights = [
  {
    label: "6 boutique apartments",
    detail: "Each with rainfall showers, plush bedding, and views across the hillside.",
  },
  {
    label: "Horseback moments",
    detail: "Guided meet-and-greets with our horses plus gentle rides for all experience levels.",
  },
  {
    label: "Nature trails",
    detail: "Morning walks through wildflower meadows and evening fireside lounges under the stars.",
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

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
        {eyebrow}
      </span>
      <h2 className="section-title mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">{children}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#hero" className="heading-font text-xl font-semibold tracking-tight text-stone-900">
            Tebaca Adem
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="transition hover:text-stone-900">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+38349700700"
              className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-800"
            >
              +383 49 700 700
            </a>
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200/70 transition hover:bg-emerald-400"
            >
              Reserve
            </a>
          </div>
        </div>
        <nav className="border-t border-stone-200/60 px-6 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto text-sm font-medium text-stone-600">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-3 py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+38349700700"
              className="whitespace-nowrap rounded-full bg-emerald-500 px-3 py-2 font-semibold text-white"
            >
              Call
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80"
              alt="Dining room with warm lighting and wooden tables"
              fill
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/20" />
          </div>
          <div className="relative">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-28 sm:pt-32 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200/90">
                  Hilltop Restaurant · Skënderaj
                </p>
                <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  A modern countryside escape for dining, stays, and celebrations
                </h1>
                <p className="mt-6 text-base text-stone-100/90 sm:text-lg">
                  Perched above Skënderaj, Tebaca Adem pairs rustic soul with contemporary comfort. Enjoy fresh cuisine, open lawns,
                  horseback encounters, and suites designed for slow mornings.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+38349700700"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-[0_24px_60px_-24px_rgba(16,185,129,0.9)] transition hover:bg-emerald-400"
                  >
                    Reserve a table
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Explore the estate
                  </a>
                </div>
              </div>
              <div className="backdrop-card grid w-full max-w-lg grid-cols-2 gap-4 rounded-3xl border border-white/30 p-6 text-white">
                <div>
                  <p className="text-3xl font-semibold">120+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">Events hosted</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">6</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">Boutique suites</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">15 ha</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">Countryside</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">On-call hosts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        <section id="about" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title="Rooted in Kosovo's flavors, shaped by modern design"
                >
                  Set above Skënderaj, our estate brings together traditional hospitality, seasonal cuisine, and spaces crafted for
                  meaningful gatherings. Families, travelers, and event planners trust us for our calm approach and detail-driven
                  service.
                </SectionHeading>
                <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-emerald-100/70 bg-white p-6 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        {item.icon("h-6 w-6")}
                      </div>
                      <dt className="mt-6 text-lg font-semibold text-stone-900">{item.title}</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-emerald-900">
                <Image
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
                  alt="Chef plating gourmet food"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-6 shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">Since 2010</p>
                  <p className="mt-3 text-lg font-semibold text-stone-900">Family-owned & lovingly curated</p>
                  <p className="mt-2 text-sm text-stone-600">
                    Our family has welcomed guests to this hilltop for generations — you'll feel the warmth in every detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="relative bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Experiences"
              title="Choose your pace — from long lunches to weekend escapes"
            >
              Whether you're planning a milestone celebration or a quiet countryside weekend, Tebaca Adem offers curated moments for
              every occasion.
            </SectionHeading>
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {experiences.map((experience) => (
                <article
                  key={experience.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50 shadow-sm"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold text-stone-900">{experience.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">{experience.description}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Plan this experience
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.293 4.293a1 1 0 0 1 1.414 0L13 8.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.172 9H4a1 1 0 1 1 0-2h6.172L7.293 5.707a1 1 0 0 1 0-1.414Z" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading eyebrow="Signature Menu" title="Rustic plates crafted for sharing">
                  Ask about our seasonal chef selections and vegetarian tastings. We happily accommodate dietary preferences with
                  advance notice.
                </SectionHeading>
                <ul className="mt-10 space-y-6">
                  {signatureMenu.map((item) => (
                    <li key={item.name} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-stone-900">
                <Image
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80"
                  alt="Shared plates of grilled food on a table"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-6 shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">Chef's tip</p>
                  <p className="mt-3 text-lg font-semibold text-stone-900">Pair the feast with our herb lemonade</p>
                  <p className="mt-2 text-sm text-stone-600">Steeped with mountain mint and local honey for a refreshing finish.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stay" className="relative bg-emerald-900 py-24 text-white">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Stay with us</span>
                <h2 className="section-title mt-5 text-3xl font-semibold text-white sm:text-4xl">
                  Apartments designed for slow mornings and starlit nights
                </h2>
                <p className="mt-6 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
                  Extend your visit in our onsite apartments. Wake to panoramic valley views, homemade breakfasts, and curated
                  amenities that make every stay effortless.
                </p>
                <dl className="mt-10 space-y-6">
                  {stayHighlights.map((item) => (
                    <div key={item.label}>
                      <dt className="text-lg font-semibold text-white">{item.label}</dt>
                      <dd className="mt-2 text-sm text-emerald-100/80">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative h-64 overflow-hidden rounded-3xl bg-emerald-800">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-0ef3c08dcdb6?auto=format&fit=crop&w=900&q=80"
                    alt="Apartment interior with soft lighting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-3xl bg-emerald-800">
                  <Image
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                    alt="Guests enjoying a bonfire at night"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-3xl bg-emerald-800 sm:col-span-2">
                  <Image
                    src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1400&q=80"
                    alt="Horse grazing in a field"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-emerald-950/70 p-5">
                    <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">Equestrian moments</p>
                    <p className="mt-2 text-sm text-emerald-100/90">
                      Meet our gentle horses or book a guided countryside ride — ideal for families and first-timers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="Visit" title="A short drive from central Skënderaj">
              Fazli Barani Skenderaj, Kuqice, Skënderaj 41000, Kosovo — nestled on a private hilltop with dedicated parking.
            </SectionHeading>
            <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-sm">
                <iframe
                  title="Tebaca Adem on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.770256930399!2d20.806!3d42.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13536dd4a2842a7b%3A0x5cbdb9c447ddb5a1!2sSk%C3%ABnderaj!5e0!3m2!1sen!2s!4v1700000000000"
                  className="h-[420px] w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">Hours & details</h3>
                <p className="mt-3 text-sm text-stone-600">
                  Open daily — call ahead for seasonal hours, event bookings, and apartment availability.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Phone</p>
                    <a href="tel:+38349700700" className="mt-2 block text-lg font-semibold text-stone-900">
                      +383 49 700 700
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Email</p>
                    <a href="mailto:info@tebacaadem.com" className="mt-2 block text-lg font-semibold text-stone-900">
                      info@tebacaadem.com
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Follow</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://www.instagram.com"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.tripadvisor.com"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
                      >
                        Tripadvisor
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.author}
                      className="rounded-2xl bg-emerald-50/70 p-5 text-sm text-stone-600"
                    >
                      “{testimonial.quote}”
                      <footer className="mt-3 text-sm font-semibold text-emerald-700">{testimonial.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-10 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Contact</span>
                <h2 className="section-title mt-5 text-3xl font-semibold text-stone-900 sm:text-4xl">
                  Let's plan your visit
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  Tell us about your table reservation, event, or stay. Our hosts will respond within the day with tailored
                  suggestions and availability.
                </p>
                <div className="mt-8 space-y-4 text-sm text-stone-600">
                  <p>
                    <span className="font-semibold text-stone-900">Phone:</span> <a href="tel:+38349700700">+383 49 700 700</a>
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">Email:</span> <a href="mailto:info@tebacaadem.com">info@tebacaadem.com</a>
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">Address:</span> Fazli Barani Skenderaj, Kuqice, Skënderaj 41000
                  </p>
                </div>
              </div>
              <form className="rounded-3xl border border-stone-200 bg-white p-10 shadow-xl shadow-emerald-100">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@email.com"
                      className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-stone-700">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+383 49 ..."
                      className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="text-sm font-medium text-stone-700">
                      Preferred date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-stone-700">
                      Tell us about your visit
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Dinner for six, wedding plans, weekend stay..."
                      className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200/70 transition hover:bg-emerald-400"
                    >
                      Send inquiry
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-xs text-stone-400">
                  By submitting this form you agree to be contacted about reservations, stays, and events at Tebaca Adem.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/70 bg-white/80 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="heading-font text-lg font-semibold text-stone-800">Tebaca Adem</p>
          <div className="flex flex-wrap gap-4">
            <span>Fazli Barani Skenderaj, Kuqice, Skënderaj 41000, Kosovo</span>
            <span>·</span>
            <a href="tel:+38349700700" className="font-semibold text-stone-700 hover:text-stone-900">
              +383 49 700 700
            </a>
            <span>·</span>
            <a href="mailto:info@tebacaadem.com" className="font-semibold text-stone-700 hover:text-stone-900">
              info@tebacaadem.com
            </a>
          </div>
          <p>© {new Date().getFullYear()} Tebaca Adem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
