import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { services } from '@/data/services'
import { BUSINESS, whatsappHref } from '@/lib/constants'

// Filter out sub-services (duct-area-nets, house-covering-nets) from main services list
const mainServices = services.filter(s => s.slug !== 'duct-area-nets' && s.slug !== 'house-covering-nets')

const coreServices = [
  {
    title: 'High-Tensile Invisible Grills',
    body: 'Engineered from marine-grade premium SS316 stainless steel encased in a transparent nylon coating, our invisible grills offer an unbeatable alternative to traditional bulky iron grills. Ideal for modern balcony structures, they deliver structural security without blocking your panoramic views or natural airflow.',
  },
  {
    title: 'Premium Pigeon & Bird Safety Nets',
    body: 'Keep birds away permanently without causing them harm. Our UV-stabilized, weather-resistant high-density polyethylene (HDPE) pigeon nets are virtually invisible from just a few feet away, preventing roosting on balconies, AC units, and window ledges.',
  },
  {
    title: 'Child & Pet Balcony Safety Nets',
    body: 'Ensure complete peace of mind on high-rise floors. Manufactured with micro-mesh technology and reinforced stainless steel anchoring hooks, our safety nets act as an invisible protective shield against accidental falls for toddlers and pets.',
  },
  {
    title: 'Ceiling Cloth Drying Hangers',
    body: 'Durable and rust-proof cloth hanger solutions for drying laundry. Custom-fitted to your balcony with sturdy stainless steel build. Available in fixed rod and pulley-operated lift systems.',
  },
]

const whyChooseUs = [
  { title: '5+ Years of Field Mastery', body: 'Proven technical expertise in executing complex high-rise installations and hard-to-reach duct areas.' },
  { title: 'ISO-Grade Garware Materials', body: 'We exclusively deploy genuine, UV-treated, non-corrosive materials designed for long-term outdoor durability.' },
  { title: 'Certified Installation Specialists', body: 'Fully trained technicians equipped with professional safety harnesses, precision lasers, and heavy-duty drilling machinery.' },
  { title: 'Free Site Audit & Upfront Quotes', body: 'Transparent, zero-hidden-fee pricing backed by complimentary site measurements.' },
]

const advantages = [
  { title: 'Hygiene & Health Protection', body: 'Eliminates toxic pigeon droppings and biological hazards at the source.' },
  { title: 'Paint & Structure Preservation', body: 'Prevents acidic bird waste from corroding metallic casings or damaging exterior building paint.' },
  { title: 'Unobstructed Panoramic Views', body: 'Engineered to blend seamlessly with your architecture, ensuring full sunlight and ventilation.' },
  { title: '100% Humane Pest Control', body: 'Safely deters birds without relying on dangerous chemical sprays or damaging spikes.' },
]

const homeFaqs = [
  { q: 'What is the invisible grills price range?', a: 'The average invisible grills price is between ₹120 and ₹180 per square foot, which includes standard installation, premium Hilti anchoring fasteners, and a thick aluminum track profile.' },
  { q: 'How do I get an exact cost estimate?', a: 'To get a complete estimation for your balconies or windows, you can request a free site visit. Our technician will visit your location to measure your spaces with laser tools and provide a detailed quotation.' },
  { q: 'Which areas do you cover?', a: 'We are based in Chennai and cover every locality in the city, plus we send installation teams to major cities across India for larger or one-off jobs.' },
  { q: 'How long does a typical installation take?', a: 'A single balcony or window: a few hours in one visit. Full apartments, societies and commercial sites are scheduled over multiple days depending on scope.' },
  { q: 'What warranty do you offer?', a: 'Cable and net material carries a multi-year warranty against rust/UV degradation, and installation workmanship is separately warrantied for the first year. Exact terms are on your quote.' },
]

function ServiceCard({ service: s }: { service: (typeof services)[0] }) {
  return (
    <Link
      to={`/services/${s.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-steel/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={s.gallery[0].src}
          alt={s.gallery[0].alt}
          width={400}
          height={300}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy-deep">{s.shortName}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-deep/60">{s.heroTagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
          Learn More <ArrowRight className="size-3.5" />
        </span>
      </div>
    </Link>
  )
}

export function Home() {
  return (
    <>
      <Seo
        title="Invisible Grills & Safety Nets in Chennai | Jemima"
        description="Invisible grills, safety nets, pigeon nets, cloth hangers. Chennai based, installed all over India. Free site survey, 24×7 service."
        path="/"
      />

      <Hero />

      {/* ── Our Services ─────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 id="services-heading" className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-navy-deep/60">Chennai's trusted solutions for safety, hygiene & convenience</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro + Areas Sidebar ────────────────────────────────────────── */}
      <section className="border-y border-steel/10 bg-mist py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <div className="mb-4 h-1 w-12 bg-orange" />
              <h2 className="font-display text-2xl font-bold text-navy-deep sm:text-3xl">
                Best Invisible Grills & Bird Safety Nets in Chennai
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-deep/70">
                <p>
                  Welcome to <strong className="text-navy-deep">Jemima Invisible Grills</strong>, the premier destination for modern architectural safety solutions and durable bird protection systems across Chennai. If pigeon droppings, unwanted pest intrusion, or safety concerns on upper-floor balconies are disturbing your living space, our expert team provides long-lasting, invisible, and eco-friendly solutions tailored for high-rise apartments, individual villas, and commercial properties.
                </p>
                <p>
                  With over a decade of hands-on experience, we combine structural safety with uncompromised aesthetic appeal. Having successfully executed over 500+ custom installations, we take pride in delivering heavy-duty HDPE bird nets and high-tensile stainless steel invisible grills engineered to withstand Chennai's demanding coastal climate, harsh summer heat, and intense monsoons.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-steel/15 bg-white p-6 shadow-sm">
              <p className="text-sm text-navy-deep/60">
                Providing prompt 24/7 service visits and rapid on-site installations across all major residential and commercial hubs in the Chennai metropolitan region:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Velachery', 'Tambaram', 'OMR', 'ECR', 'Anna Nagar', 'T. Nagar', 'Adyar', 'Thiruvanmiyur', 'Porur', 'Guindy', 'Mylapore', 'Sholinganallur', 'Chromepet', 'Pallikaranai'].map((area) => (
                  <span key={area} className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-navy-deep">
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="mr-2 inline-block size-1.5 rounded-full bg-orange" /><strong>T. Nagar & Adyar:</strong> Rapid installation for prime commercial buildings and luxury apartments.</p>
                <p><span className="mr-2 inline-block size-1.5 rounded-full bg-orange" /><strong>OMR & ECR Coastal Belt:</strong> Specialized rust-proof SS304-grade stainless steel invisible grills for sea-facing balconies.</p>
                <p><span className="mr-2 inline-block size-1.5 rounded-full bg-orange" /><strong>Anna Nagar & Velachery:</strong> Precision-fit pigeon nets for gated communities.</p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Protection Services ─────────────────────────────────────── */}
      <section aria-labelledby="core-services-heading" className="py-16 sm:py-20">
        <div className="container-page">
          <h2 id="core-services-heading" className="mb-10 font-display text-2xl font-bold text-navy-deep sm:text-3xl">
            Our Core Protection Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreServices.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-xl border border-steel/15 bg-white p-6">
                  <h3 className="flex items-start gap-2 font-display text-base font-bold text-navy-deep">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-orange" />
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-deep/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="border-y border-steel/10 bg-mist py-16 sm:py-20">
        <div className="container-page">
          <h2 id="why-heading" className="mb-10 font-display text-2xl font-bold text-navy-deep sm:text-3xl">
            Why Homeowners & Businesses Choose Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                    <Check className="size-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-deep">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-deep/65">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Advantages ───────────────────────────────────────────────── */}
      <section aria-labelledby="advantages-heading" className="py-16 sm:py-20">
        <div className="container-page">
          <h2 id="advantages-heading" className="mb-10 font-display text-2xl font-bold text-navy-deep sm:text-3xl">
            Key Advantages of Installing Safety Nets
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                    <Check className="size-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-deep">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-deep/65">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="border-t border-steel/10 bg-mist py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10">
            <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" id="faq-heading" />
          </div>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion faqs={homeFaqs} idPrefix="home-faq" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Secure Your Balcony Today"
        subtitle={`Call our ${BUSINESS.city} technical team today for a free on-site estimate and laser measurement. Protect your loved ones with Chennai's most trusted safety experts.`}
      />
    </>
  )
}
