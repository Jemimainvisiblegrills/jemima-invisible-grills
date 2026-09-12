import { Phone, MessageCircle } from 'lucide-react'
import { phoneHref, whatsappHref, BUSINESS } from '@/lib/constants'

type CtaBandProps = {
  title?: string
  subtitle?: string
}

export function CtaBand({
  title = 'Secure Your Balcony Today',
  subtitle = `Call our Chennai technical team today for a free on-site estimate and laser measurement. Protect your loved ones with Chennai's most trusted safety experts.`,
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-navy-deep py-16 text-white sm:py-20"
    >
      <div className="container-page text-center">
        <h2
          id="cta-heading"
          className="font-display text-2xl font-bold sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/60">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={phoneHref}
            className="flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-light"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now: {BUSINESS.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
