/**
 * MemberStack plan IDs for each GHC portfolio project.
 *
 * Generic plan ("Apply Now") gives base investor portal access.
 * Project-specific plans gate content per-project — added/removed
 * via $memberstackDom.addPlan() / removePlan().
 */

export interface ProjectPlan {
  slug: string;
  name: string;
  planId: string;
  color: string;
  logo?: string;
}

/** Generic investor portal plan (base access) */
export const GENERIC_PLAN_ID = "pln_investor-portal-mep90u6c";

/** Project-specific plans */
export const PROJECT_PLANS: ProjectPlan[] = [
  { slug: "royale",       name: "Royale",       planId: "pln_royale-com-uqi05zf",    color: "#fbbf24", logo: "/images/logos/royale.svg" },
  { slug: "wardrobe",     name: "Wardrobe",     planId: "pln_wardrobe-veta0of8",     color: "#f472b6", logo: "/images/logos/wardrobe.svg" },
  { slug: "greatgaming",  name: "GreatGaming",  planId: "pln_great-gaming-16v70foj", color: "#34d399", logo: "/images/logos/greatgaming.svg" },
  { slug: "profiles",     name: "Profiles.io",  planId: "pln_profiles-io-82m05sn",   color: "#6b9fff", logo: "/images/logos/profiles.svg" },
  { slug: "platformone",  name: "Platform One", planId: "pln_platform-one-avva0fi8", color: "#a78bfa", logo: "/images/logos/platformone.svg" },
];

/** Lookup plan ID by project slug */
export function getPlanIdForSlug(slug: string): string | undefined {
  return PROJECT_PLANS.find((p) => p.slug === slug)?.planId;
}

/** Lookup project slug by plan ID */
export function getSlugForPlanId(planId: string): string | undefined {
  return PROJECT_PLANS.find((p) => p.planId === planId)?.slug;
}
