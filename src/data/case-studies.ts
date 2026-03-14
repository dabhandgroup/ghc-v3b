export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  urlDisplay: string;
  heroImage: string;
  logo?: string;
  aboutTitle: string;
  about: string;
  stats: { value: string; label: string; color: string }[];
  challenge: string;
  solution: string;
  images: { src: string; alt: string }[];
  outcomes: string[];
  techStack: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  profiles: {
    slug: "profiles",
    title: "The world\u2019s largest\ncontact intelligence\nplatform.",
    subtitle: "Data Intelligence \u00b7 Case Study",
    category: "Data Intelligence",
    url: "https://www.profiles.io",
    urlDisplay: "www.profiles.io",
    heroImage: "/images/profiles.jpg",
    logo: "/images/logos/profiles.svg",
    aboutTitle: "About Profiles",
    about: "Profiles.io is the world\u2019s largest B2B contact and company intelligence platform, with over 500 million records across every major industry and geography. Built from the ground up by GHC, it gives sales teams, recruiters, investors, and researchers the ability to find, verify, and contact anyone \u2014 instantly.",
    stats: [
      { value: "500M+", label: "Data records", color: "#2563eb" },
      { value: "190+", label: "Countries", color: "#2563eb" },
      { value: "<0.5s", label: "Query speed", color: "#2563eb" },
      { value: "94%", label: "Data accuracy", color: "#2563eb" },
    ],
    challenge: "The contact data industry was dominated by expensive, stale, and fragmented databases. Sales teams were wasting hours manually researching prospects. Existing tools were either too expensive for SMBs or too limited for enterprise. There was no single platform that combined global scale, AI-powered search, and real-time enrichment.",
    solution: "We built Profiles.io as a vertically integrated data platform: acquiring, cleaning, enriching, and serving 500M+ records at sub-second query speeds. The platform uses proprietary AI to match, deduplicate, and enrich records in real-time \u2014 giving users not just data, but intelligence.",
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop", alt: "Profiles screenshot 1" },
      { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&fit=crop", alt: "Profiles screenshot 2" },
    ],
    outcomes: [
      "Became the largest contact intelligence database globally by record count",
      "Achieved 94% email deliverability across verified B2B contacts",
      "Reduced average prospect research time from 45 minutes to under 60 seconds",
      "Trusted by 10,000+ companies across sales, recruiting, and market intelligence",
    ],
    techStack: ["Node.js", "PostgreSQL", "Elasticsearch", "Redis", "Python ML Pipeline", "AWS", "OpenAI API", "React"],
  },
  wardrobe: {
    slug: "wardrobe",
    title: "Fashion rental,\nreimagined from\nfirst principles.",
    subtitle: "Fashion Tech \u00b7 Case Study",
    category: "Fashion Tech",
    url: "https://www.wardrobe.app",
    urlDisplay: "www.wardrobe.app",
    heroImage: "/images/wardrobe.jpg",
    logo: "/images/logos/wardrobe.svg",
    aboutTitle: "About Wardrobe",
    about: "Wardrobe is the world\u2019s first peer-to-peer fashion rental marketplace, built to make the global fashion economy circular, accessible, and purposeful. Users rent pieces directly from other users\u2019 wardrobes \u2014 turning idle clothing into income, and making high-fashion accessible to everyone.",
    stats: [
      { value: "1st", label: "P2P fashion rental globally", color: "#2563eb" },
      { value: "50K+", label: "Items listed", color: "#2563eb" },
      { value: "4.9\u2605", label: "Average review", color: "#2563eb" },
      { value: "62%", label: "Avg ROI for lenders", color: "#2563eb" },
    ],
    challenge: "The fashion industry is one of the world\u2019s most polluting industries. Fast fashion incentivises overconsumption while luxury fashion remains inaccessible to most. Existing rental services relied on centralised, curated inventories \u2014 limiting scale, variety, and accessibility. The peer-to-peer model had never been successfully applied to fashion at scale.",
    solution: "We built Wardrobe as a trust-first marketplace with end-to-end logistics integration, dynamic pricing, and an AI-powered sizing and matching engine. The platform handles the complexity of P2P fashion: insurance, authentication, dry cleaning, shipping, and dispute resolution \u2014 all invisibly.",
    images: [
      { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&fit=crop", alt: "Wardrobe screenshot 1" },
      { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80&fit=crop", alt: "Wardrobe screenshot 2" },
    ],
    outcomes: [
      "Launched the world\u2019s first peer-to-peer fashion rental marketplace",
      "Average lender earns 62% ROI on high-fashion items in first year",
      "Reduced fashion purchase intent among active users by 38%",
      "Built the largest authenticated fashion rental catalogue in the Southern Hemisphere",
    ],
    techStack: ["Next.js", "Node.js", "Stripe Connect", "PostgreSQL", "Algolia", "AWS", "Shippit API", "React Native"],
  },
  royale: {
    slug: "royale",
    title: "Online gaming,\nrebuilt for the\nnext generation.",
    subtitle: "Online Gaming \u00b7 Case Study",
    category: "Online Gaming",
    url: "https://www.royale.us",
    urlDisplay: "www.royale.us",
    heroImage: "/images/royale-world.jpg",
    logo: "/images/logos/royale.svg",
    aboutTitle: "About Royale",
    about: "Royale is a next-generation online gaming and casino platform, built from the ground up with provable fairness, beautiful design, and an experience standard that makes incumbents look dated. It combines real-money gaming, sports, and esports in a single, elegantly designed platform.",
    stats: [
      { value: "<100ms", label: "Game response time", color: "#2563eb" },
      { value: "99.98%", label: "Platform uptime", color: "#2563eb" },
      { value: "200+", label: "Games at launch", color: "#2563eb" },
      { value: "4.8\u2605", label: "App Store rating", color: "#2563eb" },
    ],
    challenge: "The online gaming industry is dominated by clunky, visually outdated platforms with poor mobile experiences and no transparency around game fairness. Younger audiences expect the same level of design and UX they get from consumer apps like Spotify or Apple \u2014 and existing gaming platforms were failing them.",
    solution: "We built Royale with design and transparency as first principles. Every game uses provably fair RNG, every outcome is verifiable on-chain, and the UX rivals the best consumer apps in the world. The platform is mobile-first, sub-100ms in response time, and built for global audiences.",
    images: [
      { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&fit=crop", alt: "Royale screenshot 1" },
      { src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80&fit=crop", alt: "Royale screenshot 2" },
    ],
    outcomes: [
      "Achieved 99.98% uptime across first 12 months of operation",
      "Sub-100ms game response times across global server infrastructure",
      "Provable fairness implemented across 100% of RNG-based games",
      "Industry-leading mobile experience with 4.8 App Store rating at launch",
    ],
    techStack: ["Next.js", "WebSockets", "Redis", "PostgreSQL", "Solidity (RNG verification)", "Node.js", "React Native", "AWS Global Accelerator"],
  },
  greatgaming: {
    slug: "greatgaming",
    title: "A live casino studio\nbuilt for the\nbiggest platforms.",
    subtitle: "Live Casino Studio \u00b7 Case Study",
    category: "Live Casino Studio",
    url: "https://www.greatgaming.com",
    urlDisplay: "www.greatgaming.com",
    heroImage: "/images/gaming.jpg",
    logo: "/images/logos/greatgaming.svg",
    aboutTitle: "About GreatGaming",
    about: "GreatGaming is a full-stack live dealer and casino games studio operating from Collingwood, Melbourne. We develop, produce, and distribute live casino content to the world\u2019s largest online gaming operators. Our studio handles everything: game design, technology, production, talent, and distribution.",
    stats: [
      { value: "24/7", label: "Live studio operation", color: "#2563eb" },
      { value: "50ms", label: "Stream latency", color: "#2563eb" },
      { value: "30+", label: "Game titles", color: "#2563eb" },
      { value: "99.99%", label: "Stream uptime", color: "#2563eb" },
    ],
    challenge: "The live dealer market was controlled by a small number of European incumbents who set both the technology and quality standard. B2B gaming operators wanting to offer live content had limited, expensive options with long integration timelines. There was a clear gap for a technically superior, design-led studio with modern content distribution infrastructure.",
    solution: "We built GreatGaming as a vertically integrated studio: owning the IP, the technology, the production infrastructure, and the distribution pipeline. Our Collingwood studio runs 24/7 with broadcast-grade production, custom game engines, and an API-first distribution platform that integrates with any operator in days, not months.",
    images: [
      { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&fit=crop", alt: "GreatGaming screenshot 1" },
      { src: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80&fit=crop", alt: "GreatGaming screenshot 2" },
    ],
    outcomes: [
      "Launched Australia\u2019s first fully licensed live casino production studio",
      "Achieved 50ms end-to-end stream latency \u2014 best in class globally",
      "99.99% uptime across all live game streams in year one",
      "Integrated with 15+ tier-1 gaming operators globally within 12 months",
    ],
    techStack: ["WebRTC", "Node.js", "React", "FFmpeg", "AWS MediaLive", "PostgreSQL", "Redis", "Custom Game Engine (C++)"],
  },
  platformone: {
    slug: "platformone",
    title: "Melbourne\u2019s premier\nnightclub, rebuilt\nfrom the ground up.",
    subtitle: "Entertainment & Nightlife \u00b7 Case Study",
    category: "Entertainment & Nightlife",
    url: "https://www.platformone.com.au",
    urlDisplay: "www.platformone.com.au",
    heroImage: "/images/platform-1.jpg",
    logo: "/images/logos/platformone-white.png",
    aboutTitle: "About Platform One",
    about: "Platform One is Melbourne\u2019s premier nightclub and entertainment venue, housed in the historic 1891 Banana Alley vaults beneath Flinders Street Station. Reopened in 2022 under GHC, it combines heritage architecture with world-class production \u2014 three distinct rooms, a custom sound system, and a tech-driven operations stack that powers everything from ticketing to crowd analytics. It\u2019s hosted international acts including Nelly, Kid Ink, and more, with signature nights like KaotiK Fridays and Caramel Sundays drawing Melbourne\u2019s biggest crowds.",
    stats: [
      { value: "680+", label: "Venue capacity", color: "#2563eb" },
      { value: "3", label: "Distinct rooms", color: "#2563eb" },
      { value: "1891", label: "Heritage-listed building", color: "#2563eb" },
      { value: "Fri\u2013Sun", label: "Weekly operation", color: "#2563eb" },
    ],
    challenge: "Melbourne\u2019s nightlife scene was saturated with generic venues offering the same tired formula. The historic Banana Alley vaults \u2014 one of Melbourne\u2019s most unique architectural spaces \u2014 sat underutilised. There was a clear opportunity to build a premium, technology-forward nightclub that combined heritage character with world-class production and a modern operations stack.",
    solution: "We took the heritage-listed vaults and transformed them into a three-room entertainment complex: the 500-capacity Main Room with broadcast-grade lighting and custom sound, the intimate Back Room with its own bar and DJ booth, and the Gold Room for VIP experiences. Every aspect is tech-driven \u2014 custom ticketing, real-time crowd analytics, automated marketing funnels, and LED production systems that rival international concert venues.",
    images: [
      { src: "https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp", alt: "Platform One nightclub interior" },
      { src: "https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp", alt: "Platform One event night" },
    ],
    outcomes: [
      "Became one of Melbourne\u2019s top-rated nightlife destinations within 12 months of reopening",
      "Custom ticketing and marketing platform reduced no-show rates by 34%",
      "Hosted international artists including Nelly, Kid Ink, and 50+ headline acts",
      "Three signature event series drawing consistent sell-out crowds every weekend",
    ],
    techStack: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis", "AWS", "React Native", "Custom LED/Lighting Control"],
  },
};
