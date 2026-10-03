/* ------------------------------------------------------------------
 * REAL — verified from foontro.com (2026-10-02). Never invent.
 * DEMO — seeded for the playable deck; UI labels it as seeded.
 * ------------------------------------------------------------------ */

export const REAL = {
  tagline: "India's Most Verified Freelance Marketplace",
  creators: "5,000+",
  creatorsNote: "Loved by 5,000+ creators and teams",
  acceptanceRate: "21%",
  acceptanceNote: "Only 21% of freelancer applications are approved",
  finalCta: "You found it. India's FRESHEST freelance marketplace.",
  finalCtaSub:
    "Browse thousands of verified services. Order in minutes. Chat, collaborate, and pay only when the work is done right.",
  streakNote: "Login Streaks are live — earn metallic frames & boost search visibility",
};

export const valueProps = {
  headline: "We didn't build another freelance platform. WE FIXED ONE.",
  sub: "Verified talent, escrow protection, and a clear project flow built for real outcomes.",
  cards: [
    {
      title: "Verified talent, not random profiles",
      copy: "Every freelancer is surfaced with a practical profile so clients can move faster with more confidence.",
    },
    {
      title: "Escrow keeps the payment safe",
      copy: "Funds stay protected until the work is delivered and approved, giving both sides a clear path to completion.",
    },
    {
      title: "Quality work with real accountability",
      copy: "Clear briefs, direct chat, and structured approvals reduce friction and keep work moving.",
    },
    {
      title: "Simple pricing, no surprise fees",
      copy: "Projects stay transparent from the start, so teams can budget and scope with confidence.",
    },
  ],
};

export const realFlow = [
  {
    n: "01",
    title: "Browse",
    copy: "Browse verified services and find the right fit fast.",
    points: ["Smart search filters", "Curated service cards"],
  },
  {
    n: "02",
    title: "Order",
    copy: "Place your order in minutes. Your payment stays protected.",
    points: ["Clear deliverables", "Secure checkout"],
  },
  {
    n: "03",
    title: "Chat",
    copy: "Chat, revise, and approve in one shared thread.",
    points: ["Central chat thread", "Revision updates"],
  },
  {
    n: "04",
    title: "Approve & Pay",
    copy: "Release payment only when the work is right.",
    points: ["Final review", "Escrow release"],
  },
];

export const escrowQuotes = {
  how: "When you place an order, your payment goes into Foontro, it does not reach the freelancer yet. The freelancer completes the work and delivers it to you through the platform. You review the delivery. Once you approve it, the payment is released to the freelancer.",
  safety:
    "Foontro uses a secure escrow model specifically designed to protect both clients and freelancers. As a client, your money is held safely and only released when you approve the delivery, you never pay and hope. As a freelancer, you are protected from clients who receive work and refuse to pay. Neither side can be cheated.",
  refunds:
    "If a freelancer fails to deliver the work within the agreed timeline or the delivery does not match what was discussed, you can raise a dispute. Foontro's team will review the case and, if the claim is valid, your payment will be refunded.",
  methods:
    "Foontro supports all major Indian payment methods, including UPI, debit and credit cards, and net banking. All transactions are processed securely through a secure payment gateway.",
  verification:
    "Every freelancer application is manually reviewed by the Foontro team, not by an algorithm. We assess portfolio quality, work samples, pricing clarity, and review an intro video for professionalism. Only 21% of applicants are approved — 4 in 5 are turned away.",
  what: "Foontro is India's most verified freelance marketplace, helping startups and small businesses hire trusted creative and digital talent without the usual risk. We're based in India and built specifically for the Indian market, with escrow-protected payments, verified freelancers, and direct chat built into every project.",
};

export const pricing = {
  freelancerPlans: [
    {
      name: "Basic",
      price: "Free",
      tag: "Default",
      rows: ["10% platform commission", "Charged on every completed order payout", "Verified freelancer profile"],
    },
    {
      name: "Foontro Pro",
      price: "₹499",
      tag: "Recommended",
      rows: [
        "Keep 100% of your service price payout",
        "Priority ranking boost",
        "Premium gold profile frame",
        "Foontro Pro verified badge",
      ],
      footnote: "Renews every 30 days · cancel anytime",
    },
  ],
  clientNote:
    "Browsing and signing up are free for everyone. Foontro charges a platform commission on completed orders — significantly lower than global platforms — shown transparently at checkout before you confirm. No hidden fees, no monthly subscriptions.",
};

export const faqs = [
  { q: "What is Foontro?", a: escrowQuotes.what },
  {
    q: "Is Foontro free to use?",
    a: "Yes — browsing and signing up are free for everyone. Foontro charges a platform commission on completed orders, significantly lower than global platforms, and the exact commission is shown transparently at checkout before you confirm any order. No hidden fees, no monthly subscriptions.",
  },
  { q: "How does the escrow payment work?", a: escrowQuotes.how },
  { q: "What if the work isn't delivered as promised?", a: escrowQuotes.refunds },
  { q: "How are freelancers verified?", a: escrowQuotes.verification },
  { q: "Which payment methods are supported?", a: escrowQuotes.methods },
];

export const categories = [
  { title: "Web & App Development", slug: "web-app-development" },
  { title: "Design & Creative", slug: "design-creative" },
  { title: "Logo", slug: "logo-design" },
  { title: "Copywriting", slug: "content-copywriting" },
  { title: "Digital Marketing & SEO", slug: "digital-marketing-seo" },
  { title: "Video & Animation Reels", slug: "video-animation-reels" },
  { title: "Data & Analytics Dashboards", slug: "data-analytics-dashboards" },
  { title: "Voice & Audio Voiceovers", slug: "voice-audio-voiceovers" },
  { title: "E-commerce & Shopify Store", slug: "ecommerce-shopify" },
];

/* Real trending public listings (names, taglines, prices from foontro.com).
   Avatars below are illustrated placeholders, NOT the real people. */
export const trendingServices = [
  {
    name: "Shubhi Chouksey",
    tagline: "I help brands create engaging UGC videos and short-form content",
    price: "₹1,200",
    badge: "#1 Trending",
    meta: "UGC video · short-form content",
  },
  {
    name: "Irva Jobanputra",
    tagline: "I help brands with short form content and voiceover",
    price: "₹6,000",
    badge: "Foontro's Pick",
    meta: "Short-form content · voiceover",
  },
  {
    name: "Rehan Shahid",
    tagline: "I help brands create engaging UGC & reel content",
    price: "₹800",
    badge: "★ 5.0 rated",
    meta: "UGC · reels",
  },
];

export const footerCols = [
  {
    title: "For Clients",
    links: ["How to hire", "Explore talent", "How we work"],
  },
  {
    title: "For Freelancers",
    links: ["How to create a service", "How we work", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Refunds", "Escrow policy"],
  },
];

/* ------------------------------------------------------------------
 * DEMO — seeded swipe-deck data. Fictional people and gigs, generated
 * geometric avatars. The UI labels this deck as seeded demo data.
 * ------------------------------------------------------------------ */

export type DeckFreelancer = {
  id: string;
  name: string;
  role: string;
  rate: string;
  rating: string;
  orders: number;
  streak: number;
  tier: "gold" | "silver" | "bronze" | null;
  tags: string[];
  line: string;
  seed: number;
};

export const deckFreelancers: DeckFreelancer[] = [
  { id: "f1", name: "Aarav Mehta", role: "Brand Identity Designer", rate: "₹2,400", rating: "4.9", orders: 132, streak: 41, tier: "gold", tags: ["Logo", "Brand kits"], line: "Marks that survive the scroll.", seed: 11 },
  { id: "f2", name: "Diya Nair", role: "Motion Designer", rate: "₹3,800", rating: "5.0", orders: 98, streak: 27, tier: "silver", tags: ["Reels", "UGC ads"], line: "Three seconds is all I need.", seed: 23 },
  { id: "f3", name: "Kabir Rao", role: "Next.js Developer", rate: "₹4,500", rating: "4.8", orders: 76, streak: 19, tier: "bronze", tags: ["Web apps", "APIs"], line: "Ships on Fridays, too.", seed: 37 },
  { id: "f4", name: "Anaya Iyer", role: "SEO Content Writer", rate: "₹1,600", rating: "4.9", orders: 210, streak: 58, tier: "gold", tags: ["Blogs", "Landing pages"], line: "Rankings are a byproduct of clarity.", seed: 41 },
  { id: "f5", name: "Vivaan Shah", role: "Voiceover Artist", rate: "₹2,000", rating: "4.7", orders: 64, streak: 12, tier: null, tags: ["Hindi", "English"], line: "A voice your brand can own.", seed: 53 },
  { id: "f6", name: "Ishita Bose", role: "Shopify Developer", rate: "₹5,200", rating: "5.0", orders: 54, streak: 33, tier: "silver", tags: ["Stores", "CRO"], line: "Checkout flows that don't leak.", seed: 67 },
  { id: "f7", name: "Arjun Pillai", role: "Data Dashboard Builder", rate: "₹3,200", rating: "4.8", orders: 47, streak: 9, tier: null, tags: ["Analytics", "SQL"], line: "Numbers you can actually act on.", seed: 79 },
  { id: "f8", name: "Myra Kapoor", role: "Short-form Video Editor", rate: "₹1,800", rating: "4.9", orders: 143, streak: 45, tier: "gold", tags: ["Reels", "Captions"], line: "Retention graphs that go up and right.", seed: 97 },
];

export type DeckGig = {
  id: string;
  title: string;
  budget: string;
  client: string;
  category: string;
  delivery: string;
  line: string;
  seed: number;
};

export const deckGigs: DeckGig[] = [
  { id: "g1", title: "Launch landing page for D2C skincare", budget: "₹18,000", client: "D2C startup · Mumbai", category: "Web & App Development", delivery: "7 days", line: "Figma ready. Needs build + CMS.", seed: 13 },
  { id: "g2", title: "30-day reel pack for cloud kitchen", budget: "₹12,500", client: "Cloud kitchen · Bengaluru", category: "Video & Animation Reels", delivery: "30 days", line: "12 reels, hooks provided.", seed: 29 },
  { id: "g3", title: "Logo + mini brand kit for fintech", budget: "₹9,000", client: "Fintech · Gurugram", category: "Logo", delivery: "5 days", line: "Serious but not boring.", seed: 43 },
  { id: "g4", title: "SEO blog engine: 8 posts/month", budget: "₹14,000", client: "SaaS · Pune", category: "Copywriting", delivery: "Ongoing", line: "Briefs + keywords supplied.", seed: 59 },
  { id: "g5", title: "Hindi voiceover for explainer", budget: "₹4,500", client: "Edtech · Delhi", category: "Voice & Audio Voiceovers", delivery: "3 days", line: "90 seconds, warm tone.", seed: 71 },
  { id: "g6", title: "Shopify speed + CRO audit", budget: "₹11,000", client: "Fashion label · Jaipur", category: "E-commerce & Shopify Store", delivery: "4 days", line: "LCP under 2.5s or we talk.", seed: 83 },
  { id: "g7", title: "Founder-led LinkedIn ghostwriting", budget: "₹16,000", client: "Agency · Kolkata", category: "Digital Marketing & SEO", delivery: "Ongoing", line: "3 posts/week, zero cringe.", seed: 101 },
  { id: "g8", title: "Sales dashboard in Next.js", budget: "₹22,000", client: "Logistics · Chennai", category: "Data & Analytics Dashboards", delivery: "10 days", line: "Postgres is already humming.", seed: 113 },
];
