"use client";

import Link from "next/link";
import LogoFull from "./LogoFull";
import DarkModeToggle from "./DarkModeToggle";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="ft-g">
        <div className="ft-brand">
          <LogoFull />
          <p>Building disruptive ventures in entertainment, data, fashion, gaming, and nightlife. Australian-made. Globally deployed.</p>
          <div className="ft-theme-toggle">
            <DarkModeToggle />
          </div>
        </div>
        <div className="ft-col">
          <h5>{t.ventures}</h5>
          <ul>
            <li><Link href="/case-study/royale">Royale.com</Link></li>
            <li><Link href="/case-study/wardrobe">Wardrobe</Link></li>
            <li><Link href="/case-study/greatgaming">GreatGaming</Link></li>
            <li><Link href="/case-study/profiles">Profiles</Link></li>
            <li><Link href="/case-study/platformone">Platform One</Link></li>
            <li><Link href="/case-study/gritentertainment">Grit Entertainment</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/#about">{t.about}</Link></li>
            <li><Link href="/careers">{t.careers}</Link></li>
            <li><Link href="/press">{t.press}</Link></li>
            <li><Link href="/contact">{t.contact}</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>{t.investors}</h5>
          <ul>
            <li><Link href="/login">Portal Login</Link></li>
            <li><Link href="/investors">Apply for Access</Link></li>
            <li><Link href="/contact">Direct Enquiry</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Legal</h5>
          <ul>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="ft-bot">
        <p>&copy; 2026 GHC Pty Ltd. {t.allRights}</p>
        <div className="ft-soc">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
