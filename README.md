# GHC Website

Static HTML/CSS/JS website for GHC — no build tools, no dependencies, no frameworks. Open any `.html` file directly in a browser or push to any static host (Netlify, Vercel, GitHub Pages).

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main landing page |
| `careers.html` | Careers page with job listings & detail overlay |
| `case-study-profiles.html` | Profiles.io case study |
| `case-study-wardrobe.html` | Wardrobe case study |
| `case-study-royale.html` | Royale case study |
| `case-study-greatgaming.html` | GreatGaming case study |
| `signup.html` | Investor access application (3-step form) |
| `login.html` | Investor portal login |
| `portal.html` | Investor portal dashboard with confidential articles |

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Settings → Pages → Branch: `main` → Folder: `/ (root)`
3. Live at `https://yourusername.github.io/repo-name/`

## Deploy to Netlify (drag & drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag the `ghc-website` folder onto the deploy area
3. Live instantly with a Netlify subdomain

## Notes

- All styles are inlined — no external CSS files needed
- Fonts loaded from Google Fonts CDN (Sora + DM Sans)
- Images on case study pages load from Unsplash CDN (swap with real assets when ready)
- Auth pages (login/signup/portal) are UI prototypes — wire to a backend when ready
- `portal.html` login: any email + password combo works for demo purposes
