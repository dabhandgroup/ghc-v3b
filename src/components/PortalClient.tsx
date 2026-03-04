"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import LogoFull from "./LogoFull";
import LogoIcon from "./LogoIcon";
import CustomSelect from "./CustomSelect";
import DarkModeToggle from "./DarkModeToggle";

/* ───────── article data ───────── */
interface Article {
  id: string;
  category: string;
  title: string;
  date: string;
  featured?: boolean;
  excerpt: string;
  body: string;
}

/* ───────── kanban types ───────── */
type KanbanStatus = "backlog" | "in_progress" | "review" | "done";

interface KanbanCard {
  id: string;
  title: string;
  description: string;
  status: KanbanStatus;
  product: string;
  productColor: string;
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
}

const kanbanColumns: { id: KanbanStatus; label: string }[] = [
  { id: "backlog", label: "Backlog" },
  { id: "in_progress", label: "In Progress" },
  { id: "review", label: "Review" },
  { id: "done", label: "Done" },
];

const initialKanbanCards: KanbanCard[] = [
  {
    id: "k1",
    title: "Profiles.io — Intelligence Module v2",
    description: "Build the next-gen data intelligence pipeline for enriched record scoring and real-time entity resolution.",
    status: "in_progress",
    product: "Profiles.io",
    productColor: "#6b9fff",
    priority: "high",
    assignee: "Engineering",
    dueDate: "Mar 2026",
  },
  {
    id: "k2",
    title: "Wardrobe — APAC Expansion (TH / MY)",
    description: "Localise Wardrobe for Thailand and Malaysia markets. Includes payment integration, language packs, and partner onboarding.",
    status: "in_progress",
    product: "Wardrobe",
    productColor: "#f472b6",
    priority: "high",
    assignee: "Growth",
    dueDate: "Apr 2026",
  },
  {
    id: "k3",
    title: "Royale — Tournament SDK",
    description: "Open-source the tournament orchestration SDK so third-party operators can plug into the Royale infrastructure.",
    status: "backlog",
    product: "Royale",
    productColor: "#fbbf24",
    priority: "medium",
    assignee: "Platform",
    dueDate: "Q2 2026",
  },
  {
    id: "k4",
    title: "GreatGaming — Content Pipeline Automation",
    description: "Automate the editorial and distribution pipeline for gaming content. Reduce time-to-publish from 48h to under 4h.",
    status: "review",
    product: "GreatGaming",
    productColor: "#34d399",
    priority: "medium",
    assignee: "Content Ops",
    dueDate: "Mar 2026",
  },
  {
    id: "k5",
    title: "Profiles.io — 1B Records Milestone",
    description: "Scale the data marketplace to 1 billion enriched records. Requires infrastructure upgrades and new data-partner integrations.",
    status: "backlog",
    product: "Profiles.io",
    productColor: "#6b9fff",
    priority: "high",
    assignee: "Data Eng",
    dueDate: "Q3 2026",
  },
  {
    id: "k6",
    title: "Wardrobe — AI Styling Engine v3",
    description: "Train next-generation outfit recommendation model on 2M+ labelled outfits. Improve match accuracy to >92%.",
    status: "backlog",
    product: "Wardrobe",
    productColor: "#f472b6",
    priority: "medium",
    assignee: "ML Team",
    dueDate: "Q2 2026",
  },
  {
    id: "k7",
    title: "Series A — Investor Materials Refresh",
    description: "Update pitch deck, financial model, and data room documents ahead of the Series A roadshow.",
    status: "done",
    product: "Corporate",
    productColor: "#a78bfa",
    priority: "high",
    assignee: "Finance",
  },
  {
    id: "k8",
    title: "Royale — 99.99% Uptime Target",
    description: "Migrate critical services to multi-region deployment. Implement auto-failover and chaos testing suite.",
    status: "in_progress",
    product: "Royale",
    productColor: "#fbbf24",
    priority: "high",
    assignee: "SRE",
    dueDate: "Mar 2026",
  },
  {
    id: "k9",
    title: "GreatGaming — Tier-2 Operator Deals",
    description: "Close distribution agreements with 5 additional tier-2 operators across SEA and ANZ regions.",
    status: "review",
    product: "GreatGaming",
    productColor: "#34d399",
    priority: "medium",
    assignee: "Partnerships",
    dueDate: "Apr 2026",
  },
  {
    id: "k10",
    title: "Portal — Investor NPS & Feedback Module",
    description: "Add quarterly NPS survey and open feedback form directly in the investor portal.",
    status: "backlog",
    product: "Corporate",
    productColor: "#a78bfa",
    priority: "low",
    assignee: "Product",
    dueDate: "Q2 2026",
  },
];

const articles: Article[] = [
  {
    id: "q4",
    category: "Quarterly Update",
    title:
      "Q4 2024 Portfolio Update: Record revenue quarter and 2025 roadmap preview.",
    date: "18 Feb 2025",
    featured: true,
    excerpt:
      "Portfolio ARR crossed $12\u2009M in Q4 2024, making it the strongest quarter since inception. This briefing covers financial highlights, product milestones across all four verticals, and an early look at 2025 priorities.",
    body: `<h3>Overview</h3>
<p>Portfolio ARR crossed <strong>$12\u2009M</strong> in Q4 2024, making it the strongest quarter since inception. This briefing covers financial highlights, product milestones across all four verticals, and an early look at 2025 priorities.</p>

<h3>Financial Highlights</h3>
<ul>
<li><strong>ARR:</strong> $12.2\u2009M \u2014 up 34% quarter-over-quarter</li>
<li><strong>Gross margin:</strong> 72%, improving from 68% in Q3</li>
<li><strong>Burn rate:</strong> $380\u2009K / month (down from $420\u2009K)</li>
<li><strong>Runway:</strong> 28 months at current burn</li>
</ul>

<h3>Product Milestones</h3>
<ul>
<li><strong>Profiles.io</strong> \u2014 surpassed 500\u2009M enriched records in the data marketplace</li>
<li><strong>Wardrobe</strong> \u2014 launched in Singapore and Hong Kong, December 2024</li>
<li><strong>Royale</strong> \u2014 achieved 99.98% platform uptime across Q4</li>
<li><strong>GreatGaming</strong> \u2014 signed distribution agreements with 3 tier-1 operators</li>
</ul>

<h3>2025 Priorities</h3>
<p>The executive team has outlined three company-wide priorities for the year: (1) accelerate Profiles.io toward 1\u2009B records and launch the Intelligence module, (2) expand Wardrobe into two additional APAC markets, and (3) close the Series\u00a0A to fund sales expansion and regulatory licensing.</p>

<h3>Next Briefing</h3>
<p>The Q1 2025 portfolio update is scheduled for the week of 21\u00a0April\u00a02025. Ad-hoc product briefings will continue on a rolling basis.</p>`,
  },
  {
    id: "profiles",
    category: "Product Update",
    title: "Profiles.io hits 500M records. What it means and what\u2019s next.",
    date: "14 Jan 2025",
    excerpt:
      "In January 2025 Profiles.io crossed 500\u2009million enriched person-records in its data marketplace \u2014 a 3.2\u00d7 increase from 155\u2009M at end of Q2 2024.",
    body: `<h3>The Milestone</h3>
<p>In January 2025 Profiles.io crossed 500\u2009million enriched person-records in its data marketplace \u2014 a 3.2\u00d7 increase from the 155\u2009M records held at the end of Q2 2024. The acceleration was driven by three new data-partnership agreements signed in Q3 and a re-architecture of the ingestion pipeline that doubled throughput.</p>

<h3>Data Acquisition Strategy</h3>
<p>Profiles sources records through a combination of licensed first-party partnerships, public-registry ingestion, and proprietary web-graph enrichment. Each record passes through a 14-point verification layer before entering the marketplace. Current verification accuracy sits at 94.6%.</p>

<h3>What Changes at Scale</h3>
<p>At 500\u2009M records the economics of the marketplace shift. Average query-match rates have risen from 62% to 81%, which directly improves conversion for enterprise clients running prospecting workflows. Higher match rates also unlock usage-based pricing tiers that were previously uneconomical.</p>

<h3>2025 Roadmap \u2014 Profiles Intelligence</h3>
<p>The team is building <strong>Profiles Intelligence</strong>, an analytical layer that lets clients run segmentation, intent scoring, and lookalike modelling on top of the record graph. Early design partners begin onboarding in Q2 2025, with GA targeted for Q3.</p>`,
  },
  {
    id: "wardrobe",
    category: "Expansion Update",
    title:
      "Wardrobe enters Southeast Asia. Our go-to-market strategy and early data.",
    date: "9 Jan 2025",
    excerpt:
      "Wardrobe launched in Singapore and Hong Kong in December 2024, marking the platform\u2019s first expansion outside its home market with 4,200 items listed in 30 days.",
    body: `<h3>Market Entry</h3>
<p>Wardrobe launched in Singapore and Hong Kong in December 2024, marking the platform\u2019s first expansion outside its home market. The go-to-market playbook centred on micro-influencer seeding, a curated launch catalogue of 1,200 luxury items, and zero-commission onboarding for the first 90\u00a0days.</p>

<h3>30-Day Metrics</h3>
<ul>
<li><strong>Items listed:</strong> 4,200 (3.5\u00d7 the launch catalogue)</li>
<li><strong>Completed rentals:</strong> 1,840</li>
<li><strong>Average order value:</strong> SGD\u2009$180</li>
<li><strong>Lender retention (30-day):</strong> 78%</li>
</ul>

<h3>What\u2019s Driving Traction</h3>
<p>Two dynamics stood out: (1) cross-border rental demand between SG and HK is higher than expected \u2014 roughly 22% of transactions are cross-market, and (2) the luxury handbag category alone accounts for 41% of GMV, suggesting a narrow-and-deep merchandising strategy may outperform broad selection in early markets.</p>

<h3>2025 Expansion Plan</h3>
<p>Based on early data the team is evaluating entry into Kuala Lumpur (Q2) and Bangkok (Q3). Both markets share similar luxury-consumer demographics and logistics infrastructure. A decision is expected by end of February.</p>`,
  },
  {
    id: "gg",
    category: "Partnerships",
    title:
      "GreatGaming signs distribution agreements with three Tier-1 operators.",
    date: "2 Dec 2024",
    excerpt:
      "GreatGaming has executed distribution agreements with three top-10 global operators, representing a step-change in addressable distribution.",
    body: `<h3>The Deals</h3>
<p>GreatGaming has executed distribution agreements with three top-10 global operators. These are the first tier-1 partnerships for the studio and represent a step-change in addressable distribution. For confidentiality reasons operator names are withheld; full details are available in the data room.</p>

<h3>Deal Structure</h3>
<ul>
<li><strong>Revenue share:</strong> 18\u201322% of GGR (gross gaming revenue), varying by operator</li>
<li><strong>Minimum guarantees:</strong> $400\u2009K combined across the three agreements in Year 1</li>
<li><strong>Exclusivity:</strong> None \u2014 GreatGaming retains full rights to distribute through other channels</li>
</ul>

<h3>Launch Timeline</h3>
<p>Integration work is underway with all three operators. The first titles are expected to go live on-platform during Q1 2025, with full catalogue rollout by end of Q2. GreatGaming\u2019s compliance and certification team is running parallel certification processes to avoid sequential delays.</p>

<h3>Revenue Impact</h3>
<p>Management estimates the three agreements will contribute $1.8\u2013$2.4\u2009M in incremental annualised revenue once fully ramped (expected H2 2025). This would represent approximately 20% of projected portfolio ARR at that time.</p>`,
  },
  {
    id: "royale",
    category: "Product Update",
    title:
      "Royale 2.0: What we\u2019re building for 2025 and why it changes everything.",
    date: "18 Nov 2024",
    excerpt:
      "Royale 2.0 is a ground-up rebuild introducing social gaming, a native sportsbook, unified wallet, and proprietary RNG.",
    body: `<h3>The Vision</h3>
<p>Royale 2.0 is a ground-up rebuild of the platform, designed to transition Royale from a single-product casino into a multi-vertical gaming destination. The 2.0 release introduces four major capabilities.</p>

<h3>Key Features</h3>
<ul>
<li><strong>Social gaming layer</strong> \u2014 multiplayer tables, chat, friend lists, and a social feed that turns solo play into shared experience</li>
<li><strong>Native sportsbook</strong> \u2014 an in-house sports-betting product covering 30+ sports, built on a proprietary odds engine rather than a third-party feed</li>
<li><strong>Royale Wallet</strong> \u2014 a unified wallet supporting fiat and crypto deposits with instant settlement and sub-1% FX fees</li>
<li><strong>Proprietary RNG</strong> \u2014 a provably-fair random number generator, independently audited, replacing the third-party module used in v1</li>
</ul>

<h3>Commercial Impact</h3>
<p>Internal modelling suggests Royale 2.0 can increase average revenue per user (ARPU) by 2.4\u00d7 through cross-sell between casino and sportsbook, while the social layer is expected to improve D30 retention by 35\u201340%.</p>

<h3>Timeline</h3>
<p>Beta launches in Q1 2025 for existing Royale users. Public launch is targeted for early Q2 2025, with the sportsbook module following 4\u20136 weeks later once regulatory sign-off is complete.</p>`,
  },
  {
    id: "fundraise",
    category: "Financing",
    title:
      "GHC\u2019s Series\u00a0A: Why we\u2019re raising, what we\u2019re building with capital, and how to participate.",
    date: "5 Nov 2024",
    excerpt:
      "GHC is raising a $15\u2009M Series\u00a0A to accelerate growth across its four portfolio companies, priced at a $48\u2009M pre-money valuation.",
    body: `<h3>Why Now</h3>
<p>GHC is raising a <strong>$15\u2009M Series\u00a0A</strong> to accelerate growth across its four portfolio companies. The round is timed to coincide with inflection points in each vertical: Profiles.io\u2019s marketplace reaching critical scale, Wardrobe\u2019s APAC expansion, GreatGaming\u2019s tier-1 distribution deals, and Royale\u2019s 2.0 platform rebuild.</p>

<h3>Use of Proceeds</h3>
<ul>
<li><strong>$6\u2009M</strong> \u2014 Sales &amp; distribution expansion (headcount, channel partnerships, market entry)</li>
<li><strong>$4.5\u2009M</strong> \u2014 Product &amp; engineering (Profiles Intelligence, Royale 2.0, Wardrobe logistics)</li>
<li><strong>$3\u2009M</strong> \u2014 Regulatory &amp; licensing (multi-jurisdiction gaming licences, data-privacy compliance)</li>
<li><strong>$1.5\u2009M</strong> \u2014 Working capital &amp; reserve</li>
</ul>

<h3>Valuation &amp; Structure</h3>
<p>The round is priced at a <strong>$48\u2009M pre-money valuation</strong>, reflecting a 3.9\u00d7 multiple on forward ARR. The instrument is a priced equity round with a SAFE option available for allocations under $500\u2009K. Full terms are in the data room.</p>

<h3>How to Participate</h3>
<p>Existing investors have pro-rata rights and a 21-day priority window. New investors can express interest by contacting the GHC capital team directly through this portal. Allocation is expected to close by end of Q1 2025.</p>`,
  },
];

/* ───────── project posts (investor-only BTS) ───────── */
interface ProjectPost {
  id: string;
  product: string;
  productColor: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

const projectPosts: ProjectPost[] = [
  {
    id: "bts-profiles-intel",
    product: "Profiles.io",
    productColor: "#6b9fff",
    title: "Building the Intelligence Module — Behind the Architecture",
    date: "20 Feb 2026",
    excerpt: "A deep dive into how we designed the real-time entity resolution pipeline that powers Profiles.io\u2019s Intelligence Module v2.",
    body: `<h3>Why We Rebuilt From Scratch</h3>
<p>The original enrichment pipeline was batch-based — records were processed in 6-hour windows. For the Intelligence Module, we needed sub-second entity resolution across 800M+ records. That meant a fundamentally different architecture.</p>

<h3>The New Stack</h3>
<ul>
<li><strong>Streaming ingestion</strong> via Apache Kafka with custom partitioning by entity graph</li>
<li><strong>Vector embeddings</strong> for fuzzy entity matching using our fine-tuned model</li>
<li><strong>Graph database</strong> (Neo4j) for relationship mapping across entities</li>
<li><strong>Real-time scoring API</strong> — returns enriched entity data in <200ms p99</li>
</ul>

<h3>Key Metrics</h3>
<p>Since launching the beta in January: <strong>94.6% match accuracy</strong>, <strong>180ms average response time</strong>, and <strong>12 enterprise customers</strong> in pilot.</p>`,
  },
  {
    id: "bts-wardrobe-apac",
    product: "Wardrobe",
    productColor: "#f472b6",
    title: "Wardrobe APAC Expansion — Lessons From Singapore & Hong Kong",
    date: "12 Feb 2026",
    excerpt: "What we learned launching a peer-to-peer fashion marketplace in two new markets simultaneously, and the operational playbook we\u2019re now using for Thailand.",
    body: `<h3>Dual-Market Launch</h3>
<p>In December 2024 we launched Wardrobe in Singapore and Hong Kong simultaneously. The thesis was simple: test whether APAC fashion-rental demand mirrors what we saw in Australia, and whether our logistics model translates.</p>

<h3>What Worked</h3>
<ul>
<li><strong>Local payment rails</strong> — integrating PayNow (SG) and FPS (HK) drove 40% higher conversion vs card-only</li>
<li><strong>Influencer seeding</strong> — 25 micro-influencers per market generated 3,200 listings in the first month</li>
<li><strong>Trust & safety</strong> — our AI damage detection model transferred well across markets with minimal retraining</li>
</ul>

<h3>What Didn\u2019t</h3>
<p>Logistics costs in Hong Kong were 2.3\u00d7 our Australian baseline. We\u2019ve since partnered with a local 3PL to bring costs to parity. Unit economics turned positive in SG in month 3, HK in month 5.</p>

<h3>Next: Thailand & Malaysia</h3>
<p>We\u2019re applying the same playbook with localised payment integrations and pre-seeded supply. Target launch: April 2026.</p>`,
  },
  {
    id: "bts-royale-uptime",
    product: "Royale",
    productColor: "#fbbf24",
    title: "How We Hit 99.98% Uptime on Royale — And Why 99.99% Is Harder",
    date: "5 Feb 2026",
    excerpt: "The infrastructure decisions behind Royale\u2019s reliability story, and the multi-region migration underway to reach four-nines.",
    body: `<h3>The Stakes</h3>
<p>Royale processes real-money gaming transactions. Every second of downtime means lost revenue and regulatory scrutiny. In Q4 2024 we achieved 99.98% uptime — but our operator partners are contractually demanding 99.99%.</p>

<h3>Current Architecture</h3>
<ul>
<li><strong>Primary region:</strong> AWS ap-southeast-2 (Sydney)</li>
<li><strong>Game state:</strong> Redis Cluster with AOF persistence</li>
<li><strong>Transaction log:</strong> PostgreSQL with synchronous replication</li>
<li><strong>CDN:</strong> CloudFront for static assets and WebSocket failover</li>
</ul>

<h3>The Path to 99.99%</h3>
<p>We\u2019re migrating to active-active multi-region (ap-southeast-1 + ap-southeast-2) with CockroachDB replacing PostgreSQL for the transaction layer. Chaos testing begins March 2026 — we\u2019ll share results in the next update.</p>`,
  },
  {
    id: "bts-gg-pipeline",
    product: "GreatGaming",
    productColor: "#34d399",
    title: "Automating the Content Pipeline — From 48h to 4h Publish Time",
    date: "28 Jan 2026",
    excerpt: "How we rebuilt GreatGaming\u2019s editorial and distribution pipeline to reduce time-to-publish by 12\u00d7.",
    body: `<h3>The Problem</h3>
<p>GreatGaming\u2019s content pipeline was mostly manual: record a live show, edit it, write copy, get compliance sign-off, distribute to operators. Average time from recording to live on operator platforms: <strong>48 hours</strong>.</p>

<h3>The Automated Pipeline</h3>
<ul>
<li><strong>Auto-clipping:</strong> AI identifies highlight moments during live shows and generates clips in real-time</li>
<li><strong>Auto-copy:</strong> LLM generates promotional copy, thumbnails, and metadata based on show content</li>
<li><strong>Compliance engine:</strong> Rules-based system auto-flags content that needs human review (reduces manual review by 80%)</li>
<li><strong>Distribution API:</strong> One-click push to all connected operators via our standardised API</li>
</ul>

<h3>Results</h3>
<p>Average publish time is now <strong>3.8 hours</strong>. Content volume is up 4\u00d7 with the same team size. Three tier-1 operators have reported 22% higher engagement with the faster content cadence.</p>`,
  },
  {
    id: "bts-series-a",
    product: "Corporate",
    productColor: "#a78bfa",
    title: "Series A Preparation — What We\u2019ve Done and What\u2019s Next",
    date: "15 Jan 2026",
    excerpt: "An inside look at our Series A preparation: updated financials, refined pitch, and the investor conversations shaping our raise strategy.",
    body: `<h3>Where We Stand</h3>
<p>We\u2019ve completed the full refresh of investor materials ahead of the Series A roadshow. Key updates include a revised financial model (now bottom-up by product line), updated data room, and a refined 20-slide pitch deck.</p>

<h3>Raise Parameters</h3>
<ul>
<li><strong>Target raise:</strong> $8\u201312M AUD</li>
<li><strong>Use of funds:</strong> 50% sales expansion, 30% product (ML/AI), 20% regulatory licensing</li>
<li><strong>Timeline:</strong> Roadshow Q1 2026, targeting close by end of Q2</li>
</ul>

<h3>Early Conversations</h3>
<p>We\u2019ve had exploratory conversations with 14 firms. Strong interest from APAC-focused growth funds and two strategic operators. We\u2019ll share more detail as conversations progress — all updates will appear here in the portal.</p>`,
  },
];

/* ───────── active projects (kanban-style) ───────── */
type ProjectStatus = "active" | "upcoming" | "completed" | "paused";

interface ActiveProject {
  id: string;
  product: string;
  productColor: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  lead: string;
  target: string;
  /** Memberstack plan IDs that can view this project — empty = visible to all */
  planIds: string[];
}

const projectStatusColumns: { id: ProjectStatus; label: string }[] = [
  { id: "active", label: "Active" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
  { id: "paused", label: "Paused" },
];

const activeProjects: ActiveProject[] = [
  {
    id: "ap1",
    product: "Profiles.io",
    productColor: "#6b9fff",
    title: "Intelligence Module v2",
    description: "Real-time entity resolution pipeline with sub-second scoring across 800M+ records.",
    status: "active",
    progress: 68,
    lead: "Engineering",
    target: "Q2 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap2",
    product: "Wardrobe",
    productColor: "#f472b6",
    title: "APAC Expansion — TH / MY",
    description: "Localise for Thailand and Malaysia. Payment integration, language packs, and partner onboarding.",
    status: "active",
    progress: 45,
    lead: "Growth",
    target: "Q2 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap3",
    product: "Royale",
    productColor: "#fbbf24",
    title: "99.99% Uptime Migration",
    description: "Multi-region deployment with auto-failover and chaos testing suite.",
    status: "active",
    progress: 55,
    lead: "SRE",
    target: "Q1 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap4",
    product: "GreatGaming",
    productColor: "#34d399",
    title: "Content Pipeline Automation",
    description: "Reduce time-to-publish from 48h to under 4h with AI-powered editorial workflow.",
    status: "completed",
    progress: 100,
    lead: "Content Ops",
    target: "Q4 2025",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap5",
    product: "Profiles.io",
    productColor: "#6b9fff",
    title: "1B Records Milestone",
    description: "Scale data marketplace to 1 billion enriched records with infrastructure upgrades.",
    status: "upcoming",
    progress: 15,
    lead: "Data Eng",
    target: "Q3 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap6",
    product: "Wardrobe",
    productColor: "#f472b6",
    title: "AI Styling Engine v3",
    description: "Next-gen outfit recommendation model trained on 2M+ labelled outfits. Target >92% accuracy.",
    status: "upcoming",
    progress: 10,
    lead: "ML Team",
    target: "Q2 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap7",
    product: "Royale",
    productColor: "#fbbf24",
    title: "Tournament SDK",
    description: "Open-source tournament orchestration SDK for third-party operators.",
    status: "paused",
    progress: 30,
    lead: "Platform",
    target: "TBD",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap8",
    product: "Corporate",
    productColor: "#a78bfa",
    title: "Series A Roadshow",
    description: "Updated pitch deck, financial model, and data room documents for Series A.",
    status: "active",
    progress: 72,
    lead: "Finance",
    target: "Q2 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
  {
    id: "ap9",
    product: "GreatGaming",
    productColor: "#34d399",
    title: "Tier-2 Operator Expansion",
    description: "Close distribution agreements with 5 additional tier-2 operators across SEA and ANZ.",
    status: "active",
    progress: 60,
    lead: "Partnerships",
    target: "Q2 2026",
    planIds: ["pln_investor-portal-mep90u6c"],
  },
];

/* ───────── helpers ───────── */
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function getFormattedDate(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ───────── tab ↔ URL mapping ───────── */
const validTabs = ["dashboard", "documents", "info", "kanban", "projects", "dataroom", "schedule", "profile"] as const;
type TabId = (typeof validTabs)[number];

function tabFromHash(): TabId {
  if (typeof window === "undefined") return "dashboard";
  const h = window.location.hash.replace("#", "");
  return validTabs.includes(h as TabId) ? (h as TabId) : "dashboard";
}

/* ───────── component ───────── */
export default function PortalClient() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>(() => tabFromHash());
  const [activeProject, setActiveProject] = useState<ActiveProject | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [kanbanCards, setKanbanCards] = useState<KanbanCard[]>(initialKanbanCards);
  const [draggedCard, setDraggedCard] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<KanbanStatus | null>(null);
  const [kanbanFilter, setKanbanFilter] = useState<string>("all");
  const [projectView, setProjectView] = useState<"kanban" | "list">("kanban");
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [memberPlanIds, setMemberPlanIds] = useState<string[]>([]);

  /* detect Memberstack plan IDs for access control */
  useEffect(() => {
    let cancelled = false;
    const checkPlans = async () => {
      try {
        const ms = (window as unknown as { $memberstackDom?: { getCurrentMember: () => Promise<{ data?: { planConnections?: { planId: string; active: boolean }[] } }> } }).$memberstackDom;
        if (ms) {
          const member = await ms.getCurrentMember();
          if (!cancelled && member?.data?.planConnections) {
            setMemberPlanIds(
              member.data.planConnections
                .filter((pc) => pc.active)
                .map((pc) => pc.planId)
            );
          }
        }
      } catch { /* silently ignore if Memberstack not loaded */ }
    };
    checkPlans();
    return () => { cancelled = true; };
  }, []);

  /* filter active projects by plan access */
  const visibleProjects = useMemo(() => {
    return activeProjects.filter((p) => {
      if (p.planIds.length === 0) return true;
      if (memberPlanIds.length === 0) return true; // show all if plans not loaded yet
      return p.planIds.some((id) => memberPlanIds.includes(id));
    });
  }, [memberPlanIds]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return visibleProjects;
    return visibleProjects.filter((p) => p.product === projectFilter);
  }, [visibleProjects, projectFilter]);

  const projectProducts = useMemo(() => {
    const prods = Array.from(new Set(visibleProjects.map((p) => p.product)));
    return prods.sort();
  }, [visibleProjects]);

  /* sync tab ↔ URL hash */
  const switchTab = useCallback((tab: TabId) => {
    setActiveTab(tab);
    const hash = tab === "dashboard" ? "" : `#${tab}`;
    window.history.pushState(null, "", `${window.location.pathname}${hash}`);
  }, []);

  useEffect(() => {
    const onPop = () => setActiveTab(tabFromHash());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* fetch kanban cards from Notion API (falls back to placeholder data) */
  useEffect(() => {
    let cancelled = false;
    fetch("/api/kanban")
      .then((r) => r.json())
      .then((data: { cards?: KanbanCard[] }) => {
        if (!cancelled && data.cards && data.cards.length > 0) {
          setKanbanCards(data.cards);
        }
      })
      .catch(() => { /* keep placeholder data */ });
    return () => { cancelled = true; };
  }, []);

  const handleDragStart = useCallback((cardId: string) => {
    setDraggedCard(cardId);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, colId: KanbanStatus) => {
    e.preventDefault();
    setDragOverCol(colId);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverCol(null);
  }, []);

  const handleDrop = useCallback((colId: KanbanStatus) => {
    if (!draggedCard) return;
    setKanbanCards((prev) =>
      prev.map((c) => (c.id === draggedCard ? { ...c, status: colId } : c))
    );
    setDraggedCard(null);
    setDragOverCol(null);
  }, [draggedCard]);

  const filteredKanbanCards = useMemo(() => {
    if (kanbanFilter === "all") return kanbanCards;
    return kanbanCards.filter((c) => c.product === kanbanFilter);
  }, [kanbanCards, kanbanFilter]);

  const kanbanProducts = useMemo(() => {
    const prods = Array.from(new Set(kanbanCards.map((c) => c.product)));
    return prods.sort();
  }, [kanbanCards]);

  const handleSidebarEnter = useCallback(() => setSidebarOpen(true), []);
  const handleSidebarLeave = useCallback(() => setSidebarOpen(false), []);

  const greeting = useMemo(() => getGreeting(), []);
  const formattedDate = useMemo(() => getFormattedDate(), []);

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  /* close overlay on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveArticle(null);
        setActiveProject(null);
        setShowLogoutModal(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* lock body scroll when overlay open */
  useEffect(() => {
    document.body.style.overflow = (activeArticle || activeProject) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  return (
    <div className={`portal-layout${sidebarOpen ? " sb-open" : ""}`}>
      {/* ─────── SIDEBAR ─────── */}
      <aside
        className="sidebar"
        onMouseEnter={handleSidebarEnter}
        onMouseLeave={handleSidebarLeave}
      >
        {/* gradient glow at top */}
        <div className="sb-glow" />

        {/* logo */}
        <div className="sb-logo">
          <Link href="/investor-portal/home">
            <LogoFull className="sb-logo-full" />
            <LogoIcon className="sb-logo-icon" />
          </Link>
        </div>

        {/* nav */}
        <nav className="sb-nav">
          {/* Overview group */}
          <div className="sb-group-label">Overview</div>

          <a
            href="#"
            className={`sb-link${activeTab === "dashboard" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("dashboard"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="sb-link-text">Dashboard</span>
          </a>

          <a
            href="#"
            className={`sb-link${activeTab === "documents" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("documents"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 2h10l6 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="12" y2="17" />
            </svg>
            <span className="sb-link-text">Briefings &amp; Reports</span>
          </a>

          <a
            href="#"
            className={`sb-link${activeTab === "info" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("info"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2,20 7,13 11,16 16,8 22,4" />
            </svg>
            <span className="sb-link-text">Portfolio Updates</span>
          </a>

          <a
            href="#"
            className={`sb-link${activeTab === "kanban" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("kanban"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="6" height="18" rx="1" />
              <rect x="9" y="3" width="6" height="12" rx="1" />
              <rect x="16" y="3" width="6" height="15" rx="1" />
            </svg>
            <span className="sb-link-text">Roadmap</span>
          </a>

          {/* Separator */}
          <div className="sb-separator" />

          {/* Projects group */}
          <div className="sb-group-label">Projects</div>

          <a
            href="#"
            className={`sb-link${activeTab === "projects" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("projects"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            <span className="sb-link-text">Projects</span>
          </a>

          {/* Separator */}
          <div className="sb-separator" />

          {/* Resources group */}
          <div className="sb-group-label">Resources</div>

          <a
            href="#"
            className={`sb-link${activeTab === "dataroom" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("dataroom"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="sb-link-text">Data Room</span>
          </a>

          <a
            href="#"
            className={`sb-link${activeTab === "schedule" ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); switchTab("schedule"); }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="sb-link-text">Schedule Call</span>
          </a>
        </nav>

        {/* footer / user */}
        <div className="sb-foot">
          <a href="#" className="sb-user" onClick={(e) => { e.preventDefault(); switchTab("profile"); }}>
            <div className="sb-avatar" data-ms-member="first-name:abbr">JS</div>
            <div className="sb-user-info">
              <div className="sb-user-name" data-ms-member="first-name">Jane</div>
              <div className="sb-user-role">Acme Ventures &middot; Partner</div>
            </div>
          </a>
          <div className="sb-theme-toggle">
            <DarkModeToggle />
          </div>
          <a href="#" className="sb-logout sb-logout-red" onClick={(e) => { e.preventDefault(); setShowLogoutModal(true); }}>
            Sign out &rarr;
          </a>
        </div>
      </aside>

      {/* ─────── MAIN CONTENT ─────── */}
      <main className="portal-main">

        {/* ══════ DASHBOARD TAB ══════ */}
        {activeTab === "dashboard" && (
          <>
            {/* ── Greeting Section ── */}
            <div className="p-greeting">
              <div className="p-greeting-left">
                <h1 className="p-greeting-headline">
                  {greeting}, <span data-ms-member="first-name">Jane</span>.
                </h1>
                <p className="p-greeting-sub">
                  Welcome back to your investor portal.
                </p>
              </div>
              <div className="p-greeting-right">
                <div className="p-greeting-date">{formattedDate}</div>
                <div className="p-greeting-firm">Acme Ventures</div>
              </div>
            </div>

            {/* ── Confidential Badge ── */}
            <div className="p-conf-badge">
              <div className="p-conf-inner">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Confidential</span>
                <span className="p-conf-sep">&middot;</span>
                <span>For authorised investors only</span>
              </div>
            </div>

            {/* ── Quick Actions ── */}
            <div className="p-quick-row">
              <a href="#" className="p-quick-card" onClick={(e) => { e.preventDefault(); switchTab("documents"); }}>
                <div className="p-quick-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="p-quick-label">Data Room</div>
                <div className="p-quick-desc">Secure documents</div>
              </a>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="p-quick-card">
                <div className="p-quick-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="p-quick-label">Schedule Call</div>
                <div className="p-quick-desc">Book with the team</div>
              </a>
              <Link href="/contact" className="p-quick-card">
                <div className="p-quick-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="p-quick-label">Contact</div>
                <div className="p-quick-desc">Get in touch</div>
              </Link>
              <a href="#" className="p-quick-card" onClick={(e) => { e.preventDefault(); switchTab("documents"); }}>
                <div className="p-quick-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className="p-quick-label">Downloads</div>
                <div className="p-quick-desc">Reports &amp; decks</div>
              </a>
            </div>

            {/* ── Portfolio Snapshot ── */}
            <div className="p-snapshot-section">
              <div className="section-label">Portfolio Snapshot</div>
              <div className="p-snapshot-grid">
                <div className="p-snap-card p-snap-blue">
                  <div className="p-snap-value">$12.2M</div>
                  <div className="p-snap-label">Annual Recurring Revenue</div>
                  <div className="p-snap-change p-snap-change-up">+34% QoQ</div>
                </div>
                <div className="p-snap-card p-snap-emerald">
                  <div className="p-snap-value">72%</div>
                  <div className="p-snap-label">Gross Margin</div>
                  <div className="p-snap-change p-snap-change-up">+4pp vs Q3</div>
                </div>
                <div className="p-snap-card p-snap-amber">
                  <div className="p-snap-value">4</div>
                  <div className="p-snap-label">Active Products</div>
                  <div className="p-snap-change">All verticals live</div>
                </div>
                <div className="p-snap-card p-snap-rose">
                  <div className="p-snap-value">28mo</div>
                  <div className="p-snap-label">Runway Remaining</div>
                  <div className="p-snap-change">$380K/mo burn</div>
                </div>
              </div>
            </div>

            {/* ── Wardrobe Project Updates ── */}
            <div className="p-project-section">
              <div className="section-label">Project Updates &mdash; Wardrobe</div>
              <div className="p-project-grid">
                <div className="p-project-card">
                  <div className="p-project-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/wardrobe.svg" alt="Wardrobe" className="p-project-logo" />
                    <span className="p-project-status p-status-on-track">On Track</span>
                  </div>
                  <div className="p-project-title">APAC Market Expansion</div>
                  <div className="p-project-desc">Singapore &amp; Hong Kong live. KL launch Q2 2025, Bangkok Q3 2025.</div>
                  <div className="p-progress-bar"><div className="p-progress-fill" style={{ width: "65%" }} /></div>
                  <div className="p-progress-meta">
                    <span>65% complete</span>
                    <span>Target: Q3 2025</span>
                  </div>
                </div>
                <div className="p-project-card">
                  <div className="p-project-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/wardrobe.svg" alt="Wardrobe" className="p-project-logo" />
                    <span className="p-project-status p-status-in-progress">In Progress</span>
                  </div>
                  <div className="p-project-title">Luxury Handbag Vertical</div>
                  <div className="p-project-desc">Dedicated category launch. 41% of GMV already from handbags &mdash; building authentication pipeline.</div>
                  <div className="p-progress-bar"><div className="p-progress-fill" style={{ width: "40%" }} /></div>
                  <div className="p-progress-meta">
                    <span>40% complete</span>
                    <span>Target: Q2 2025</span>
                  </div>
                </div>
                <div className="p-project-card">
                  <div className="p-project-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/wardrobe.svg" alt="Wardrobe" className="p-project-logo" />
                    <span className="p-project-status p-status-on-track">On Track</span>
                  </div>
                  <div className="p-project-title">Logistics V2</div>
                  <div className="p-project-desc">Cross-border shipping integration. 22% of SG-HK transactions are cross-market. Building automated routing.</div>
                  <div className="p-progress-bar"><div className="p-progress-fill" style={{ width: "55%" }} /></div>
                  <div className="p-progress-meta">
                    <span>55% complete</span>
                    <span>Target: Q2 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Featured Article ── */}
            {featuredArticle && (
              <div className="p-featured-section">
                <div className="section-label">Latest Briefing</div>
                <div
                  className="p-featured-card"
                  onClick={() => setActiveArticle(featuredArticle)}
                >
                  <div className="p-featured-gradient" />
                  <div className="p-featured-content">
                    <div className="p-featured-top">
                      <span className="p-featured-badge">Featured</span>
                      <span className="p-featured-cat">
                        {featuredArticle.category}
                      </span>
                      <span className="p-featured-date">
                        {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="p-featured-title">{featuredArticle.title}</h2>
                    <p className="p-featured-excerpt">{featuredArticle.excerpt}</p>
                    <div className="p-featured-foot">
                      <span className="p-featured-read">Read briefing</span>
                      <div className="art-arr">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Articles Grid ── */}
            <div className="p-articles-section">
              <div className="section-label">Confidential Briefings</div>
              <div className="p-articles-grid">
                {otherArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-art-card"
                    onClick={() => setActiveArticle(article)}
                  >
                    <div className="p-art-top">
                      <span className="art-cat">{article.category}</span>
                      <span className="art-date">{article.date}</span>
                    </div>
                    <div className="p-art-title">{article.title}</div>
                    <p className="p-art-excerpt">{article.excerpt}</p>
                    <div style={{ flex: 1 }} />
                    <div className="art-foot">
                      <span className="art-tag">{article.category}</span>
                      <div className="art-arr">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ══════ DOCUMENTS TAB ══════ */}
        {activeTab === "documents" && (
          <>
            <h2 className="portal-section-title">Documents</h2>
            <p className="portal-section-desc">Access confidential reports, decks, and data room files.</p>

            <div className="section-label">Data Room</div>
            <div className="p-docs-grid">
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Series A Term Sheet</div>
                  <div className="p-doc-meta">PDF &middot; 2.4 MB &middot; Updated 18 Feb 2025</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-amber">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Q4 2024 Financial Report</div>
                  <div className="p-doc-meta">PDF &middot; 5.1 MB &middot; Updated 14 Jan 2025</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-emerald">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Investor Presentation Deck</div>
                  <div className="p-doc-meta">PDF &middot; 8.7 MB &middot; Updated 5 Nov 2024</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-rose">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Cap Table &amp; Share Structure</div>
                  <div className="p-doc-meta">XLSX &middot; 340 KB &middot; Updated 18 Feb 2025</div>
                </div>
              </a>
            </div>

            <div className="section-label">Reports &amp; Decks</div>
            <div className="p-docs-grid">
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Profiles.io Product Roadmap</div>
                  <div className="p-doc-meta">PDF &middot; 3.2 MB &middot; Updated 14 Jan 2025</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-amber">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Wardrobe APAC Market Analysis</div>
                  <div className="p-doc-meta">PDF &middot; 4.6 MB &middot; Updated 9 Jan 2025</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-emerald">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">GreatGaming Distribution Agreements</div>
                  <div className="p-doc-meta">PDF &middot; 1.8 MB &middot; Updated 2 Dec 2024</div>
                </div>
              </a>
              <a href="#" className="p-doc-card">
                <div className="p-doc-icon p-doc-icon-rose">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                </div>
                <div className="p-doc-info">
                  <div className="p-doc-name">Royale 2.0 Technical Specification</div>
                  <div className="p-doc-meta">PDF &middot; 6.3 MB &middot; Updated 18 Nov 2024</div>
                </div>
              </a>
            </div>
          </>
        )}

        {/* ══════ PROJECT INFO TAB ══════ */}
        {activeTab === "info" && (
          <>
            <h2 className="portal-section-title">Project Info</h2>
            <p className="portal-section-desc">Key metrics and information about GHC and the portfolio.</p>

            <div className="section-label">Company Overview</div>
            <div className="p-info-grid">
              <div className="p-info-card">
                <div className="p-info-label">Company</div>
                <div className="p-info-value">GHC Pty Ltd</div>
                <div className="p-info-desc">Venture studio building disruptive products across entertainment, data, fashion, and gaming.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">Founded</div>
                <div className="p-info-value">2022</div>
                <div className="p-info-desc">Melbourne, Australia. Now operating across APAC and global markets.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">Current Round</div>
                <div className="p-info-value">Series A &mdash; $15M</div>
                <div className="p-info-desc">Pre-money valuation of $48M. SAFE option available for allocations under $500K.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">ARR</div>
                <div className="p-info-value">$12.2M</div>
                <div className="p-info-desc">Record revenue quarter in Q4 2024, up 34% quarter-over-quarter.</div>
              </div>
            </div>

            <div className="section-label">Portfolio Companies</div>
            <div className="p-info-grid">
              <div className="p-info-card">
                <div className="p-info-label">Profiles.io</div>
                <div className="p-info-value">Data Marketplace</div>
                <div className="p-info-desc">500M+ enriched person-records. Launching Profiles Intelligence in Q2 2025.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">Wardrobe</div>
                <div className="p-info-value">Fashion Rental</div>
                <div className="p-info-desc">Live in Singapore &amp; Hong Kong. Expanding to KL and Bangkok in 2025.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">Royale</div>
                <div className="p-info-value">Gaming Platform</div>
                <div className="p-info-desc">99.98% uptime. Version 2.0 rebuild with social gaming and native sportsbook.</div>
              </div>
              <div className="p-info-card">
                <div className="p-info-label">GreatGaming</div>
                <div className="p-info-value">Game Studio</div>
                <div className="p-info-desc">3 tier-1 operator distribution deals signed. $1.8&ndash;$2.4M projected incremental ARR.</div>
              </div>
            </div>

            <div className="section-label">Meet the Team</div>
            <div className="p-team-grid">
              {/* Leadership */}
              <div className="p-team-card p-team-featured">
                <div className="p-team-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Fotios Tsouklas</div>
                  <div className="p-team-role">Co-Founder &amp; CEO</div>
                  <p className="p-team-bio">Fotios leads the strategic direction of GHC and its portfolio companies. With a background in technology ventures across APAC, he has built and scaled multiple products from concept to market. He oversees capital allocation, investor relations, and the studio&rsquo;s expansion into new verticals including data intelligence, fashion tech, and gaming.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-team-card p-team-featured">
                <div className="p-team-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Daniel Galea</div>
                  <div className="p-team-role">Co-Founder &amp; COO</div>
                  <p className="p-team-bio">Daniel drives operations across the GHC portfolio, from product development through to go-to-market execution. He brings deep experience in live entertainment, digital platforms, and operational scaling. He is responsible for day-to-day performance of each venture, partner negotiations, and building the infrastructure that powers the studio&rsquo;s rapid product launches.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Team Members */}
              <div className="p-team-card">
                <div className="p-team-avatar p-team-avatar-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Team Member</div>
                  <div className="p-team-role">Head of Product</div>
                  <p className="p-team-bio">Leads product strategy and roadmap across the portfolio. Focused on user experience, feature prioritisation, and cross-product synergies.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-team-card">
                <div className="p-team-avatar p-team-avatar-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Team Member</div>
                  <div className="p-team-role">Head of Engineering</div>
                  <p className="p-team-bio">Oversees technical architecture and engineering teams across all ventures. Focused on scalable systems, security, and platform reliability.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-team-card">
                <div className="p-team-avatar p-team-avatar-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Team Member</div>
                  <div className="p-team-role">Head of Growth</div>
                  <p className="p-team-bio">Drives user acquisition, partnerships, and revenue growth. Manages go-to-market strategies and performance marketing across the portfolio.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="p-team-card">
                <div className="p-team-avatar p-team-avatar-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div className="p-team-info">
                  <div className="p-team-name">Team Member</div>
                  <div className="p-team-role">Head of Finance</div>
                  <p className="p-team-bio">Manages financial planning, reporting, and investor communications. Responsible for fundraising support, treasury, and portfolio company financials.</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-team-linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="section-label">Key Contacts</div>
            <div className="p-info-grid">
              <div className="p-info-card p-info-full">
                <div className="p-info-label">Investor Relations</div>
                <div className="p-info-value">investors@ghc.com</div>
                <div className="p-info-desc">For questions about your investment, portfolio updates, or data room access. Response within 24 hours.</div>
              </div>
            </div>
          </>
        )}

        {/* ══════ PROFILE TAB ══════ */}
        {activeTab === "profile" && (
          <>
            <h2 className="portal-section-title">Profile</h2>
            <p className="portal-section-desc">Manage your account details and preferences.</p>

            <div className="p-profile-section">
              <div className="section-label">Your Details</div>
              <div className="p-profile-card">
                <div className="p-profile-header">
                  <div className="p-profile-avatar">JS</div>
                  <div>
                    <div className="p-profile-name" data-ms-member="first-name">Jane Smith</div>
                    <div className="p-profile-email" data-ms-member="email">jane@acmeventures.com</div>
                  </div>
                </div>

                <div className="p-profile-fields">
                  <div className="p-profile-field">
                    <label>First Name</label>
                    <input type="text" data-ms-member="first-name" defaultValue="Jane" />
                  </div>
                  <div className="p-profile-field">
                    <label>Last Name</label>
                    <input type="text" data-ms-member="last-name" defaultValue="Smith" />
                  </div>
                  <div className="p-profile-field">
                    <label>Email</label>
                    <input type="email" data-ms-member="email" defaultValue="jane@acmeventures.com" />
                  </div>
                  <div className="p-profile-field">
                    <label>Phone</label>
                    <input type="tel" data-ms-member="phone" defaultValue="+61 400 000 000" />
                  </div>
                  <div className="p-profile-field">
                    <label>Company / Firm</label>
                    <input type="text" data-ms-member="company" defaultValue="Acme Ventures" />
                  </div>
                  <div className="p-profile-field">
                    <label>Role</label>
                    <CustomSelect
                      options={[
                        { label: "Partner", value: "partner" },
                        { label: "Associate", value: "associate" },
                        { label: "Analyst", value: "analyst" },
                        { label: "Director", value: "director" },
                        { label: "Other", value: "other" },
                      ]}
                      value="partner"
                      msMember="role"
                      name="role"
                    />
                  </div>
                  <div className="p-profile-field p-profile-field-full">
                    <label>Bio / Notes</label>
                    <textarea data-ms-member="bio" defaultValue="Managing Partner at Acme Ventures. Focus on early-stage tech investments across APAC." />
                  </div>
                </div>

                <div className="p-profile-save">
                  <button type="button" data-ms-action="update-profile">Save Changes</button>
                </div>
              </div>
            </div>

            <div className="section-label">Account</div>
            <div className="p-signout-card">
              <div className="p-signout-info">Signed in as <strong>jane@acmeventures.com</strong></div>
              <a href="#" className="p-signout-btn p-signout-btn-red" onClick={(e) => { e.preventDefault(); setShowLogoutModal(true); }}>Sign Out &rarr;</a>
            </div>
          </>
        )}

        {/* ══════ PROJECTS TAB ══════ */}
        {activeTab === "projects" && (
          <>
            {/* Header with view toggle */}
            <div className="proj-header">
              <div>
                <h2 className="portal-section-title">Active Projects</h2>
                <p className="portal-section-desc">Track progress across all portfolio companies and initiatives.</p>
              </div>
              <div className="proj-controls">
                <div className="proj-view-toggle">
                  <button
                    className={`proj-view-btn${projectView === "kanban" ? " active" : ""}`}
                    onClick={() => setProjectView("kanban")}
                    title="Board view"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="6" height="18" rx="1" />
                      <rect x="9" y="3" width="6" height="12" rx="1" />
                      <rect x="16" y="3" width="6" height="15" rx="1" />
                    </svg>
                  </button>
                  <button
                    className={`proj-view-btn${projectView === "list" ? " active" : ""}`}
                    onClick={() => setProjectView("list")}
                    title="List view"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  </button>
                </div>
                <div className="proj-filters">
                  <button
                    className={`kb-filter-btn${projectFilter === "all" ? " active" : ""}`}
                    onClick={() => setProjectFilter("all")}
                  >All</button>
                  {projectProducts.map((prod) => (
                    <button
                      key={prod}
                      className={`kb-filter-btn${projectFilter === prod ? " active" : ""}`}
                      onClick={() => setProjectFilter(prod)}
                    >{prod}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kanban Board View */}
            {projectView === "kanban" && (
              <div className="proj-board" data-ms-content="members">
                {projectStatusColumns.map((col) => {
                  const colProjects = filteredProjects.filter((p) => p.status === col.id);
                  return (
                    <div key={col.id} className="proj-column">
                      <div className="proj-col-header">
                        <span className="proj-col-title">{col.label}</span>
                        <span className="kb-col-count">{colProjects.length}</span>
                      </div>
                      <div className="proj-col-cards">
                        {colProjects.map((project) => (
                          <div key={project.id} className="proj-card" onClick={() => setActiveProject(project)} style={{ cursor: "pointer" }}>
                            <div className="proj-card-top">
                              <span className="kb-card-dot" style={{ background: project.productColor }} />
                              <span className="kb-card-product">{project.product}</span>
                            </div>
                            <div className="proj-card-title">{project.title}</div>
                            <div className="proj-card-desc">{project.description}</div>
                            <div className="proj-card-progress">
                              <div className="proj-card-bar">
                                <div className="proj-card-bar-fill" style={{ width: `${project.progress}%`, background: project.productColor }} />
                              </div>
                              <span className="proj-card-pct">{project.progress}%</span>
                            </div>
                            <div className="proj-card-meta">
                              <span className="kb-card-assignee">{project.lead}</span>
                              <span className="kb-card-due">{project.target}</span>
                            </div>
                          </div>
                        ))}
                        {colProjects.length === 0 && (
                          <div className="kb-empty">No projects</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* List View */}
            {projectView === "list" && (
              <div className="proj-list" data-ms-content="members">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="proj-list-item" onClick={() => setActiveProject(project)} style={{ cursor: "pointer" }}>
                    <div className="proj-list-dot" style={{ background: project.productColor }} />
                    <div className="proj-list-content">
                      <div className="proj-list-top">
                        <span className="proj-list-product" style={{ color: project.productColor }}>{project.product}</span>
                        <span className={`proj-list-status proj-status-${project.status}`}>{project.status.replace("_", " ")}</span>
                      </div>
                      <div className="proj-list-title">{project.title}</div>
                      <div className="proj-list-desc">{project.description}</div>
                      <div className="proj-list-bottom">
                        <div className="proj-list-bar-wrap">
                          <div className="proj-card-bar">
                            <div className="proj-card-bar-fill" style={{ width: `${project.progress}%`, background: project.productColor }} />
                          </div>
                          <span className="proj-card-pct">{project.progress}%</span>
                        </div>
                        <span className="proj-list-lead">{project.lead}</span>
                        <span className="proj-list-target">{project.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Behind the Scenes Posts */}
            <div className="section-label" style={{ marginTop: 48 }}>Behind the Scenes</div>
            <p className="p-tab-desc">Investor-only deep-dives on what we&apos;re building across the portfolio.</p>
            <div className="p-projects-list">
              {projectPosts.map((post) => (
                <article
                  key={post.id}
                  className="p-project-post"
                  onClick={() => setActiveArticle({
                    id: post.id,
                    category: post.product,
                    title: post.title,
                    date: post.date,
                    excerpt: post.excerpt,
                    body: post.body,
                  })}
                >
                  <div className="p-project-post-dot" style={{ background: post.productColor }} />
                  <div className="p-project-post-content">
                    <div className="p-project-post-meta">
                      <span className="p-project-post-product" style={{ color: post.productColor }}>{post.product}</span>
                      <span className="p-project-post-date">{post.date}</span>
                    </div>
                    <h3 className="p-project-post-title">{post.title}</h3>
                    <p className="p-project-post-excerpt">{post.excerpt}</p>
                  </div>
                  <div className="p-project-post-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* ══════ DATA ROOM TAB ══════ */}
        {activeTab === "dataroom" && (
          <>
            <div className="section-label">Data Room</div>
            <p className="p-tab-desc">Access confidential documents, financial reports, and due-diligence materials.</p>
            <div className="p-dataroom-grid">
              <div className="p-dataroom-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                <div className="p-dataroom-name">Financial Statements — FY25</div>
                <div className="p-dataroom-meta">PDF &middot; Updated Jan 2026</div>
              </div>
              <div className="p-dataroom-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                <div className="p-dataroom-name">Investor Deck — Q1 2026</div>
                <div className="p-dataroom-meta">PDF &middot; Updated Feb 2026</div>
              </div>
              <div className="p-dataroom-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                <div className="p-dataroom-name">Cap Table &amp; Share Structure</div>
                <div className="p-dataroom-meta">PDF &middot; Updated Dec 2025</div>
              </div>
              <div className="p-dataroom-card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                <div className="p-dataroom-name">Legal &amp; Compliance Docs</div>
                <div className="p-dataroom-meta">PDF &middot; Updated Nov 2025</div>
              </div>
            </div>
          </>
        )}

        {/* ══════ SCHEDULE CALL TAB ══════ */}
        {activeTab === "schedule" && (
          <>
            <div className="section-label">Schedule a Call</div>
            <p className="p-tab-desc">Book a time with our team to discuss your investment and get answers to your questions.</p>
            <div className="p-schedule-embed">
              {/* Cal.com embed placeholder — replace the src with your actual Cal link */}
              <iframe
                src="about:blank"
                title="Schedule a call"
                className="p-cal-iframe"
                frameBorder="0"
              />
              <div className="p-cal-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <p>Cal embed will appear here.<br/>Provide your Cal.com or Calendly embed code to activate.</p>
              </div>
            </div>
          </>
        )}

        {/* ══════ KANBAN / ROADMAP TAB ══════ */}
        {activeTab === "kanban" && (
          <>
            <div className="kb-header">
              <div>
                <h2 className="portal-section-title">Project Roadmap</h2>
                <p className="portal-section-desc">Track progress across all products and initiatives.</p>
              </div>
              <div className="kb-filters">
                <button
                  className={`kb-filter-btn${kanbanFilter === "all" ? " active" : ""}`}
                  onClick={() => setKanbanFilter("all")}
                >
                  All
                </button>
                {kanbanProducts.map((prod) => (
                  <button
                    key={prod}
                    className={`kb-filter-btn${kanbanFilter === prod ? " active" : ""}`}
                    onClick={() => setKanbanFilter(prod)}
                  >
                    {prod}
                  </button>
                ))}
              </div>
            </div>

            <div className="kb-board">
              {kanbanColumns.map((col) => {
                const colCards = filteredKanbanCards.filter((c) => c.status === col.id);
                return (
                  <div
                    key={col.id}
                    className={`kb-column${dragOverCol === col.id ? " kb-col-dragover" : ""}`}
                    onDragOver={(e) => handleDragOver(e, col.id)}
                    onDragLeave={handleDragLeave}
                    onDrop={() => handleDrop(col.id)}
                  >
                    <div className="kb-col-header">
                      <span className="kb-col-title">{col.label}</span>
                      <span className="kb-col-count">{colCards.length}</span>
                    </div>
                    <div className="kb-col-cards">
                      {colCards.map((card) => (
                        <div
                          key={card.id}
                          className={`kb-card${draggedCard === card.id ? " kb-card-dragging" : ""}`}
                          draggable
                          onDragStart={() => handleDragStart(card.id)}
                          onDragEnd={() => { setDraggedCard(null); setDragOverCol(null); }}
                        >
                          <div className="kb-card-top">
                            <span
                              className="kb-card-dot"
                              style={{ background: card.productColor }}
                            />
                            <span className="kb-card-product">{card.product}</span>
                            <span className={`kb-card-priority kb-priority-${card.priority}`}>
                              {card.priority}
                            </span>
                          </div>
                          <div className="kb-card-title">{card.title}</div>
                          <div className="kb-card-desc">{card.description}</div>
                          {(card.assignee || card.dueDate) && (
                            <div className="kb-card-meta">
                              {card.assignee && <span className="kb-card-assignee">{card.assignee}</span>}
                              {card.dueDate && <span className="kb-card-due">{card.dueDate}</span>}
                            </div>
                          )}
                        </div>
                      ))}
                      {colCards.length === 0 && (
                        <div className="kb-empty">No items</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </main>

      {/* ─────── STICKY FOOTER BAR ─────── */}
      <nav className="portal-footer-bar">
        <button
          className={`pfb-item${activeTab === "dashboard" ? " pfb-active" : ""}`}
          onClick={() => switchTab("dashboard")}
        >
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="pfb-label">Home</span>
        </button>
        <button
          className={`pfb-item${activeTab === "documents" ? " pfb-active" : ""}`}
          onClick={() => switchTab("documents")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14,2 14,8 20,8" />
          </svg>
          <span className="pfb-label">Docs</span>
        </button>
        <button
          className={`pfb-item${activeTab === "info" ? " pfb-active" : ""}`}
          onClick={() => switchTab("info")}
        >
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span className="pfb-label">Info</span>
        </button>
        <button
          className={`pfb-item${activeTab === "profile" ? " pfb-active" : ""}`}
          onClick={() => switchTab("profile")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="pfb-label">Profile</span>
        </button>
      </nav>

      {/* ─────── ARTICLE OVERLAY ─────── */}
      {activeArticle && (
        <div className="art-overlay open">
          <div className="ao-inner">
            {/* confidential tag */}
            <div className="conf-tag">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Confidential
            </div>

            {/* category */}
            <div className="ao-cat">{activeArticle.category}</div>

            {/* title */}
            <div className="ao-title">{activeArticle.title}</div>

            {/* meta */}
            <div className="ao-meta">
              <span>{activeArticle.date}</span>
              <span>&middot;</span>
              <span>GHC Investor Portal</span>
            </div>

            {/* body */}
            <div
              className="ao-body"
              dangerouslySetInnerHTML={{ __html: activeArticle.body }}
            />
          </div>

          {/* close button */}
          <button
            className="ao-close"
            onClick={() => setActiveArticle(null)}
          >
            &larr; Back to portal
          </button>
        </div>
      )}

      {/* ─────── PROJECT DETAIL OVERLAY ─────── */}
      {activeProject && (
        <div className="art-overlay open">
          <div className="ao-inner">
            <div className="conf-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Confidential
            </div>

            <div className="ao-cat">
              <span style={{ color: activeProject.productColor }}>{activeProject.product}</span>
            </div>
            <div className="ao-title">{activeProject.title}</div>
            <div className="ao-meta">
              <span className={`proj-list-status proj-status-${activeProject.status}`} style={{ marginRight: 8 }}>
                {activeProject.status.replace("_", " ")}
              </span>
              <span>{activeProject.lead}</span>
              <span>&middot;</span>
              <span>Target: {activeProject.target}</span>
            </div>

            <div className="ao-body">
              <h3>Description</h3>
              <p>{activeProject.description}</p>

              <h3>Progress</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div className="proj-card-bar" style={{ flex: 1, height: 6 }}>
                  <div className="proj-card-bar-fill" style={{ width: `${activeProject.progress}%`, background: activeProject.productColor }} />
                </div>
                <span style={{ fontFamily: "var(--ff)", fontSize: 13, fontWeight: 400, color: "var(--text)" }}>{activeProject.progress}%</span>
              </div>

              <h3>Details</h3>
              <ul>
                <li><strong>Product:</strong> {activeProject.product}</li>
                <li><strong>Status:</strong> {activeProject.status.charAt(0).toUpperCase() + activeProject.status.slice(1)}</li>
                <li><strong>Team Lead:</strong> {activeProject.lead}</li>
                <li><strong>Target Completion:</strong> {activeProject.target}</li>
              </ul>

              <p style={{ marginTop: 24, fontSize: 13, color: "var(--muted2)" }}>
                Full project details and updates will be synced from Notion. Check back for real-time progress.
              </p>
            </div>
          </div>

          <button className="ao-close" onClick={() => setActiveProject(null)}>
            &larr; Back to projects
          </button>
        </div>
      )}

      {/* ─────── LOGOUT CONFIRMATION MODAL ─────── */}
      {showLogoutModal && (
        <div className="logout-overlay" onClick={() => setShowLogoutModal(false)}>
          <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="logout-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
            <h3 className="logout-modal-title">Sign out of Investor Portal?</h3>
            <p className="logout-modal-desc">You will need to log in again to access your dashboard, documents, and confidential briefings.</p>
            <div className="logout-modal-actions">
              <button className="logout-modal-cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <a
                href="#"
                className="logout-modal-confirm"
                data-ms-action="logout"
                onClick={(e) => {
                  e.preventDefault();
                  const ms = (window as unknown as { $memberstackDom?: { logout: () => Promise<void> } }).$memberstackDom;
                  if (ms) {
                    ms.logout().then(() => {
                      window.location.href = "/login";
                    });
                  } else {
                    window.location.href = "/login";
                  }
                }}
              >Sign Out</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
