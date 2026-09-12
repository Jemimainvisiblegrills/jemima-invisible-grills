import { useState, useEffect, useRef, useCallback } from 'react'
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useTransform, animate } from 'motion/react'
import { Link } from 'react-router-dom'
import { whatsappHref } from '@/lib/constants'

const heroSlides = [
  {
    src: '/invisible-grills-balcony-night-city-view.webp',
    service: 'Invisible Grills',
    slug: 'invisible-grills',
    badge: 'BALCONY SAFETY SOLUTIONS',
    heading: 'Premium Invisible Grills for Balconies',
    description: 'Durable, weather-resistant, and high-strength stainless steel grills designed to keep your family safe while maintaining ventilation.',
  },
  {
    src: '/invisible-grills-apartment-balcony-high-rise-view.webp',
    service: 'Bird Safety Nets',
    slug: 'pigeon-nets',
    badge: 'BIRD PROOFING SOLUTIONS',
    heading: 'Premium Bird Safety Nets for Balconies',
    description: 'Durable, weather-resistant, and high-strength transparent nets designed to keep birds out while maintaining ventilation.',
  },
  {
    src: '/invisible-grills-modern-balcony-city-skyline.webp',
    service: 'Safety Nets',
    slug: 'safety-nets',
    badge: 'CHILD & PET SAFETY',
    heading: 'Child & Pet Safety Nets for High-Rise Living',
    description: 'Heavy-duty fall protection safety netting systems to secure balconies, staircases, and window openings for children and toddlers.',
  },
  {
    src: '/gallery-new-10.webp',
    service: 'Cloth Hangers',
    slug: 'cloth-hangers',
    badge: 'UTILITY SOLUTIONS',
    heading: 'Ceiling Cloth Hangers for Balconies',
    description: 'Durable and rust-proof cloth hanger solutions for drying laundry. Custom-fitted to your balcony with sturdy stainless steel build.',
  },
]

const stats = [
  { value: '500+', label: 'PROJECTS COMPLETED' },
  { value: '4.9★', label: 'AVERAGE RATING' },
  { value: '24hr', label: 'SITE VISIT RESPONSE' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState(0) // -1 = prev, 1 = next
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  
  // Swipe tracking
  const dragX = useMotionValue(0)
  const dragStartX = useRef(0)
  const isDragging = useRef(false)
  const dragStartTime = useRef(0)

  // Parallax effect on drag
  const backgroundX = useTransform(dragX, [-200, 0, 200], [30, 0, -30])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIdx((i) => (i + 1) % heroSlides.length)
    }, 6000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const goTo = (i: number) => {
    setDirection(i > idx ? 1 : -1)
    setIdx(i)
    startTimer()
  }
  
  const prev = () => {
    setDirection(-1)
    setIdx((i) => (i - 1 + heroSlides.length) % heroSlides.length)
    startTimer()
  }
  
  const next = () => {
    setDirection(1)
    setIdx((i) => (i + 1) % heroSlides.length)
    startTimer()
  }

  // Touch/Mouse handlers for smooth swipe
  const handleDragStart = (clientX: number) => {
    isDragging.current = true
    dragStartX.current = clientX
    dragStartTime.current = Date.now()
    dragX.set(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return
    const delta = clientX - dragStartX.current
    dragX.set(delta)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging.current) return
    isDragging.current = false
    
    const delta = clientX - dragStartX.current
    const velocity = delta / (Date.now() - dragStartTime.current)
    const threshold = 50
    const velocityThreshold = 0.3

    // Animate back to 0
    animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30 })

    // Determine if we should change slide
    if (delta < -threshold || velocity < -velocityThreshold) {
      next()
    } else if (delta > threshold || velocity > velocityThreshold) {
      prev()
    }
  }

  // Pointer events (works for both mouse and touch)
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') {
      (e.target as HTMLElement).setPointerCapture(e.pointerId)
    }
    handleDragStart(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    handleDragMove(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    handleDragEnd(e.clientX)
  }

  // Touch events for better mobile support
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    handleDragEnd(e.changedTouches[0].clientX)
  }

  const slide = heroSlides[idx]

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '8%' : '-8%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-8%' : '8%',
      opacity: 0,
      scale: 0.95,
    }),
  }

  const textVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  }

  return (
    <>
      <section
        ref={containerRef}
        aria-labelledby="hero-heading"
        className="relative isolate flex min-h-[70vh] flex-col sm:min-h-[80vh] overflow-hidden select-none touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
      >
        {/* Background images with parallax */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={idx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 200, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.6 },
              }}
              className="absolute inset-0"
            >
              <motion.img
                src={slide.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full object-cover object-center"
                style={{ x: backgroundX }}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Gradient overlay - clean dark blue like reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/70 to-[#111827]/20" />
        </div>

        {/* Prev / Next arrows - cleaner style */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 z-20 -translate-y-1/2 size-11 sm:size-12 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 active:scale-95"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 z-20 -translate-y-1/2 size-11 sm:size-12 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 active:scale-95"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Main content */}
        <div className="container-page relative z-10 flex flex-1 items-center py-20 sm:py-24">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={idx}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                {/* Badge */}
                <motion.span
                  variants={textVariants}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-[11px] font-bold tracking-[0.18em] text-orange uppercase"
                >
                  {slide.badge}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  id="hero-heading"
                  variants={textVariants}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="font-display text-[clamp(1.75rem,5vw,3.25rem)] font-extrabold leading-[1.1] text-white"
                >
                  {slide.heading}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-[15px] leading-relaxed text-gray-300 sm:text-base max-w-md"
                >
                  {slide.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-light active:scale-95"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp Now
                  </a>
                  <Link
                    to={`/services/${slide.slug}`}
                    className="flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-gray-900 active:scale-95"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View {slide.service} <span className="ml-1">›</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress dots - cleaner style */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2.5">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); goTo(i) }}
              aria-label={`Go to ${s.service}`}
              className={`rounded-full transition-all duration-300 ${
                i === idx 
                  ? 'w-8 h-2.5 bg-orange' 
                  : 'size-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

      </section>

      {/* Stats strip - matching reference dark navy */}
      <div className="bg-[#111827] py-10 sm:py-12">
        <div className="container-page grid grid-cols-3 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-3xl sm:text-5xl font-bold text-white">{s.value}</p>
              <p className="mt-2 text-[10px] sm:text-xs font-medium tracking-widest text-gray-400 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
