import Link from "next/link";
import LogoFull from "./LogoFull";

export default function Footer() {
  return (
    <footer>
      <div className="ft-g">
        <div className="ft-brand">
          <LogoFull fill="rgba(17,17,17,.85)" />
          <p>Building disruptive ventures in entertainment, data, fashion, gaming, and nightlife. Australian-made. Globally deployed.</p>
        </div>
        <div className="ft-col">
          <h5>Ventures</h5>
          <ul>
            <li><Link href="/case-study/profiles">Profiles</Link></li>
            <li><Link href="/case-study/wardrobe">Wardrobe</Link></li>
            <li><Link href="/case-study/royale">Royale</Link></li>
            <li><Link href="/case-study/greatgaming">GreatGaming</Link></li>
            <li><Link href="/case-study/platformone">Platform One</Link></li>
            <li><Link href="/case-study/gritentertainment">Grit Entertainment</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Investors</h5>
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
        <p>&copy; 2026 GHC Pty Ltd. All rights reserved.</p>
        <div className="ft-soc">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
