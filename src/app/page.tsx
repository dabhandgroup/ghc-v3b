import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import LogoIcon from "@/components/LogoIcon";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />

      {/* HERO */}
      <section className="lt-hero" id="home">
        {/* Background video */}
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
            Making <span className="lt-gradient-text">Waves</span><span className="lt-accent">.</span>
          </h1>
          <p className="lt-hero-sub rv d2">
            Entertainment, data, fashion, gaming, nightlife — we build disruptive ventures from Australia with global reach and relentless ambition.
          </p>
          <div className="lt-hero-acts rv d3">
            <Link href="#products" className="lt-btn-primary">Our ventures</Link>
            <Link href="#about" className="lt-btn-ghost">Our story &rarr;</Link>
          </div>
        </div>
        <div className="lt-hero-scroll">
          <span>Scroll</span>
          <div className="lt-scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="lt-mq">
        <div className="lt-mq-track">
          {[0, 1].map((k) => (
            <div className="lt-mq-set" key={k} aria-hidden={k > 0 ? "true" : undefined}>
              <Link href="/case-study/profiles" className="lt-mq-item"><Image src="/images/logos/profiles.svg" alt="Profiles" width={173} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
              <Link href="/case-study/wardrobe" className="lt-mq-item"><Image src="/images/logos/wardrobe.svg" alt="Wardrobe" width={238} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
              <Link href="/case-study/royale" className="lt-mq-item"><Image src="/images/logos/royale.svg" alt="Royale" width={151} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
              <Link href="/case-study/greatgaming" className="lt-mq-item"><Image src="/images/logos/greatgaming.svg" alt="Great Gaming" width={228} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
              <Link href="/case-study/platformone" className="lt-mq-item"><Image src="/images/logos/platformone-white.png" alt="Platform One" width={210} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
              <Link href="/case-study/gritentertainment" className="lt-mq-item"><Image src="/images/logos/gritentertainment.svg" alt="Grit Entertainment" width={257} height={28} unoptimized className="lt-mq-logo" /></Link>
              <span className="lt-mq-sep" />
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="lt-about" id="about">
        <div className="lt-ct">
          <div className="lt-about-intro">
            <div className="lt-label rv">Who we are</div>
            <h2 className="lt-about-h rv d1">Building the future<br />of entertainment.</h2>
            <p className="lt-about-p rv d2">
              We&apos;re an Australian-based technology group building disruptive ventures across six verticals. Every venture starts with a conviction that something in the world is broken — and that we&apos;re the ones to fix it.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/platform-1.jpg"
            alt="GHC entertainment"
            className="lt-about-img rv d2"
          />
          <div className="lt-about-cards">
            {[
              { num: "01", title: "Global from day one", desc: "Every venture is built for every market. Australia is home — everywhere else is the playground." },
              { num: "02", title: "Ship fast, iterate faster", desc: "Small teams, high conviction. We move faster than anyone else because we have to." },
              { num: "03", title: "Disrupt or don\u2019t bother", desc: "Incremental improvements bore us. Every venture targets a fundamentally broken market." },
              { num: "04", title: "Data in everything", desc: "Signal over noise. Every decision, every venture, every pivot rooted in real intelligence." },
            ].map((item, i) => (
              <div key={item.num} className={`lt-about-card rv${i > 0 ? ` d${i}` : ""}`}>
                <span className="lt-about-num">{item.num}</span>
                <h4 className="lt-about-card-h">{item.title}</h4>
                <p className="lt-about-card-p">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="lt-about-cta rv d3">
            <Link href="#products" className="lt-btn-primary">See what we&apos;ve built &rarr;</Link>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="lt-ventures" id="products">
        <div className="lt-ct">
          <div className="lt-ventures-hd rv">
            <div className="lt-label">What we&apos;ve built</div>
            <h2 className="lt-ventures-h">Six ventures.<br />Six industries.</h2>
            <p className="lt-ventures-sub">Each one targets a broken market and reimagines it from first principles.</p>
          </div>
          <div className="lt-ventures-grid">
            {[
              { slug: "profiles", img: "/images/profiles.jpg", num: "01", cat: "Data Intelligence", name: "Profiles", desc: "The world\u2019s largest database. Access 500M+ global data records and use AI to instantly find and contact ideal buyers, influencers, or investors \u2014 at any scale.", url: "profiles.io", href: "https://profiles.io", color: "#2563eb" },
              { slug: "wardrobe", img: "/images/wardrobe.jpg", num: "02", cat: "Fashion Tech", name: "Wardrobe", desc: "The world\u2019s first peer-to-peer fashion rental marketplace. Repairing a misaligned fashion economy \u2014 making fashion circular, accessible, and purposeful.", url: "wardrobe.world", href: "https://wardrobe.world", color: "#d97706" },
              { slug: "royale", img: "/images/royale-world.jpg", num: "03", cat: "Online Gaming", name: "Royale", desc: "Next-generation online gaming and casino platform. Provably fair, beautifully designed, engineered to redefine what gaming online looks and feels like.", url: "royale.world", href: "https://royale.world", color: "#7c3aed" },
              { slug: "greatgaming", img: "/images/gaming.jpg", num: "04", cat: "Live Casino Studio", name: "GreatGaming", desc: "A full-stack live dealer and casino games studio. World-class production, next-gen mechanics, and a game library built to power the biggest operators.", url: "greatgaming.io", href: "https://greatgaming.io", color: "#0891b2" },
              { slug: "platformone", img: "/images/platform-1.jpg", num: "05", cat: "Entertainment & Nightlife", name: "Platform One", desc: "Melbourne\u2019s premier nightclub in the historic Banana Alley vaults. Three rooms, world-class production, and a tech-driven operations stack.", url: "platformone.com.au", href: "https://platformone.com.au", color: "#db2777" },
              { slug: "gritentertainment", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80&fit=crop", num: "06", cat: "Entertainment & Media", name: "Grit Entertainment", desc: "Full-stack entertainment and events company. Large-scale events, artist management, and venue operations across Australia powered by proprietary technology.", url: "gritentertainment.com.au", href: "https://gritentertainment.com.au", color: "#ea580c" },
            ].map((v, i) => (
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
          <p>Built in Australia.<br />Deployed everywhere.</p>
        </div>
      </div>

      {/* STATS */}
      <div className="lt-stats">
        <div className="lt-stats-grid">
          <div className="lt-stat rv"><div className="lt-stat-n">500M<span className="lt-stat-sup">+</span></div><div className="lt-stat-d">Global data records inside Profiles.io</div></div>
          <div className="lt-stat rv d1"><div className="lt-stat-n">6<span className="lt-stat-sup">&times;</span></div><div className="lt-stat-d">Ventures disrupting industries simultaneously</div></div>
          <div className="lt-stat rv d2"><div className="lt-stat-n">1<span className="lt-stat-sup">st</span></div><div className="lt-stat-d">Peer-to-peer fashion rental marketplace globally</div></div>
          <div className="lt-stat rv d3"><div className="lt-stat-n">AU</div><div className="lt-stat-d">Made in Australia. Deployed everywhere on earth.</div></div>
        </div>
      </div>

      {/* CULTURE */}
      <section className="lt-culture" id="contact">
        <div className="lt-ct">
          <div className="lt-culture-grid">
            <div className="lt-culture-vis">
              <div className="lt-culture-icon"><LogoIcon fill="#111" /></div>
              <div className="lt-culture-pins">
                <div className="lt-pin"><div className="lt-pin-dot" />Collingwood, Melbourne, VIC — HQ</div>
                <div className="lt-pin"><div className="lt-pin-dot" style={{ animationDelay: ".9s" }} />Global Remote Team</div>
                <div className="lt-pin"><div className="lt-pin-dot" style={{ animationDelay: "1.8s" }} />Ventures in 40+ Countries</div>
              </div>
            </div>
            <div className="lt-culture-text">
              <div className="lt-label rv">Our culture</div>
              <h2 className="lt-culture-h rv d1">Passion<br />at play.</h2>
              <p className="rv d2">We believe the best products come from people who are genuinely obsessed with what they&apos;re building. Our teams are small, global, and ruthlessly focused on outcomes over process.</p>
              <p className="rv d3">We don&apos;t think in products. We think in movements. Every venture in our portfolio started as a conviction that something in the world was fundamentally broken — and that we were the ones to fix it.</p>
              <Link href="/press" className="lt-btn-ghost rv d4" style={{ display: "inline-flex", marginTop: 28 }}>Press &amp; Media enquiries &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="lt-careers" id="careers">
        <div className="lt-ct">
          <div className="lt-careers-hd rv">
            <div><div className="lt-label">Work with us</div><h2 className="lt-careers-h">Open roles.</h2></div>
            <Link href="/careers" className="lt-btn-primary">View all roles &rarr;</Link>
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
          <div className="lt-label rv" style={{ justifyContent: "center", margin: "0 auto 20px", width: "fit-content", color: "rgba(255,255,255,0.6)" }}>Invest with us</div>
          <h2 className="lt-cta-h rv d1">Back the next wave.</h2>
          <p className="lt-cta-p rv d2">Get exclusive access to our portfolio, co-investment pipeline, and direct line to the founding team.</p>
          <div className="lt-cta-acts rv d3">
            <Link href="/investors" className="lt-btn-white">Investor access</Link>
            <Link href="/contact" className="lt-btn-glass">General enquiries &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
