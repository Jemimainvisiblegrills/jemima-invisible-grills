import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { services } from '@/data/services'
import { phoneHref, BUSINESS } from '@/lib/constants'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/service-areas', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
]

const allNavLinks = [
  { to: '/', label: 'Home' },
  ...navLinks,
]

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // close on route change
  const [lastPathname, setLastPathname] = useState(location.pathname)
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMobileOpen(false)
    setServicesOpen(false)
  }

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setServicesOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setServicesOpen(false); setMobileOpen(false) }
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-black/[0.06] bg-white/80 shadow-sm shadow-black/[0.04] backdrop-blur-xl'
            : 'bg-white/70 backdrop-blur-xl'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={`${BUSINESS.name} — home`}>
            <img src="/logo.png" alt="" width={970} height={924} className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-[15px] font-extrabold leading-tight tracking-tight text-navy-deep">Jemima</span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-orange uppercase">Invisible Grills & Nets</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
              Home
            </NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className="nav-link group flex items-center gap-1"
              >
                Services
                <ChevronDown
                  className={`size-3.5 text-steel transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-black/[0.07] bg-white/90 p-4 shadow-2xl shadow-black/10 backdrop-blur-2xl"
                  >
                    <ul className="space-y-1">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-deep transition-colors hover:bg-orange/8 hover:text-orange"
                          >
                            <s.icon className="size-4 shrink-0 text-steel" aria-hidden="true" />
                            {s.shortName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-black/[0.06] pt-4">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-deep hover:-translate-y-0.5"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={phoneHref}
              className="flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-light hover:-translate-y-0.5"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-black/[0.05] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5 text-navy-deep" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer — rendered OUTSIDE header so z-index is independent ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(340px,100vw)] flex-col bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4">
                <Link to="/" onClick={close}>
                  <img src="/logo.png" alt={BUSINESS.name} width={970} height={924} className="h-9 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="flex size-9 items-center justify-center rounded-xl bg-black/[0.05] hover:bg-black/10"
                  aria-label="Close menu"
                >
                  <X className="size-4 text-navy-deep" aria-hidden="true" />
                </button>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col overflow-y-auto px-5 py-5">
                {/* Main links */}
                <div className="space-y-0.5">
                  {allNavLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={close}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-navy-deep transition-colors hover:bg-black/[0.04] active:bg-black/[0.07]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div className="my-4 h-px bg-black/[0.06]" />

                {/* Services */}
                <p className="mb-2 px-4 text-[10px] font-bold tracking-[0.12em] text-steel/60 uppercase">
                  Our Services
                </p>
                <div className="space-y-0.5">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={close}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-navy-deep/80 transition-colors hover:bg-black/[0.04] hover:text-orange active:bg-black/[0.07]"
                    >
                      <s.icon className="size-4 shrink-0 text-steel" aria-hidden="true" />
                      {s.shortName}
                    </Link>
                  ))}
                </div>

                {/* Bottom CTAs */}
                <div className="mt-auto space-y-3 pt-6">
                  <a
                    href={phoneHref}
                    className="flex items-center justify-center gap-2 rounded-xl border border-black/10 py-3 text-sm font-semibold text-navy-deep hover:bg-black/[0.03]"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {BUSINESS.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    onClick={close}
                    className="block rounded-xl bg-orange py-3 text-center text-sm font-semibold text-white shadow-sm shadow-orange/30 hover:bg-orange-light"
                  >
                    Get free quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
