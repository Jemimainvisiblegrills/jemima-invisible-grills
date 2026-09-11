import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { Clock, Layers, ShieldCheck, Truck, Award, Star, Check, X, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Seo } from '@/components/Seo'
import { Hero } from '@/components/Hero'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { StatCounter } from '@/components/StatCounter'
import { SectionTitle } from '@/components/SectionTitle'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { BUSINESS } from '@/lib/constants'

// EDIT: confirm real figures before publishing
const stats = [
  { value: 500, suffix: '+', label: 'Installations completed' },
  { value: 10, suffix: '+', label: 'Indian cities served' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
]

const howItWorks = [
  {
    step: 'Free site survey',
    body: 'We visit, measure every opening and flag anything you may have missed — no charge, no obligation.',
  },
  {
    step: 'Same-day quote',
    body: 'Itemised quote on WhatsApp within hours of the survey. No lump sums, no surprises.',
  },
  {
    step: 'Installation',
    body: 'Most homes done in a single visit. Larger buildings scheduled in phases.',
  },
  {
    step: 'Warranty & aftercare',
    body: 'Every job is logged. Re-tensioning, repairs and re-fixing are free within the warranty window.',
  },
]

const whyUs = [
  {
    icon: Clock,
    title: '24×7 availability',
    body: 'Call, WhatsApp or email any day, any hour — someone from the team responds, not a voicemail.',
  },
  {
    icon: Layers,
    title: 'SS 316-grade steel',
    body: "Marine-grade cable as standard — built for Chennai's coastal humidity, not the cheaper 202 grade most competitors quote first.",
  },
  {
    icon: ShieldCheck,
    title: 'Child-safe spacing',
    body: 'Every cable and mesh spec is checked against limb-entrapment risk, not just "looks safe from the road".',
  },
  {
    icon: Truck,
    title: 'Pan-India teams',
    body: 'Based in Chennai, but we send trained teams anywhere in India — same specification, same warranty.',
  },
  {
    icon: Award,
    title: 'Warranty in writing',
    body: 'Cable, net and workmanship warranties are stated up front on every quote, not negotiated after the sale.',
  },
]

const comparisonRows = [
  {
    label: 'View from inside',
    invisible: 'Cables read as a faint shimmer — view stays open',
    ms: 'Visibly barred, like a cage',
    win: true,
  },
  {
    label: 'Building facade',
    invisible: 'Elevation stays clean from outside',
    ms: 'Bars visible on every floor',
    win: true,
  },
  {
    label: 'Rust in coastal air',
    invisible: 'SS 316 cable resists corrosion for years',
    ms: 'Painted MS chips and rusts within a monsoon',
    win: true,
  },
  {
    label: 'Weight on structure',
    invisible: 'Light tensioned cable',
    ms: 'Heavier welded bar',
    win: true,
  },
  {
    label: 'Adjustability',
    invisible: 'Re-tensionable with a turnbuckle on any service visit',
    ms: 'Not adjustable — replacement needed if it warps',
    win: true,
  },
  {
    label: 'Best suited for',
    invisible: 'Balconies where the view matters',
    ms: 'Duct covers, gates, staircases needing a rigid barrier',
    win: false,
  },
]

// EDIT: confirm real rates before publishing
const pricingCards = [
  {
    service: 'Invisible Grills',
    slug: 'invisible-grills',
    price: '₹140 – ₹165',
    unit: 'per running ft',
    note: '2mm / 2.5mm / 3mm',
    highlight: true,
  },
  {
    service: 'Pigeon Nets',
    slug: 'pigeon-nets',
    price: '₹22 – ₹32',
    unit: 'per sq ft',
    note: 'HDPE UV-stable',
    highlight: false,
  },
  {
    service: 'Safety Nets',
    slug: 'safety-nets',
    price: '₹18 – ₹28',
    unit: 'per sq ft',
    note: 'Nylon / HDPE',
    highlight: false,
  },
  {
    service: 'Cloth Hangers',
    slug: 'cloth-hangers',
    price: '₹2,500+',
    unit: 'per rod set',
    note: 'SS 316 rods',
    highlight: false,
  },
  {
    service: 'Sports Nets',
    slug: 'sports-nets',
    price: 'Custom quote',
    unit: 'per lane / site',
    note: 'GI frame + HDPE',
    highlight: false,
  },
]

const homeFaqs = [
  {
    q: 'Which areas do you cover?',
    a: 'We are based in Chennai and cover every locality in the city, plus we send installation teams to major cities across India for larger or one-off jobs.',
  },
  {
    q: 'How is an invisible grill different from a normal grill?',
    a: 'A normal grill is welded bar or pipe, visible from both sides. An invisible grill is tensioned steel cable spaced tightly enough to be safe but thin enough to nearly disappear from a normal viewing distance.',
  },
  {
    q: 'Do you charge for the site survey?',
    a: 'No — the site visit and measurement is free, whether or not you go ahead with the installation.',
  },
  {
    q: 'How is pricing worked out?',
    a: "Grills are priced per running foot of cable, nets per square foot of mesh — we'll show you the exact breakdown on your quote, not just a lump sum.",
  },
  {
    q: 'How long does a typical installation take?',
    a: 'A single balcony or window: a few hours in one visit. Full apartments, societies and commercial sites are scheduled over multiple days depending on scope.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Cable and net material carries a multi-year warranty against rust/UV degradation, and installation workmanship is separately warrantied for the first year. Exact terms are on your quote.',
  },
]

function ServiceSlideCard({ service: s }: { service: (typeof services)[0] }) {
  return (
    <Link
      to={`/services/${s.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-steel/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={s.gallery[0].src}
          alt={s.gallery[0].alt}
          width={800}
          height={600}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy-deep/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {s.category}
        </span>
      </div>
      <div className="flex flex-1 items-start gap-4 p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy/8 transition-colors duration-300 group-hover:bg-orange">
          <s.icon className="size-5 text-navy transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-navy-deep transition-colors group-hover:text-orange">{s.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-navy-deep/60">{s.heroTagline}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange">
            Learn more <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function ServicesCarousel() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(3)
  const dragging = useRef(false)
  const dragStart = useRef(0)
  const dragDelta = useRef(0)

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIdx = Math.max(0, services.length - visible)
  const safeIdx = Math.min(idx, maxIdx)
  const prev = () => setIdx((i) => Math.max(0, i - 1))
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1))

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    dragStart.current = e.clientX
    dragDelta.current = 0
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    dragDelta.current = e.clientX - dragStart.current
  }
  const onPointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    if (dragDelta.current < -50) next()
    else if (dragDelta.current > 50) prev()
  }

  // Use CSS custom property for card width — avoids JS measurement on first render
  // On mobile: 1 card = 100%, tablet: 2 = ~50%, desktop: 3 = ~33%
  // translateX moves by (safeIdx * 1 card-width-including-gap)
  const gapPx = 16
  const cardPercent = visible === 1 ? 100 : visible === 2 ? `calc(50% - ${gapPx / 2}px)` : `calc(33.333% - ${(gapPx * 2) / 3}px)`

  return (
    <div className="relative lg:px-8">
      <button onClick={prev} disabled={safeIdx === 0} aria-label="Previous services"
        className="absolute -left-1 top-[45%] z-10 hidden -translate-y-1/2 size-10 items-center justify-center rounded-full border border-steel/20 bg-white shadow-md transition-all hover:border-orange/40 hover:shadow-lg disabled:opacity-30 lg:flex">
        <ArrowRight className="size-4 rotate-180 text-navy-deep" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex cursor-grab active:cursor-grabbing select-none"
          style={{
            gap: `${gapPx}px`,
            transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1)',
            transform: `translateX(calc(-${safeIdx} * (${typeof cardPercent === 'number' ? cardPercent + '%' : cardPercent} + ${gapPx}px)))`,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {services.map((s) => (
            <div
              key={s.slug}
              style={{ flex: `0 0 ${typeof cardPercent === 'number' ? cardPercent + '%' : cardPercent}` }}
            >
              <ServiceSlideCard service={s} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={next} disabled={safeIdx >= maxIdx} aria-label="Next services"
        className="absolute -right-1 top-[45%] z-10 hidden -translate-y-1/2 size-10 items-center justify-center rounded-full border border-steel/20 bg-white shadow-md transition-all hover:border-orange/40 hover:shadow-lg disabled:opacity-30 lg:flex">
        <ArrowRight className="size-4 text-navy-deep" />
      </button>

      {maxIdx > 0 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === safeIdx ? 'w-5 h-2 bg-orange' : 'size-2 bg-steel/30 hover:bg-steel/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Home() {
  const reduce = useReducedMotion()

  return (
    <>
      <Seo
        title="Invisible Grills & Safety Nets in Chennai | Jemima"
        description="Invisible grills, safety nets, pigeon nets, cloth hangers and sports nets. Chennai based, installed all over India. Free site survey, 24×7 service."
        path="/"
      />

      <Hero />

      {/* ── Stats strip ─────────────────────────────────────────────────── */}
      <section aria-labelledby="stats-heading" className="bg-navy-deep py-12 text-white">
        <div className="container-page">
          <h2 id="stats-heading" className="sr-only">Jemima in numbers</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-display text-4xl font-extrabold text-orange">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-sm text-white/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="container-page py-12 sm:py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="What we install" title="Every opening, closed right" id="services-heading" />
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange transition-colors">
            View all services <ArrowRight className="size-4" />
          </Link>
        </div>
        <ServicesCarousel />
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="border-y border-steel/15 bg-mist py-12 sm:py-20">
        <div className="container-page">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionTitle eyebrow="No hidden charges" title="Typical pricing, shown up front" id="pricing-heading" />
              <p className="mt-4 max-w-xl text-navy-deep/65">
                Your exact price depends on the site survey, but here's the typical range so you know what to expect before we visit.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {pricingCards.map((p, i) => (
              <Reveal key={p.service} delay={i * 0.06}>
                <Link
                  to={`/services/${p.slug}`}
                  className={`group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    p.highlight
                      ? 'border-orange/40 bg-navy-deep text-white shadow-md shadow-navy/20'
                      : 'border-steel/20 bg-white hover:border-orange/30 hover:shadow-navy/8'
                  }`}
                >
                  <span className={`text-xs font-bold tracking-[0.12em] uppercase ${p.highlight ? 'text-orange' : 'text-steel'}`}>
                    {p.note}
                  </span>
                  <span className={`mt-3 font-display text-2xl font-extrabold ${p.highlight ? 'text-white' : 'text-navy-deep'}`}>
                    {p.price}
                  </span>
                  <span className={`text-xs ${p.highlight ? 'text-white/60' : 'text-steel'}`}>{p.unit}</span>
                  <span className={`mt-4 font-sans text-sm font-semibold ${p.highlight ? 'text-white/90' : 'text-navy-deep'}`}>
                    {p.service}
                  </span>
                  <span className={`mt-auto pt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors ${p.highlight ? 'text-orange' : 'text-orange opacity-0 group-hover:opacity-100'}`}>
                    Get quote <ArrowRight className="size-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs text-navy-deep/50">
            Indicative starting ranges for Chennai installations — your exact quote depends on site survey, access and finish options.
          </p>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section aria-labelledby="process-heading" className="container-page py-12 sm:py-20">
        <SectionTitle
          eyebrow="Process"
          title="How it works"
          subtitle="Free survey, same-day quote, installed in one visit."
          className="mb-12"
        />
        <ProcessTimeline steps={howItWorks} />
      </section>

      {/* ── Why Jemima ──────────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="border-y border-steel/15 bg-navy-deep py-12 sm:py-20 text-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Why Jemima"
            title="What actually makes a difference"
            subtitle="Marine-grade steel, child-safe spacing, honest recommendations — stated on the quote before you decide."
            light
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.07}>
                <div className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-orange/40 hover:bg-white/8">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange/15 transition-colors duration-300 group-hover:bg-orange">
                    <Icon className="size-5 text-orange transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────────────────────── */}
      <section aria-labelledby="comparison-heading" className="container-page py-12 sm:py-20">
        <div className="mb-8 sm:mb-12">
          <SectionTitle
            eyebrow="Comparison"
            title="Invisible grill vs. conventional MS grill"
            subtitle="Not sure which is right for your balcony? Here's the honest breakdown."
            id="comparison-heading"
          />
        </div>
        {/* Mobile: stacked cards */}
        <div className="space-y-3 sm:hidden">
          {comparisonRows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-steel/20 bg-white p-4 shadow-sm">
              <p className="mb-3 text-[10px] font-bold tracking-[0.1em] text-steel/70 uppercase">{row.label}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-orange/6 p-3">
                  <p className="mb-1.5 text-[10px] font-bold text-orange">✦ Invisible Grill</p>
                  <span className="flex items-start gap-1.5 text-xs text-navy-deep">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-orange" aria-hidden="true" />
                    {row.invisible}
                  </span>
                </div>
                <div className="rounded-xl bg-mist p-3">
                  <p className="mb-1.5 text-[10px] font-bold text-steel">MS Grill</p>
                  <span className="flex items-start gap-1.5 text-xs text-navy-deep/65">
                    {row.win ? (
                      <X className="mt-0.5 size-3.5 shrink-0 text-steel/50" aria-hidden="true" />
                    ) : (
                      <Check className="mt-0.5 size-3.5 shrink-0 text-steel" aria-hidden="true" />
                    )}
                    {row.ms}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: table */}
        <div className="hidden overflow-hidden rounded-2xl border border-steel/20 bg-white shadow-sm sm:block">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-steel/20 bg-mist">
            <div className="px-6 py-4 text-xs font-bold tracking-[0.1em] text-steel uppercase" />
            <div className="border-l border-steel/20 px-6 py-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                ✦ Invisible Grill
              </span>
            </div>
            <div className="border-l border-steel/20 px-6 py-4">
              <span className="text-xs font-bold text-steel">Conventional MS Grill</span>
            </div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_1fr_1fr] border-b border-steel/10 last:border-0 ${i % 2 === 1 ? 'bg-mist/50' : 'bg-white'}`}
            >
              <div className="self-center px-6 py-4 text-xs font-semibold tracking-wide text-steel/80 uppercase">
                {row.label}
              </div>
              <div className="border-l border-steel/10 px-6 py-4">
                <span className="flex items-start gap-2 text-sm text-navy-deep">
                  <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
                  {row.invisible}
                </span>
              </div>
              <div className="border-l border-steel/10 px-6 py-4">
                <span className="flex items-start gap-2 text-sm text-navy-deep/65">
                  {row.win ? (
                    <X className="mt-0.5 size-4 shrink-0 text-steel/50" aria-hidden="true" />
                  ) : (
                    <Check className="mt-0.5 size-4 shrink-0 text-steel" aria-hidden="true" />
                  )}
                  {row.ms}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading" className="border-y border-steel/15 bg-mist py-12 sm:py-20">
        <div className="container-page">
          <SectionTitle eyebrow="What Chennai says" title="From balconies across the city" className="mb-12" />
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name + t.locality} delay={(i % 2) * 0.08}>
                <div className="flex flex-col gap-4 rounded-2xl border border-steel/20 bg-white p-7 shadow-sm">
                  {/* stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="size-4 fill-orange text-orange" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-navy-deep/80">"{t.quote}"</p>
                  <div className="flex items-center justify-between border-t border-steel/15 pt-4">
                    <div>
                      <p className="text-sm font-bold text-navy-deep">{t.name}</p>
                      <p className="text-xs text-steel">{t.locality}</p>
                    </div>
                    <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                      {t.service}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ───────────────────────────────────────────────── */}
      <section aria-labelledby="gallery-heading" className="container-page py-12 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Our work" title="From site survey to finished install" id="gallery-heading" />
          <Link to="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange transition-colors">
            View full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={s.gallery[0].src}
                alt={s.gallery[0].alt}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {s.shortName}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="border-t border-steel/15 bg-mist py-12 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <SectionTitle eyebrow="FAQ" title="Common questions" id="faq-heading" />
              <p className="mt-4 text-sm leading-relaxed text-navy-deep/65">
                Can't find what you're looking for?{' '}
                <Link to="/contact" className="font-semibold text-orange hover:underline">
                  Ask us directly →
                </Link>
              </p>
            </div>
            <FaqAccordion faqs={homeFaqs} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready when you are, ${BUSINESS.city}`}
        subtitle="Free site survey, same-day quote, and a team that can start this week."
      />
    </>
  )
}
