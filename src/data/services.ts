import {
  Cable,
  Bird,
  ShieldCheck,
  Shirt,
  Target,
  Wind,
  ArrowUpDown,
  HardHat,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  name: string
  shortName: string
  category: 'Invisible Grills' | 'Safety Nets' | 'Pigeon Nets' | 'Cloth Hangers' | 'Sports Nets' | 'Duct Area Nets' | 'Staircase Nets' | 'Construction Nets'
  metaTitle: string
  metaDescription: string
  icon: LucideIcon
  heroTagline: string
  intro: string[]
  bestFor: string[]
  materials: { label: string; value: string }[]
  benefits: { title: string; body: string }[]
  process: { step: string; body: string }[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  gallery: { src: string; alt: string }[]
}

export const services: Service[] = [
  // ── 1. Invisible Grills ──────────────────────────────────────────────────
  {
    slug: 'invisible-grills',
    name: 'Invisible Grills',
    shortName: 'Invisible Grills',
    category: 'Invisible Grills',
    metaTitle: 'Invisible Grills for Balcony in Chennai | Jemima',
    metaDescription:
      'SS 316 cable invisible grills for balconies in Chennai. Unbroken view, child-safe 89mm spacing, free survey. Call +91 78100 40329 for a quote today.',
    icon: Cable,
    heroTagline: 'Balconies you can see through. Not fall through.',
    intro: [
      'An invisible grill is a set of vertical stainless steel cables, tensioned between a top and bottom aluminium channel, fixed across your balcony or window opening. From two metres away the balcony looks open. Up close, nobody is going over that railing.',
      'We use 2mm–3mm SS 316 grade cable — the same grade used in marine railings — because Chennai\'s coastal air eats cheaper steel within two monsoons. Cables are spaced at a fixed 89mm (3.5 inch) gap, tight enough that a child cannot slip a limb through, and tensioned with turnbuckles so the whole system stays rigid, not springy.',
    ],
    bestFor: [
      "Apartment balconies where you don't want to lose the view or the light",
      'High-rise flats on floor 5 and above where MS grills look heavy from outside',
      'Owners who want the balcony to still look like a balcony, not a cage',
      'Renovation jobs replacing old, rusted mesh grills',
    ],
    materials: [
      { label: 'Cable material', value: 'SS 316 grade, 7×7 strand, 2mm–3mm dia.' },
      { label: 'Vertical spacing', value: '89mm (3.5″) fixed, child-safe' },
      { label: 'Frame / channel', value: 'Powder-coated aluminium, 4 colour options' },
      { label: 'Tensioning', value: 'Stainless steel turnbuckles, re-tightenable' },
      { label: 'Warranty', value: '5 years on cable against rust, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'The view stays open',
        body: 'From the living room, the cables disappear. From outside, the building elevation stays clean instead of showing bars.',
      },
      {
        title: 'No drilling into the slab',
        body: 'Fixing points are on the parapet and ceiling edge, not through your waterproofing layer.',
      },
      {
        title: 'Handles Chennai humidity',
        body: 'SS 316 grade steel resists corrosion near the coast — 202 grade and painted MS both start spotting within a year here.',
      },
      {
        title: 'Adjustable after installation',
        body: 'Turnbuckles let our team re-tension cables on a service visit if they loosen over years of heat expansion.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure your balcony opening, check the parapet height and ceiling depth. Usually 20–30 minutes, same day or next day.',
      },
      {
        step: 'Quote same day',
        body: 'You get a per-running-foot rate on WhatsApp within hours of the survey, broken down by cable length and channel colour choice.',
      },
      {
        step: 'Installation',
        body: 'A 2-person team fits the top and bottom channel, runs and tensions each cable, and cleans up. Most balconies done in 3–4 hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If a cable loosens or a channel needs re-sealing, call us and we re-tension free within the warranty period.',
      },
    ],
    faqs: [
      {
        q: 'Will the cables sag or loosen over time?',
        a: 'Slight loosening from heat expansion is normal after the first summer. It takes ten minutes to re-tension with the turnbuckles — we do this free within warranty.',
      },
      {
        q: 'Can I still hang clothes to dry on the balcony?',
        a: "Yes. The cable system doesn't block a separate drying rod or stand; most homes keep both.",
      },
      {
        q: 'Is invisible grill as strong as a normal MS grill?',
        a: 'It resists lateral push and prevents falls and limb entrapment. It is not designed to be climbed on — no grill type should be.',
      },
      {
        q: 'How long does one balcony take?',
        a: 'A standard 8–10 ft balcony opening takes 3–4 hours including tensioning and cleanup.',
      },
    ],
    relatedSlugs: ['pigeon-nets', 'safety-nets', 'sports-nets'],
    gallery: [
      { src: '/invisible-grills-apartment-balcony-night.webp', alt: 'invisible grills apartment balcony night' },
      { src: '/invisible-grills-apartment-window-exterior.webp', alt: 'invisible grills apartment window exterior' },
      { src: '/invisible-grills-balcony-customer-view.webp', alt: 'invisible grills balcony customer view' },
      { src: '/invisible-grills-balcony-evening-woman-standing.webp', alt: 'invisible grills balcony evening woman standing' },
      { src: '/invisible-grills-balcony-night-city-view.webp', alt: 'invisible grills balcony night city view' },
      { src: '/invisible-grills-balcony-sea-facing-view.webp', alt: 'invisible grills balcony sea facing view' },
      { src: '/invisible-grills-balcony-wide-banner-view.webp', alt: 'invisible grills balcony wide banner view' },
      { src: '/invisible-grills-child-safe-balcony-lake-view.webp', alt: 'invisible grills child safe balcony lake view' },
      { src: '/invisible-grills-corner-window-open-field-view.webp', alt: 'invisible grills corner window open field view' },
      { src: '/invisible-grills-glass-balcony-wooden-flooring.webp', alt: 'invisible grills glass balcony wooden flooring' },
      { src: '/invisible-grills-high-rise-balcony-lake-view.webp', alt: 'invisible grills high rise balcony lake view' },
      { src: '/invisible-grills-indoor-staircase-living-room.webp', alt: 'invisible grills indoor staircase living room' },
      { src: '/invisible-grills-indoor-stairs-hallway.webp', alt: 'invisible grills indoor stairs hallway' },
      { src: '/invisible-grills-luxury-balcony-blue-glass-facade.webp', alt: 'invisible grills luxury balcony blue glass facade' },
      { src: '/invisible-grills-premium-balcony-wooden-deck.webp', alt: 'invisible grills premium balcony wooden deck' },
      { src: '/invisible-grills-sliding-window-city-view.webp', alt: 'invisible grills sliding window city view' },
      { src: '/invisible-grills-staircase-installation-apartment.webp', alt: 'invisible grills staircase installation apartment' },
      { src: '/invisible-grills-window-installation-city-outlook.webp', alt: 'invisible grills window installation city outlook' },
      { src: '/invisible-grills-window-net-city-view.webp', alt: 'invisible grills window net city view' },
      { src: '/invisible-grill-banner.webp', alt: 'invisible grill banner' },
      { src: '/invisible-grill-apartment-balcony-night.webp', alt: 'invisible grill apartment balcony night' },
      { src: '/invisible-grill-balcony-night-view.webp', alt: 'invisible grill balcony night view' },
      { src: '/premium-invisible-grill-balcony.webp', alt: 'premium invisible grill balcony' },
      { src: '/high-rise-invisible-grill-balcony.webp', alt: 'high rise invisible grill balcony' },
      { src: '/glass-balcony-invisible-grill.webp', alt: 'glass balcony invisible grill' },
      { src: '/luxury-balcony-invisible-grill.webp', alt: 'luxury balcony invisible grill' },
      { src: '/apartment-window-invisible-grill.webp', alt: 'apartment window invisible grill' },
      { src: '/window-invisible-grill-installation.webp', alt: 'window invisible grill installation' },
      { src: '/window-invisible-grill-city-view.webp', alt: 'window invisible grill city view' },
      { src: '/corner-window-invisible-grill.webp', alt: 'corner window invisible grill' },
      { src: '/staircase-invisible-grill-installation.webp', alt: 'staircase invisible grill installation' },
      { src: '/Invisible-Grill-Staircase4.webp', alt: 'Invisible Grill Staircase4' },
      { src: '/safety-nets-balcony-net-hillside-view.webp', alt: 'safety nets balcony net hillside view' },
    ],
  },

  // ── 2. Cloth Hangers ─────────────────────────────────────────────────────
  {
    slug: 'cloth-hangers',
    name: 'Pigeon Nets',
    shortName: 'Pigeon Nets',
    category: 'Pigeon Nets',
    metaTitle: 'Pigeon Net Installation in Chennai | Jemima',
    metaDescription:
      'Stop pigeons nesting on your balcony, duct or terrace. UV-stable HDPE nets, invisible from inside, no drilling into the slab. Free survey — call +91 78100 40329.',
    icon: Bird,
    heroTagline: "The droppings stop. The nesting stops. The view doesn't.",
    intro: [
      "Pigeons on a balcony aren't just a mess — droppings carry fungal spores that are a genuine respiratory risk, and once a pair nests in a corner they will keep returning to the same spot for years. A pigeon net is the direct fix: a UV-stabilised HDPE mesh fitted across the balcony opening so birds can't land or nest, without changing how the balcony looks or feels from inside.",
      "We use a fine, high-density knotted mesh — 1.5 inch spacing — small enough that pigeons can't squeeze through but see-through enough that from your sofa you barely notice it's there. The net is fixed to the wall and ceiling edge with stainless steel hooks, not tacked to the railing, so there's no loose flapping in Chennai's pre-monsoon winds.",
    ],
    bestFor: [
      'Balconies where pigeons have already started nesting or roosting',
      'Flats with an AC outdoor unit ledge that pigeons use as a perch',
      "Owners who want the mess and noise gone without changing the balcony's look",
      'Duct shafts and terrace parapets where birds nest out of reach',
    ],
    materials: [
      { label: 'Mesh material', value: 'UV-stabilised HDPE, knotted, 1.5″ × 1.5″ spacing' },
      { label: 'Border rope', value: '6mm braided nylon edge rope, stitched into the net' },
      { label: 'Fixing hooks', value: 'Stainless steel L-hooks / eye bolts, spaced 12–18 inches apart' },
      { label: 'Visibility', value: 'Near-invisible from indoor viewing distance in matching net colour' },
      { label: 'Warranty', value: '5 years against UV degradation, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Stops nesting, not just perching',
        body: "Spikes and reflective tape only block one ledge — pigeons move a foot over. A full net closes the opening so there's nowhere left to land.",
      },
      {
        title: 'Barely visible from inside',
        body: 'Fine 1.5-inch mesh in a matched colour reads as a faint shimmer, not a visible barrier, from normal sitting distance.',
      },
      {
        title: 'No drilling into the parapet coping or waterproofing',
        body: 'Hooks anchor into the wall face and ceiling edge, keeping your waterproofing layer intact.',
      },
      {
        title: 'Cleans up the mess for good',
        body: "Once birds can't land, droppings, feathers and nesting material stop accumulating.",
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure the balcony opening and check existing perch points — AC ledges, grill tops, parapet coping — that need covering along with the main opening.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per square foot of net, with hook count included so there are no surprise add-ons later.',
      },
      {
        step: 'Installation',
        body: 'Hooks are fixed first, net is stretched and tied taut, and edges are checked by hand for gaps a bird could exploit. Most balconies: 2–3 hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If a section loosens or a hook works free within the warranty period, we re-fix it free of charge.',
      },
    ],
    faqs: [
      {
        q: 'Will pigeons already nesting come back after the net goes up?',
        a: 'We clear existing nests as part of installation. Once the net is up, birds cannot re-enter that opening.',
      },
      {
        q: 'Does the net make the balcony darker?',
        a: 'No — 1.5 inch mesh in a light colour blocks very little light and is close to invisible from inside.',
      },
      {
        q: 'What if I have an AC unit on the balcony?',
        a: 'We route the net around the unit and its pipe run, and can add a small serviceable flap if the technician needs regular access.',
      },
      {
        q: "Is the net strong enough for Chennai's monsoon wind?",
        a: "Yes, the mesh and hook spacing are rated well above normal wind load; we've fitted these across coastal-facing towers with no issues.",
      },
    ],
    relatedSlugs: ['safety-nets', 'invisible-grills', 'sports-nets'],
    gallery: [
      { src: '/gallery-new-6.webp', alt: 'gallery new 6' },
      { src: '/invisible-grills-modern-balcony-city-skyline.webp', alt: 'invisible grills modern balcony city skyline' },
      { src: '/modern-balcony-invisible-grill.webp', alt: 'modern balcony invisible grill' },
      { src: '/pigeon-nets-ac-outdoor-unit-protection-net.webp', alt: 'pigeon nets ac outdoor unit protection net' },
      { src: '/pigeon-nets-balcony-installation-greenery-view.webp', alt: 'pigeon nets balcony installation greenery view' },
      { src: '/pigeon-nets-balcony-net-city-view.webp', alt: 'pigeon nets balcony net city view' },
      { src: '/pigeon-nets-bird-blocked-by-window-net.webp', alt: 'pigeon nets bird blocked by window net' },
      { src: '/pigeon-nets-building-window-nets-elevation.webp', alt: 'pigeon nets building window nets elevation' },
      { src: '/pigeon-nets-pigeons-on-balcony-railing.webp', alt: 'pigeon nets pigeons on balcony railing' },
      { src: '/apartment-pigeon-net-balcony.webp', alt: 'apartment pigeon net balcony' },
      { src: '/balcony-pigeon-net-installation.webp', alt: 'balcony pigeon net installation' },
      { src: '/balcony-pigeon-safety-net.webp', alt: 'balcony pigeon safety net' },
      { src: '/corridor-pigeon-net-installation.webp', alt: 'corridor pigeon net installation' },
    ],
  },

  // ── 3. Safety Nets ───────────────────────────────────────────────────────
  {
    slug: 'safety-nets',
    name: 'Safety Nets',
    shortName: 'Safety Nets',
    category: 'Safety Nets',
    metaTitle: 'Safety Nets for Balcony, Windows & Staircases | Chennai',
    metaDescription:
      'Fall-prevention safety nets for children, pets and elderly family members. No-drill option available. Free survey — call +91 78100 40329.',
    icon: ShieldCheck,
    heroTagline: 'Kids climb, pets jump, someone leans too far. One net covers all three.',
    intro: [
      "A safety net is the most versatile fall-prevention product we install — it works for young children, pets that jump onto balcony ledges, elderly family members who lean on railings, and general everyday peace of mind. Standard 2-inch mesh, fitted across the full balcony or window opening, with a choice of clip-hook (no-drill) or permanent SS anchor fixing.",
      "If you're in a rented flat where drilling into the wall isn't allowed, the clip-hook option means this goes up and comes down without marking the wall — and moves with you when you shift flats. If pets are part of the reason you're asking, mention it during survey — we check the mesh tension specifically against a jumping or climbing pet.",
    ],
    bestFor: [
      'Households with young children on balconies or near low-sill windows',
      'Homes with a cat or dog that jumps onto balcony ledges or railings',
      'Households with an elderly parent who uses the balcony railing for support',
      "Rented flats where drilling into the wall isn't allowed by the landlord",
    ],
    materials: [
      { label: 'Mesh material', value: 'Nylon or HDPE, 2″ spacing, standard breaking strength' },
      { label: 'Fixing', value: 'Removable clip hooks (no-drill) or SS eye-bolt anchors (permanent)' },
      { label: 'Pet-rated tension', value: 'Extra tensioning at jump-height points on request' },
      { label: 'Colour', value: 'White, grey or black to match your railing or wall' },
      { label: 'Warranty', value: '3–5 years depending on fixing type, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'One spec, several worries solved',
        body: "The same net addresses children, pets and elderly fall risk — you don't need three different products.",
      },
      {
        title: 'Choice of drilled or no-drill fixing',
        body: "Owned flats can go with permanent SS eye-bolt anchors; rented flats can choose clip-hook, no-drill fixing.",
      },
      {
        title: 'Removable when you move',
        body: 'Unclips cleanly if you shift flats, so it comes with you rather than staying fixed to a rented property.',
      },
      {
        title: "Doesn't interrupt daily balcony use",
        body: 'Routed around drying stands and AC units so the balcony stays fully usable, not boxed in.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We ask what's driving the request — children, pets, elderly family — since it changes tensioning and fixing choice.",
      },
      {
        step: 'Quote same day',
        body: 'One quote covering both fixing options (drilled or clip) so you can decide based on whether you own or rent.',
      },
      {
        step: 'Installation',
        body: 'Net is fitted and hand-tested at jump height if pets are involved, in addition to standard checks.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'Re-tensioning or hook replacement is free within warranty if a pet or general wear loosens a section.',
      },
    ],
    faqs: [
      {
        q: 'Will a cat or dog be able to break through the net?',
        a: 'Standard mesh handles typical pet weight and jumping; we add extra tension points at jump height when you tell us a pet is involved.',
      },
      {
        q: 'Can I choose no-drill fixing even though I own the flat?',
        a: "Yes — clip-hook fixing isn't only for renters, some owners prefer it simply to avoid any wall drilling.",
      },
      {
        q: 'Does the net restrict using the balcony for drying clothes?',
        a: 'No, we route the net around your existing drying stand or rod so nothing changes about daily use.',
      },
      {
        q: 'How long does installation take?',
        a: 'A standard balcony: 2–3 hours including tensioning checks.',
      },
    ],
    relatedSlugs: ['pigeon-nets', 'invisible-grills', 'cloth-hangers'],
    gallery: [
      { src: '/invisible-grills-apartment-balcony-high-rise-view.webp', alt: 'invisible grills apartment balcony high rise view' },
      { src: '/pigeon-nets-apartment-balcony-city-view.webp', alt: 'pigeon nets apartment balcony city view' },
      { src: '/pigeon-nets-apartment-balcony-with-plants.webp', alt: 'pigeon nets apartment balcony with plants' },
      { src: '/pigeon-nets-installer-fitting-balcony-net.webp', alt: 'pigeon nets installer fitting balcony net' },
      { src: '/apartment-pigeon-safety-net.webp', alt: 'apartment pigeon safety net' },
      { src: '/safety-nets-balcony-green-net-with-plants.webp', alt: 'safety nets balcony green net with plants' },
      { src: '/safety-nets-balcony-net-apartment-view.webp', alt: 'safety nets balcony net apartment view' },
      { src: '/safety-nets-balcony-net-installer-at-work.webp', alt: 'safety nets balcony net installer at work' },
      { src: '/safety-nets-balcony-net-tree-view.webp', alt: 'safety nets balcony net tree view' },
      { src: '/safety-nets-cat-pet-safety-window-net.webp', alt: 'safety nets cat pet safety window net' },
      { src: '/safety-nets-child-at-balcony-railing.webp', alt: 'safety nets child at balcony railing' },
      { src: '/safety-nets-child-behind-balcony-net.webp', alt: 'safety nets child behind balcony net' },
      { src: '/safety-nets-corridor-net-with-installer.webp', alt: 'safety nets corridor net with installer' },
      { src: '/balcony-child-safety-net.webp', alt: 'balcony child safety net' },
    ],
  },

  // ── 4. Pigeon Nets ───────────────────────────────────────────────────────
  {
    slug: 'pigeon-nets',
    name: 'Cloth Hangers',
    shortName: 'Cloth Hangers',
    category: 'Cloth Hangers',
    metaTitle: 'Balcony Cloth Hanger Installation in Chennai | Jemima',
    metaDescription:
      'Ceiling-mounted and wall-mounted cloth drying hangers for balconies and utility areas. Stainless steel rods, pulley systems. Free survey — +91 78100 40329.',
    icon: Shirt,
    heroTagline: 'Dry clothes without losing your balcony.',
    intro: [
      "A ceiling-mounted cloth hanger keeps your drying rods off the floor and out of the way, turning a cramped balcony into a usable space again. We install stainless steel rod systems — fixed or pulley-operated — that mount to the ceiling or wall of your balcony or utility area, rated to hold a full load of wet laundry without sagging.",
      "This is one of the most practical additions to any Chennai apartment balcony, especially in flats where the balcony doubles as the only drying space. We fit these alongside our grill and net work so everything is done in one visit — no separate contractor needed.",
    ],
    bestFor: [
      'Apartments where the balcony is the only available drying space',
      'Homes wanting to free up floor space on the balcony',
      'Utility rooms and service areas needing a permanent drying solution',
      'Anyone combining a cloth hanger installation with grills or nets in one visit',
    ],
    materials: [
      { label: 'Rod material', value: 'SS 316 grade, 25mm dia., rust-proof in coastal humidity' },
      { label: 'Mounting', value: 'Ceiling-mounted brackets or wall-mounted swing-arm, per space' },
      { label: 'System type', value: 'Fixed rods or pulley-operated lift system (raise/lower by rope)' },
      { label: 'Load rating', value: 'Rated for full wet laundry load — typically 15–20 kg per rod' },
      { label: 'Finish', value: 'Brushed natural steel or powder-coated white/black' },
      { label: 'Warranty', value: '5 years on rods against rust, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Frees up the balcony floor',
        body: 'Ceiling-mounted rods keep clothes off the floor and out of the way, so the balcony stays usable as a sitting or storage space.',
      },
      {
        title: 'Pulley system for easy reach',
        body: 'The lift-and-lower pulley option means you hang clothes at waist height and raise them to ceiling level — no stretching or step-stool needed.',
      },
      {
        title: 'SS 316 grade — no rust in Chennai air',
        body: "Coastal humidity rusts painted mild steel rods within a monsoon. SS 316 grade holds up for years without any maintenance.",
      },
      {
        title: 'Installed alongside grills and nets',
        body: 'We fit cloth hangers in the same visit as your grill or net installation — one team, one visit, no coordination needed.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We check the ceiling height, slab type and available space to confirm whether fixed rods or a pulley system suits your balcony better.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per rod, with pulley mechanism cost shown separately so you can choose the system that fits your budget.',
      },
      {
        step: 'Installation',
        body: 'Brackets are anchored into the ceiling slab, rods are fitted and load-tested before we leave. Most balconies: 1–2 hours.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If a bracket works loose or a pulley rope frays within warranty, we come back and fix it free of charge.',
      },
    ],
    faqs: [
      {
        q: 'Can this be fitted on a covered balcony with a false ceiling?',
        a: 'We anchor into the structural slab above the false ceiling — we confirm this is feasible during the survey.',
      },
      {
        q: 'How many rods can fit on a standard Chennai apartment balcony?',
        a: 'Typically 2–4 rods depending on balcony width; we lay this out during survey so you know exactly what fits.',
      },
      {
        q: 'Is the pulley system difficult to operate?',
        a: 'No — a single rope raises and lowers all rods together; most people find it easier than a fixed high rod.',
      },
      {
        q: 'Can this be combined with an invisible grill installation?',
        a: 'Yes, and this is the most common combination — grills on the balcony opening and a cloth hanger on the ceiling, done in one visit.',
      },
      {
        q: 'Will the rods rust in Chennai humidity?',
        a: 'Not with SS 316 grade — the same steel used in marine fittings. Painted MS rods rust; these do not.',
      },
    ],
    relatedSlugs: ['invisible-grills', 'safety-nets', 'pigeon-nets'],
    gallery: [
      { src: '/gallery-new-1.webp', alt: 'gallery new 1' },
      { src: '/gallery-new-3.webp', alt: 'gallery new 3' },
      { src: '/gallery-new-8.webp', alt: 'gallery new 8' },
      { src: '/gallery-new-9.webp', alt: 'gallery new 9' },
      { src: '/gallery-new-10.webp', alt: 'gallery new 10' },
      { src: '/gallery-new-11.webp', alt: 'gallery new 11' },
      { src: '/cloth-hangers-balcony-ceiling-hanger-near-ac-unit.webp', alt: 'cloth hangers balcony ceiling hanger near ac unit' },
      { src: '/cloth-hangers-balcony-hanger-with-clothes-drying.webp', alt: 'cloth hangers balcony hanger with clothes drying' },
      { src: '/cloth-hangers-ceiling-hanger-narrow-balcony.webp', alt: 'cloth hangers ceiling hanger narrow balcony' },
      { src: '/cloth-hangers-ceiling-pulley-hanger-white-balcony.webp', alt: 'cloth hangers ceiling pulley hanger white balcony' },
      { src: '/cloth-hangers-wall-mounted-drying-rack-window.webp', alt: 'cloth hangers wall mounted drying rack window' },
    ],
  },

  // ── 5. Sports Nets ───────────────────────────────────────────────────────
  {
    slug: 'sports-nets',
    name: 'Sports Nets',
    shortName: 'Sports Nets',
    category: 'Sports Nets',
    metaTitle: 'Sports Nets Installation — Cricket, Football & More | Chennai',
    metaDescription:
      'Heavy-duty practice nets for cricket, football and multi-sport use. GI pole frames, ball-stopping mesh. Free site visit — call +91 78100 40329.',
    icon: Target,
    heroTagline: 'Built to take a hard-hit ball, evening after evening, for years.',
    intro: [
      "A sports net gets hit harder and more often than any safety net we install — this is a structural sports installation, not a safety barrier, and it's priced and specified differently. We fit heavy-duty braided HDPE netting on a GI pole frame, sized to the pitch length and height the client needs, for housing society grounds, school playgrounds and sports academies.",
      "Mesh here is chosen for ball-stopping strength — 1–2 inch spacing in a heavier braided twine that holds up to a cricket ball at practice pace over years of daily use. Pole frames are GI pipe, set in concrete footings, sized to the site's wind exposure and net height (typically 10–12 ft). We also fit football goal nets, multi-sport enclosures and terrace ball-stop nets.",
    ],
    bestFor: [
      'Housing societies with open ground wanting a permanent practice net setup',
      'Schools and colleges with a cricket or football coaching program',
      'Sports academies needing multiple practice lanes',
      'Terraces or open plots used informally for practice that need ball containment',
    ],
    materials: [
      { label: 'Net material', value: 'Braided HDPE, 1″–2″ spacing, heavy-duty ball-stopping weave' },
      { label: 'Pole frame', value: 'GI pipe, set in concrete footings, height 10–12 ft standard' },
      { label: 'Side/back coverage', value: 'Full enclosure or single-side, per site requirement' },
      { label: 'Border rope', value: 'Reinforced edge rope stitched to withstand repeated ball impact' },
      { label: 'Warranty', value: '3 years on net material, 5 years on pole frame, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Specified for repeated hard impact',
        body: 'Braided twine and reinforced edge rope are chosen for daily ball strikes over years, not occasional light contact.',
      },
      {
        title: 'Concrete-set pole frame',
        body: 'GI poles are set in concrete footings rather than surface-mounted, so the frame stays rigid under repeated impact and wind.',
      },
      {
        title: 'Sized to your ground, not a fixed kit',
        body: 'Single lane, multi-lane, terrace or open-plot layouts are all surveyed and fitted to the actual space available.',
      },
      {
        title: 'One point of contact for society-scale jobs',
        body: 'For societies and schools ordering multiple lanes, we quote and install the full layout as one job.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure the ground, check for overhead obstructions and confirm how many lanes fit the available space.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per lane, covering poles, footings, and netting as one line item per lane.',
      },
      {
        step: 'Installation',
        body: 'Pole footings are dug and set first and left to cure before netting is fitted and tensioned — larger jobs scheduled over several days.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'We recommend a pre-season tension check; net rope and pole joints are covered under warranty against normal wear.',
      },
    ],
    faqs: [
      {
        q: 'How long do the poles take to set before netting can go up?',
        a: 'Concrete footings typically need 3–4 days to cure before we load-test and fit the netting.',
      },
      {
        q: 'Can this be fitted on a terrace instead of open ground?',
        a: 'Yes, provided the terrace can support pole footings or a suitable base-mounted frame — we confirm this during survey.',
      },
      {
        q: 'What net height do you recommend?',
        a: '10–12 ft is standard for practice nets and stops the ball reliably for most playing levels.',
      },
      {
        q: 'Do you install for schools and academies, not just housing societies?',
        a: 'Yes — schools, colleges and academies are a regular part of this work, often ordering multiple lanes at once.',
      },
      {
        q: 'Does the net need to be taken down before monsoon?',
        a: 'No, the netting and frame are built to stay up year-round; we just recommend a tension check before the season.',
      },
    ],
    relatedSlugs: ['safety-nets', 'pigeon-nets', 'invisible-grills'],
    gallery: [
      { src: '/sports-safety-net-installation.webp', alt: 'sports safety net installation' },
      { src: '/sports-nets-cricket-practice-cage-outdoor.webp', alt: 'sports nets cricket practice cage outdoor' },
      { src: '/sports-nets-cricket-practice-ground-cage.webp', alt: 'sports nets cricket practice ground cage' },
      { src: '/sports-nets-cricket-practice-net-batsman.webp', alt: 'sports nets cricket practice net batsman' },
      { src: '/sports-nets-football-turf-boundary-net.webp', alt: 'sports nets football turf boundary net' },
      { src: '/sports-nets-indoor-cricket-practice-session.webp', alt: 'sports nets indoor cricket practice session' },
      { src: '/sports-nets-indoor-turf-court-enclosure.webp', alt: 'sports nets indoor turf court enclosure' },
      { src: '/sports-nets-outdoor-cricket-practice-cage.webp', alt: 'sports nets outdoor cricket practice cage' },
    ],
  },

  // ── 6. Duct Area Nets ────────────────────────────────────────────────────
  {
    slug: 'duct-area-nets',
    name: 'Duct Area Nets',
    shortName: 'Duct Area Nets',
    category: 'Duct Area Nets',
    metaTitle: 'Duct Area Net Installation | Chennai Apartments | Jemima',
    metaDescription:
      'Rope-access netting for apartment duct and utility shafts where pigeons nest. Safe access, no balcony disruption. Free survey — +91 78100 40329.',
    icon: Wind,
    heroTagline: 'The shaft nobody can reach is exactly where they nest.',
    intro: [
      "Duct areas — the narrow utility shafts running down the side of apartment towers for plumbing and ventilation — are a pigeon's ideal nesting spot precisely because residents can't reach them. No balcony access, no ledge to stand on, so the mess and nesting material build up for years until someone complains about the smell or a blockage.",
      "We fit duct openings using rope access or scaffolding depending on the building's height and shaft width, covering every opening from ground floor to terrace in one pass so pigeons can't simply relocate one floor up. This is typically arranged through the housing society or facility manager.",
    ],
    bestFor: [
      'Housing societies with pigeon nesting or blockages inside duct/utility shafts',
      'Buildings where residents have complained about smell or noise from duct areas',
      'Facility managers doing a building-wide bird-proofing pass',
      'Ducts where nesting material has previously caused a drain blockage',
    ],
    materials: [
      { label: 'Mesh material', value: 'UV-stabilised HDPE, 1.5″ spacing, higher-tension weave' },
      { label: 'Access method', value: 'Rope access or scaffolding, per building height/shaft width' },
      { label: 'Fixing', value: 'SS anchors into shaft wall at each floor opening' },
      { label: 'Coverage', value: 'Every duct opening floor to floor in a single continuous pass' },
      { label: 'Warranty', value: '5 years against UV degradation, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Reaches openings balconies never could',
        body: 'Rope access and scaffolding get our team to shaft openings with no ledge or balcony access — the actual problem area.',
      },
      {
        title: 'One pass covers the whole shaft',
        body: "We net every floor's opening in the same visit so birds can't simply move up or down one level.",
      },
      {
        title: 'Access stays serviceable',
        body: 'Net panels are fitted so plumbers and maintenance staff can still reach pipework — nothing is permanently sealed.',
      },
      {
        title: 'Removes years of built-up nesting material',
        body: 'We clear existing nests and debris as part of the job, which often resolves smell complaints and slow drains.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: "We inspect the shaft from top to bottom, note the access method needed and flag any existing blockage.",
      },
      {
        step: 'Quote to the society/FM',
        body: 'One quote covering the full shaft height, itemised by floor count and access method.',
      },
      {
        step: 'Installation',
        body: 'Trained technicians net every opening floor to floor in a single scheduled pass.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'Annual inspection visits can be arranged with the society to check for wear before the next monsoon.',
      },
    ],
    faqs: [
      {
        q: 'Who normally arranges this — the flat owner or the society?',
        a: 'Almost always the housing society or facility manager, since the duct shaft is common property.',
      },
      {
        q: 'Will this block plumber access to the shaft?',
        a: 'No — panels are fitted to stay serviceable so maintenance staff can still reach pipework.',
      },
      {
        q: 'How long does a full building shaft take?',
        a: 'A typical 12–15 floor tower shaft takes 2–3 days for a full pass.',
      },
      {
        q: 'Does netting the duct reduce bad smell?',
        a: 'Often yes — most of the smell comes from accumulated droppings and nesting material, which we clear during installation.',
      },
    ],
    relatedSlugs: ['pigeon-nets', 'safety-nets', 'construction-nets'],
    gallery: [
      { src: '/pigeon-nets-installer-on-building-facade.webp', alt: 'pigeon nets installer on building facade' },
      { src: '/duct-area-nets-bird-proofing-between-buildings.webp', alt: 'duct area nets bird proofing between buildings' },
      { src: '/duct-area-nets-green-net-between-buildings.webp', alt: 'duct area nets green net between buildings' },
      { src: '/duct-area-nets-green-net-over-shaft-top-view.webp', alt: 'duct area nets green net over shaft top view' },
      { src: '/duct-area-nets-green-net-shaft-enclosure.webp', alt: 'duct area nets green net shaft enclosure' },
      { src: '/duct-area-nets-green-net-shaft-multi-floor.webp', alt: 'duct area nets green net shaft multi floor' },
      { src: '/duct-area-nets-rope-access-installation-high-rise.webp', alt: 'duct area nets rope access installation high rise' },
      { src: '/duct-area-nets-wall-shaft-net-closeup.webp', alt: 'duct area nets wall shaft net closeup' },
      { src: '/duct-area-nets-white-net-box-over-shaft.webp', alt: 'duct area nets white net box over shaft' },
      { src: '/duct-net-installation-2.webp', alt: 'duct net installation 2' },
      { src: '/duct-net-installation-3.webp', alt: 'duct net installation 3' },
      { src: '/duct-net-installation-4.webp', alt: 'duct net installation 4' },
      { src: '/construction-nets-green-net-over-building-structure.webp', alt: 'construction nets green net over building structure' },
    ],
  },

  // ── 7. Staircase Nets ────────────────────────────────────────────────────
  {
    slug: 'staircase-nets',
    name: 'Staircase Safety Nets',
    shortName: 'Staircase Nets',
    category: 'Staircase Nets',
    metaTitle: 'Staircase Safety Nets for Apartments & Villas | Chennai',
    metaDescription:
      'Safety nets for open staircases, duplex landings and stairwell gaps. Child-safe, no-drill options available. Free survey — +91 78100 40329.',
    icon: ArrowUpDown,
    heroTagline: 'The gap between the banister rails is the one nobody thinks to close.',
    intro: [
      "Open staircases in duplexes, villas and apartment common areas have gaps between banister rails that are wide enough for a small child to fall through or get a limb wedged. A staircase safety net is a soft nylon or HDPE mesh fitted along the full length of the banister, closing every gap without blocking the view up or down the stairs.",
      "We also fit staircase nets in apartment building common areas — the open stairwell shaft between floors where objects (and occasionally children) can fall several floors. The same clip-hook, no-drill fixing used in our balcony nets works on most staircase railings, making this a landlord-friendly option for rented properties.",
    ],
    bestFor: [
      'Duplex homes and villas with open staircases and young children',
      'Apartment common stairwells where the shaft is open between floors',
      'Rented properties where drilling into the banister is not allowed',
      'Elderly family members who need a visual and physical barrier on open stairs',
    ],
    materials: [
      { label: 'Mesh material', value: 'Soft nylon or HDPE, 2″ spacing, smooth finish' },
      { label: 'Fixing', value: 'Clip hooks on banister rails (no-drill) or SS anchors into wall' },
      { label: 'Coverage', value: 'Full banister length, floor to ceiling on open stairwells' },
      { label: 'Colour', value: 'White, black or transparent to match staircase finish' },
      { label: 'Warranty', value: '3 years on net material, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Closes the exact gap children use',
        body: '2-inch mesh spacing is tight enough that a small child cannot push through or get a limb wedged between banister rails.',
      },
      {
        title: 'No-drill option for rented homes',
        body: 'Clip-hook fixing attaches to the banister without drilling — approved by most landlords and removable when you move.',
      },
      {
        title: 'Works on curved and spiral staircases',
        body: 'Net panels are cut and fitted to the exact shape of your staircase — straight, curved or spiral.',
      },
      {
        title: 'Covers common stairwells too',
        body: 'Apartment building stairwells with open shafts between floors are a common request — we cover the full height in one visit.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We measure the banister length, check rail spacing and confirm whether clip-hook or anchor fixing suits your staircase.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per running metre of banister, with fixing type shown separately.',
      },
      {
        step: 'Installation',
        body: 'Net is clipped or anchored taut along the full banister and hand-tested for give before we leave.',
      },
      {
        step: 'Warranty & aftercare',
        body: 'If a clip works loose or a section sags within warranty, we come back and re-fix free of charge.',
      },
    ],
    faqs: [
      {
        q: 'Can this be fitted on a spiral staircase?',
        a: 'Yes — we cut and fit net panels to the exact curve of your staircase.',
      },
      {
        q: 'Will it look ugly on my staircase?',
        a: 'Fine mesh in a matching colour is nearly invisible from a normal viewing distance — most visitors do not notice it.',
      },
      {
        q: 'Can I remove it if I move out?',
        a: 'Yes — clip-hook fixing unclips cleanly without marking the banister.',
      },
      {
        q: 'Do you cover apartment common stairwells?',
        a: 'Yes — open stairwell shafts in apartment buildings are one of the most common requests for this service.',
      },
    ],
    relatedSlugs: ['safety-nets', 'invisible-grills', 'duct-area-nets'],
    gallery: [
      { src: '/gallery-new-2.webp', alt: 'gallery new 2' },
      { src: '/gallery-new-4.webp', alt: 'gallery new 4' },
      { src: '/gallery-new-5.webp', alt: 'gallery new 5' },
      { src: '/gallery-new-7.webp', alt: 'gallery new 7' },
    ],
  },

  // ── 8. Construction Nets ─────────────────────────────────────────────────
  {
    slug: 'construction-nets',
    name: 'Construction Safety Nets',
    shortName: 'Construction Nets',
    category: 'Construction Nets',
    metaTitle: 'Construction Safety Nets for Buildings & Sites | Chennai',
    metaDescription:
      'Heavy-duty debris and fall-arrest nets for construction sites, building facades and renovation work. Free survey — call +91 78100 40329.',
    icon: HardHat,
    heroTagline: 'What falls on a construction site should not land on someone below.',
    intro: [
      "Construction safety nets are a mandatory requirement on most building sites — they catch falling debris, tools and materials before they reach workers or pedestrians below. We supply and install heavy-duty knotted HDPE nets on building facades, scaffolding frames and open floor edges for new construction, renovation and demolition projects.",
      "These are a different specification from residential safety nets — heavier mesh, higher breaking strength, and fitted to comply with construction site safety standards. We work with builders, contractors and housing societies doing major renovation work across Chennai and pan-India.",
    ],
    bestFor: [
      'New construction buildings needing facade debris nets',
      'Renovation and demolition projects with open floor edges',
      'Housing societies doing external painting or waterproofing work',
      'Contractors needing compliant fall-arrest netting for scaffolding',
    ],
    materials: [
      { label: 'Net material', value: 'Heavy-duty knotted HDPE, high breaking strength' },
      { label: 'Mesh size', value: '25mm–50mm depending on debris type and site requirement' },
      { label: 'Fixing', value: 'Rope lashing to scaffolding or SS anchors into structure' },
      { label: 'Standards', value: 'Fitted to construction site safety requirements' },
      { label: 'Warranty', value: '2 years on net material, 1 year on installation' },
    ],
    benefits: [
      {
        title: 'Catches debris before it reaches ground level',
        body: 'Heavy-duty mesh stops falling tools, bricks and material from reaching workers or pedestrians below the work zone.',
      },
      {
        title: 'Covers full facade in one pass',
        body: 'We net the entire building face or floor edge in a single scheduled visit — no piecemeal coverage that leaves gaps.',
      },
      {
        title: 'Removable after project completion',
        body: 'Nets are lashed rather than permanently fixed, so they come down cleanly when the project is done.',
      },
      {
        title: 'Works alongside scaffolding',
        body: 'Nets are fitted to existing scaffolding frames — no separate structure needed.',
      },
    ],
    process: [
      {
        step: 'Site survey',
        body: 'We assess the building height, scaffolding type and coverage area needed.',
      },
      {
        step: 'Quote same day',
        body: 'Priced per square metre of coverage, with access method and fixing type itemised.',
      },
      {
        step: 'Installation',
        body: 'Nets are lashed to scaffolding or anchored to the structure and tensioned across the full coverage area.',
      },
      {
        step: 'Removal & aftercare',
        body: 'We remove nets at project completion and can re-use them on your next site if needed.',
      },
    ],
    faqs: [
      {
        q: 'Do you supply nets for ongoing construction projects?',
        a: 'Yes — we work with builders and contractors for the full duration of a project, not just a one-time install.',
      },
      {
        q: 'Can nets be fitted without scaffolding already in place?',
        a: 'We can use rope access for some situations, but scaffolding is the standard base for construction nets.',
      },
      {
        q: 'Do you cover renovation projects, not just new builds?',
        a: 'Yes — external painting, waterproofing and facade repair are common requests for construction nets.',
      },
      {
        q: 'How quickly can you mobilise for an urgent site requirement?',
        a: 'For Chennai sites, we can usually survey and quote within 24 hours and start installation within 2–3 days.',
      },
    ],
    relatedSlugs: ['duct-area-nets', 'sports-nets', 'safety-nets'],
    gallery: [
      { src: '/construction-nets-industrial-roof-net.webp', alt: 'construction nets industrial roof net' },
      { src: '/construction-nets-industrial-shed-roof-net.webp', alt: 'construction nets industrial shed roof net' },
      { src: '/construction-nets-scaffolding-green-net-facade.webp', alt: 'construction nets scaffolding green net facade' },
      { src: '/construction-nets-warehouse-open-side-net.webp', alt: 'construction nets warehouse open side net' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const grillServices = services.filter((s) => s.category === 'Invisible Grills')
export const netServices = services.filter(
  (s) => s.category === 'Safety Nets' || s.category === 'Pigeon Nets' || s.category === 'Duct Area Nets' || s.category === 'Staircase Nets' || s.category === 'Construction Nets',
)
