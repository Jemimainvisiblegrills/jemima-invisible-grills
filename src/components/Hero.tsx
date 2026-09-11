import { useState, useEffect, useRef } from 'react'
import { Phone, MessageCircle, ShieldCheck, Clock, Truck, Layers, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

const heroSlides = [
  {
    src: '/invisible-grills-balcony-evening-woman-standing.webp',
    service: 'Invisible Grills',
    slug: 'invisible-grills',
    heading: ['Balconies you can', 'see through.', 'Not fall through.'],
    headingHighlight: 1,
    description: 'SS 316 cable grills — unbroken view, child-safe spacing, free survey.',
  },
  {
    src: '/cloth-hangers-ceiling-pulley-hanger-white-balcony.webp',
    service: 'Cloth Dry Hangers',
    slug: 'cloth-hangers',
    heading: ['Dry clothes without', 'losing your', 'balcony.'],
    headingHighlight: 1,
    description: 'Ceiling-mounted SS 316 rod systems — fixed or pulley-operated, rust-proof.',
  },
  {
    src: '/safety-nets-child-at-balcony-railing.webp',
    service: 'Safety Nets',
    slug: 'safety-nets',
    heading: ['Kids climb, pets jump,', 'someone leans', 'too far.'],
    headingHighlight: 1,
    description: 'Fall-prevention nets for children, pets and elderly — no-drill option available.',
  },
  {
    src: '/pigeon-nets-balcony-net-city-view.webp',
    service: 'Pigeon Nets',
    slug: 'pigeon-nets',
    heading: ['The droppings stop.', 'The nesting stops.', "The view doesn't."],
    headingHighlight: 0,
    description: 'UV-stable HDPE mesh — invisible from inside, fixed without drilling the slab.',
  },
]

const trustPoints = [
  { icon: Clock,       label: '24×7 service' },
  { icon: ShieldCheck, label: 'Free site survey' },
  { icon: Truck,       label: 'All-India install' },
  { icon: Layers,      label: 'SS 316 steel' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStart = useRef(0)
  const dragging = useRef(false)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 4500)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goTo = (i: number) => { setIdx(i); startTimer() }
  const prev = () => goTo((idx - 1 + heroSlides.length) % heroSlides.length)
  const next = () => goTo((idx + 1) % heroSlides.length)

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    dragStart.current = e.clientX
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return
    dragging.current = false
    const delta = e.clientX - dragStart.current
    if (delta < -50) next()
    else if (delta > 50) prev()
  }

  const slide = heroSlides[idx]

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[85vh] flex-col sm:min-h-[92vh] overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* Background images */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            aria-hidden="true"
            fetchPriority={i === 0 ? 'high' : 'low'}
            width={1600}
            height={1067}
            className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-1000 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep/85 sm:bg-gradient-to-r sm:from-navy-deep/92 sm:via-navy-deep/75 sm:to-navy-deep/30" />
        <div className="absolute inset-0 cable-backdrop opacity-[0.06]" />
      </div>

      {/* Service badge — top right */}
      <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.service}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Link
              to={`/services/${slide.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-orange/50 bg-navy-deep/70 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-md transition-colors hover:bg-orange hover:border-orange"
            >
              <span className="size-1.5 rounded-full bg-orange animate-pulse" />
              {slide.service}
              <ArrowRight className="size-3 opacity-70" aria-hidden="true" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows — desktop only */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 size-10 items-center justify-center rounded-full border border-white/20 bg-navy-deep/50 text-white backdrop-blur-sm transition-all hover:bg-orange hover:border-orange sm:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 size-10 items-center justify-center rounded-full border border-white/20 bg-navy-deep/50 text-white backdrop-blur-sm transition-all hover:bg-orange hover:border-orange sm:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Main content — slides with each change */}
      <div className="container-page flex flex-1 items-end pb-8 pt-16 sm:items-center sm:py-24 lg:py-32">
        <div className="w-full max-w-2xl">
          {/* Location badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/85 uppercase backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-orange" />
              {BUSINESS.city} · {BUSINESS.areaServed}-wide
            </span>
          </motion.div>

          {/* Heading — animates per slide */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${idx}`}
              id="hero-heading"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.25rem,8vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-white"
            >
              {slide.heading.map((line, i) => (
                <span key={i} className={`block ${i === slide.headingHighlight ? 'text-gradient' : ''}`}>
                  {line}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          {/* Description — animates per slide */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${idx}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-[15px] leading-relaxed text-white/70 sm:mt-5 sm:max-w-lg sm:text-lg"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* Buttons — static */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/40 transition-all active:scale-[0.97] hover:bg-orange-light sm:px-6"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all active:scale-[0.97] hover:bg-white/20 sm:px-6"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call now
            </a>
          </div>

          <div className="mt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              Explore all services
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="container-page flex gap-1.5 pb-4">
        {heroSlides.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${s.service} slide`}
            className={`rounded-full transition-all duration-300 ${
              i === idx ? 'h-1.5 w-5 bg-orange' : 'size-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Trust strip */}
      <div className="border-t border-white/10 bg-navy-deep/80 backdrop-blur-md">
        <div className="container-page grid grid-cols-2 gap-x-4 gap-y-3 py-4 sm:grid-cols-4 sm:py-5">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange/20">
                <Icon className="size-4 text-orange" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold leading-tight text-white/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
