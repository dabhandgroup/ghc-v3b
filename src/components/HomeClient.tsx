"use client";

import Link from "next/link";
import LogoIcon from "./LogoIcon";
import InterestButton from "./InterestButton";
import { useLang } from "./LanguageProvider";

const VENTURES = [
  { slug: "royale", img: "/images/royale-world.jpg", num: "01", cat: "Online Gaming", name: "Royale.com", desc: "Next-generation online gaming and casino platform. Provably fair, beautifully designed, engineered to redefine what gaming online looks and feels like.", url: "royale.com", href: "https://royale.com", color: "#2563eb" },
  { slug: "wardrobe", img: "/images/wardrobe.jpg", num: "02", cat: "Fashion Tech", name: "Wardrobe", desc: "The world\u2019s first peer-to-peer fashion rental marketplace. Repairing a misaligned fashion economy \u2014 making fashion circular, accessible, and purposeful.", url: "wardrobe.world", href: "https://wardrobe.world", color: "#0ea5e9" },
  { slug: "greatgaming", img: "/images/gaming.jpg", num: "03", cat: "Live Casino Studio", name: "GreatGaming", desc: "A full-stack live dealer and casino games studio. World-class production, next-gen mechanics, and a game library built to power the biggest operators.", url: "greatgaming.io", href: "https://greatgaming.io", color: "#0891b2" },
  { slug: "profiles", img: "/images/profiles.jpg", num: "04", cat: "Data Intelligence", name: "Profiles", desc: "The world\u2019s largest database. Access 500M+ global data records and use AI to instantly find and contact ideal buyers, influencers, or investors \u2014 at any scale.", url: "profiles.io", href: "https://profiles.io", color: "#2563eb" },
  { slug: "platformone", img: "/images/platform-1.jpg", num: "05", cat: "Entertainment & Nightlife", name: "Platform One", desc: "Melbourne\u2019s premier nightclub in the historic Banana Alley vaults. Three rooms, world-class production, and a tech-driven operations stack.", url: "platformone.com.au", href: "https://platformone.com.au", color: "#1d4ed8" },
  { slug: "gritentertainment", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80&fit=crop", num: "06", cat: "Entertainment & Media", name: "Grit Entertainment", desc: "Full-stack entertainment and events company. Large-scale events, artist management, and venue operations across Australia powered by proprietary technology.", url: "gritentertainment.com.au", href: "https://gritentertainment.com.au", color: "#3b82f6" },
];

const TEAM = [
  { name: "Fotios Tsouklas", role: "Co-Founder & CEO", img: "/images/team/fotios.jpg" },
  { name: "Daniel Galea", role: "Co-Founder & COO", img: "/images/team/daniel.jpg" },
  { name: "Head of Product", role: "Product", img: "/images/team/placeholder.jpg" },
  { name: "Head of Engineering", role: "Engineering", img: "/images/team/placeholder.jpg" },
  { name: "Head of Growth", role: "Growth", img: "/images/team/placeholder.jpg" },
  { name: "Head of Finance", role: "Finance", img: "/images/team/placeholder.jpg" },
];

const LOCATIONS = [
  { city: "Melbourne", country: "Australia", role: "Global HQ & Tech Hub", lat: -37.8, lng: 144.96 },
  { city: "Athens", country: "Greece", role: "European Operations", lat: 37.98, lng: 23.73 },
  { city: "London", country: "UK", role: "Business Development", lat: 51.51, lng: -0.13 },
  { city: "Manila", country: "Philippines", role: "Engineering Team", lat: 14.6, lng: 120.98 },
  { city: "Belgrade", country: "Serbia", role: "Development Team", lat: 44.79, lng: 20.47 },
];

const FLOOR_FEATURES = [
  { label: "Engineering Bay", desc: "Open-plan workspace for 40+ engineers" },
  { label: "Design Studio", desc: "Dedicated space for UI/UX and brand" },
  { label: "War Room", desc: "Strategy and product planning" },
  { label: "Broadcast Suite", desc: "Content production and streaming" },
  { label: "Collaboration Zone", desc: "Breakout areas and meeting pods" },
  { label: "Wellness Area", desc: "Kitchen, lounge, and recreation" },
];

export default function HomeClient() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="lt-hero" id="home">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="lt-hero-bg-vid"
          poster="https://platformone.com.au/wp-content/uploads/2024/05/IMG_1696-jpg.webp"
        >
          <source src="/assets/platformone-hero.mp4" type="video/mp4" />
          <source src="https://platformone.com.au/wp-content/uploads/2023/10/GIFS_19.mp4" type="video/mp4" />
        </video>
        <div className="lt-hero-overlay" />
        <div className="lt-hero-center">
          <h1 className="lt-hero-h rv d1">
            {t.slogan}<span className="lt-accent">.</span>
          </h1>
          <p className="lt-hero-sub rv d2">
            {t.heroSub}
          </p>
          <div className="lt-hero-acts rv d3">
            <Link href="#products" className="lt-btn-primary">{t.ourVentures}</Link>
            <Link href="#about" className="lt-btn-ghost">{t.ourStory} &rarr;</Link>
          </div>
        </div>
        <div className="lt-hero-scroll">
          <span>Scroll</span>
          <div className="lt-scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="lt-about" id="about">
        <div className="lt-ct">
          <div className="lt-about-intro">
            <div className="lt-label rv">{t.whoWeAre}</div>
            <h2 className="lt-about-h rv d1" style={{ whiteSpace: "pre-line" }}>{t.aboutTitle}</h2>
            <p className="lt-about-p rv d2">{t.aboutDesc}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/platform-1.jpg"
            alt="GHC entertainment"
            className="lt-about-img rv d2"
          />
          <div className="lt-about-cards">
            {[
              { num: "01", title: t.globalDay1Title, desc: t.globalDay1Desc },
              { num: "02", title: t.shipFastTitle, desc: t.shipFastDesc },
              { num: "03", title: t.disruptTitle, desc: t.disruptDesc },
              { num: "04", title: t.dataTitle, desc: t.dataDesc },
            ].map((item, i) => (
              <div key={item.num} className={`lt-about-card rv${i > 0 ? ` d${i}` : ""}`}>
                <span className="lt-about-num">{item.num}</span>
                <h4 className="lt-about-card-h">{item.title}</h4>
                <p className="lt-about-card-p">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="lt-about-cta rv d3">
            <Link href="#products" className="lt-btn-primary">{t.seeBuilt} &rarr;</Link>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="lt-ventures" id="products">
        <div className="lt-ct">
          <div className="lt-ventures-hd rv">
            <div className="lt-label">{t.whatWeBuilt}</div>
            <h2 className="lt-ventures-h" style={{ whiteSpace: "pre-line" }}>{t.venturesTitle}</h2>
            <p className="lt-ventures-sub">{t.venturesSub}</p>
          </div>
          <div className="lt-ventures-grid">
            {VENTURES.map((v, i) => (
              <div key={v.slug} className={`lt-vc rv${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                <Link href={`/case-study/${v.slug}`} className="lt-vc-link" />
                <div className="lt-vc-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.img} alt={v.name} className="lt-vc-img" />
                  <a href={v.href} target="_blank" rel="noopener noreferrer" className="lt-vc-ext">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                </div>
                <div className="lt-vc-body">
                  <div className="lt-vc-meta">
                    <span className="lt-vc-num">{v.num} / 06</span>
                    <span className="lt-vc-cat" style={{ color: v.color }}>{v.cat}</span>
                  </div>
                  <h3 className="lt-vc-name">{v.name}</h3>
                  <p className="lt-vc-desc">{v.desc}</p>
                  <div className="lt-vc-foot">
                    <span className="lt-vc-url">{v.url}</span>
                    <span className="lt-vc-arrow">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" /></svg>
                    </span>
                  </div>
                  <div className="lt-vc-interest">
                    <InterestButton projectSlug={v.slug} projectName={v.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT BREAK */}
      <div className="lt-break">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&fit=crop" alt="" className="lt-break-img" />
        <div className="lt-break-overlay" />
        <div className="lt-break-inner rv">
          <p style={{ whiteSpace: "pre-line" }}>{t.builtAustralia}</p>
        </div>
      </div>

      {/* STATS */}
      <div className="lt-stats">
        <div className="lt-stats-grid">
          <div className="lt-stat rv"><div className="lt-stat-n">500M<span className="lt-stat-sup">+</span></div><div className="lt-stat-d">{t.stat1Label}</div></div>
          <div className="lt-stat rv d1"><div className="lt-stat-n">6<span className="lt-stat-sup">&times;</span></div><div className="lt-stat-d">{t.stat2Label}</div></div>
          <div className="lt-stat rv d2"><div className="lt-stat-n">1<span className="lt-stat-sup">st</span></div><div className="lt-stat-d">{t.stat3Label}</div></div>
          <div className="lt-stat rv d3"><div className="lt-stat-n">AU</div><div className="lt-stat-d">{t.stat4Label}</div></div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <section className="lt-team" id="team">
        <div className="lt-ct">
          <div className="lt-team-hd rv">
            <div className="lt-label">{t.ourTeam}</div>
            <h2 className="lt-team-title" style={{ whiteSpace: "pre-line" }}>{t.meetLeaders}</h2>
            <p className="lt-team-sub">{t.teamSub}</p>
          </div>
          <div className="lt-team-grid">
            {TEAM.map((member, i) => (
              <div key={member.name} className={`lt-team-card rv${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                <div className="lt-team-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="lt-team-info">
                  <h4 className="lt-team-name">{member.name}</h4>
                  <span className="lt-team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="lt-map" id="locations">
        <div className="lt-ct">
          <div className="lt-map-hd rv">
            <div className="lt-label">{t.globalPresence}</div>
            <h2 className="lt-map-title" style={{ whiteSpace: "pre-line" }}>{t.whereWeOperate}</h2>
          </div>
          <div className="lt-map-content">
            <div className="lt-map-visual rv">
              <div className="lt-map-globe">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.city}
                    className="lt-map-pin"
                    style={{
                      left: `${((loc.lng + 180) / 360) * 100}%`,
                      top: `${((90 - loc.lat) / 180) * 100}%`,
                    }}
                  >
                    <div className="lt-map-pin-dot" />
                    <div className="lt-map-pin-label">{loc.city}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lt-map-list">
              {LOCATIONS.map((loc, i) => (
                <div key={loc.city} className={`lt-map-loc rv${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                  <div className="lt-map-loc-dot" />
                  <div>
                    <h4 className="lt-map-loc-city">{loc.city}, {loc.country}</h4>
                    <span className="lt-map-loc-role">{loc.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH HUB */}
      <section className="lt-hub" id="hub">
        <div className="lt-ct">
          <div className="lt-hub-grid">
            <div className="lt-hub-text">
              <div className="lt-label rv">{t.techHub}</div>
              <h2 className="lt-hub-title rv d1" style={{ whiteSpace: "pre-line" }}>{t.techHubTitle}</h2>
              <p className="lt-hub-desc rv d2">{t.techHubDesc}</p>
              <div className="lt-hub-features rv d3">
                {FLOOR_FEATURES.map((f) => (
                  <div key={f.label} className="lt-hub-feature">
                    <h5>{f.label}</h5>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lt-hub-visual rv d2">
              <div className="lt-hub-floorplan">
                <div className="lt-hub-fp-inner">
                  <div className="lt-hub-fp-label">48 Smith Street</div>
                  <div className="lt-hub-fp-label" style={{ top: "30%", left: "15%" }}>Engineering</div>
                  <div className="lt-hub-fp-label" style={{ top: "50%", left: "60%" }}>Design</div>
                  <div className="lt-hub-fp-label" style={{ top: "70%", left: "30%" }}>Operations</div>
                  <div className="lt-hub-fp-grid" />
                </div>
              </div>
              <p className="lt-hub-address">48 Smith Street, Collingwood VIC 3066</p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="lt-culture" id="contact">
        <div className="lt-ct">
          <div className="lt-culture-grid">
            <div className="lt-culture-vis">
              <div className="lt-culture-icon"><LogoIcon fill="#111" /></div>
              <div className="lt-culture-pins">
                <div className="lt-pin"><div className="lt-pin-dot" />{t.hqLocation}</div>
                <div className="lt-pin"><div className="lt-pin-dot" style={{ animationDelay: ".9s" }} />{t.globalTeam}</div>
                <div className="lt-pin"><div className="lt-pin-dot" style={{ animationDelay: "1.8s" }} />{t.venturesCountries}</div>
              </div>
            </div>
            <div className="lt-culture-text">
              <div className="lt-label rv">{t.ourCulture}</div>
              <h2 className="lt-culture-h rv d1" style={{ whiteSpace: "pre-line" }}>{t.cultureTitle}</h2>
              <p className="rv d2">{t.cultureP1}</p>
              <p className="rv d3">{t.cultureP2}</p>
              <Link href="/press" className="lt-btn-ghost rv d4" style={{ display: "inline-flex", marginTop: 28 }}>{t.pressMedia} &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS */}
      <section className="lt-ir" id="investor-relations">
        <div className="lt-ct">
          <div className="lt-ir-grid">
            <div className="lt-ir-text">
              <div className="lt-label rv">{t.investorRelations}</div>
              <h2 className="lt-ir-title rv d1" style={{ whiteSpace: "pre-line" }}>{t.irTitle}</h2>
              <p className="lt-ir-desc rv d2">{t.irDesc}</p>
              <div className="lt-ir-acts rv d3">
                <Link href="/investor-portal/home" className="lt-btn-primary">{t.investorAccess}</Link>
                <Link href="/investors" className="lt-btn-ghost">{t.registerInterest} &rarr;</Link>
              </div>
            </div>
            <div className="lt-ir-features rv d2">
              {[
                { num: "01", title: "Quarterly Updates", desc: "Detailed product and financial updates every quarter." },
                { num: "02", title: "Early Access", desc: "First to know about new launches and strategic pivots." },
                { num: "03", title: "Direct Line", desc: "Direct access to the founding team. No gatekeepers." },
                { num: "04", title: "Co-Investment", desc: "Access to our co-investment pipeline across all ventures." },
              ].map((f) => (
                <div key={f.num} className="lt-ir-feat">
                  <span className="lt-ir-feat-num">{f.num}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="lt-careers" id="careers">
        <div className="lt-ct">
          <div className="lt-careers-hd rv">
            <div><div className="lt-label">{t.workWithUs}</div><h2 className="lt-careers-h">{t.openRoles}</h2></div>
            <Link href="/careers" className="lt-btn-primary">{t.viewAll} &rarr;</Link>
          </div>
          <div className="lt-roles rv">
            {[
              { title: "Senior Full-Stack Engineer", tags: ["Royale", "Remote", "Full-time"], href: "/careers/senior-full-stack-engineer" },
              { title: "AI / ML Engineer", tags: ["Profiles", "Remote", "Full-time"], href: "/careers/ai-ml-engineer" },
              { title: "Head of Growth", tags: ["Wardrobe", "Melbourne", "Full-time"], href: "/careers/head-of-growth" },
              { title: "Live Studio Producer", tags: ["GreatGaming", "On-site", "Full-time"], href: "/careers/live-studio-producer" },
              { title: "Product Designer", tags: ["All Ventures", "Remote", "Contract"], href: "/careers/product-designer" },
            ].map((role) => (
              <Link key={role.title} href={role.href} className="lt-role">
                <div className="lt-role-left">
                  <span className="lt-role-title">{role.title}</span>
                  <div className="lt-role-tags">{role.tags.map((tag) => <span key={tag} className="lt-role-tag">{tag}</span>)}</div>
                </div>
                <svg className="lt-role-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lt-cta">
        <div className="lt-cta-inner">
          <div className="lt-label rv" style={{ justifyContent: "center", margin: "0 auto 20px", width: "fit-content", color: "rgba(255,255,255,0.6)" }}>{t.investWithUs}</div>
          <h2 className="lt-cta-h rv d1">{t.backNextWave}</h2>
          <p className="lt-cta-p rv d2">{t.ctaDesc}</p>
          <div className="lt-cta-acts rv d3">
            <Link href="/investors" className="lt-btn-white">{t.investorAccess}</Link>
            <Link href="/contact" className="lt-btn-glass">{t.generalEnquiries} &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
