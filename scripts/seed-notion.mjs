#!/usr/bin/env node
/**
 * Notion Setup Script — GHC Investor Portal
 *
 * Creates two Notion databases and seeds them with initial data:
 *   1. Kanban Board   → drives the Roadmap tab in the portal
 *   2. Portal Content  → drives the Projects / BTS posts in the portal
 *
 * PREREQUISITES:
 *   1. Create a Notion integration: https://www.notion.so/my-integrations
 *      - Enable: Read content, Insert content, Update content
 *   2. Create a parent page in Notion where databases will live
 *   3. Share that page with your integration (Share → Connections → Invite)
 *   4. Set env vars:
 *        NOTION_API_KEY=ntn_xxxxx        (integration secret)
 *        NOTION_PARENT_PAGE_ID=xxxxxxx   (32-char hex from page URL)
 *
 * USAGE:
 *   node scripts/seed-notion.mjs
 *
 * OUTPUT:
 *   Prints the database IDs to add to .env.local:
 *     NOTION_KANBAN_DB=xxx
 *     NOTION_PORTAL_CONTENT_DB=xxx
 */

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

if (!process.env.NOTION_API_KEY || !PARENT_PAGE_ID) {
  console.error(
    "\n✗ Missing env vars. Set NOTION_API_KEY and NOTION_PARENT_PAGE_ID.\n"
  );
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ─────────────────────────────────────────────────────────────
 * 1. KANBAN BOARD DATABASE
 * ────────────────────────────────────────────────────────────── */
async function createKanbanBoard() {
  console.log("Creating Kanban Board database…");
  const db = await notion.databases.create({
    parent: { type: "page_id", page_id: PARENT_PAGE_ID },
    title: [{ type: "text", text: { content: "Kanban Board" } }],
    properties: {
      Title: { title: {} },
      Status: {
        select: {
          options: [
            { name: "Backlog", color: "gray" },
            { name: "In Progress", color: "blue" },
            { name: "Review", color: "yellow" },
            { name: "Done", color: "green" },
          ],
        },
      },
      Description: { rich_text: {} },
      Product: {
        select: {
          options: [
            { name: "Profiles.io", color: "blue" },
            { name: "Wardrobe", color: "pink" },
            { name: "Royale", color: "yellow" },
            { name: "GreatGaming", color: "green" },
            { name: "Corporate", color: "purple" },
          ],
        },
      },
      ProductColor: { rich_text: {} },
      Priority: {
        select: {
          options: [
            { name: "Low", color: "green" },
            { name: "Medium", color: "yellow" },
            { name: "High", color: "red" },
          ],
        },
      },
      Assignee: { rich_text: {} },
      Due: { date: {} },
    },
  });
  console.log(`  ✓ Kanban Board ID: ${db.id}`);
  return db.id;
}

/* ─────────────────────────────────────────────────────────────
 * 2. PORTAL CONTENT DATABASE
 * ────────────────────────────────────────────────────────────── */
async function createPortalContent() {
  console.log("Creating Portal Content database…");
  const db = await notion.databases.create({
    parent: { type: "page_id", page_id: PARENT_PAGE_ID },
    title: [{ type: "text", text: { content: "Portal Content" } }],
    properties: {
      Title: { title: {} },
      Body: { rich_text: {} },
      Category: {
        select: {
          options: [
            { name: "Quarterly Update", color: "blue" },
            { name: "Product Update", color: "purple" },
            { name: "Behind the Scenes", color: "pink" },
            { name: "Announcement", color: "orange" },
            { name: "Financial", color: "green" },
          ],
        },
      },
      Product: {
        select: {
          options: [
            { name: "Profiles.io", color: "blue" },
            { name: "Wardrobe", color: "pink" },
            { name: "Royale", color: "yellow" },
            { name: "GreatGaming", color: "green" },
            { name: "Corporate", color: "purple" },
          ],
        },
      },
      ProductColor: { rich_text: {} },
      Published: { checkbox: {} },
      Featured: { checkbox: {} },
      Date: { date: {} },
      Excerpt: { rich_text: {} },
    },
  });
  console.log(`  ✓ Portal Content ID: ${db.id}`);
  return db.id;
}

/* ─────────────────────────────────────────────────────────────
 * 3. SEED KANBAN CARDS
 * ────────────────────────────────────────────────────────────── */
async function seedKanban(dbId) {
  console.log("Seeding kanban cards…");
  const cards = [
    {
      Title: t("Profiles.io — Intelligence Module v2"),
      Status: sel("In Progress"),
      Description: rt("Build the next-gen data intelligence pipeline for enriched record scoring and real-time entity resolution."),
      Product: sel("Profiles.io"),
      ProductColor: rt("#6b9fff"),
      Priority: sel("High"),
      Assignee: rt("Engineering"),
      Due: d("2026-03-15"),
    },
    {
      Title: t("Wardrobe — APAC Expansion (TH / MY)"),
      Status: sel("In Progress"),
      Description: rt("Localise Wardrobe for Thailand and Malaysia markets. Includes payment integration, language packs, and partner onboarding."),
      Product: sel("Wardrobe"),
      ProductColor: rt("#f472b6"),
      Priority: sel("High"),
      Assignee: rt("Growth"),
      Due: d("2026-04-01"),
    },
    {
      Title: t("Royale — Tournament SDK"),
      Status: sel("Backlog"),
      Description: rt("Open-source the tournament orchestration SDK so third-party operators can plug into the Royale infrastructure."),
      Product: sel("Royale"),
      ProductColor: rt("#fbbf24"),
      Priority: sel("Medium"),
      Assignee: rt("Platform"),
      Due: d("2026-06-01"),
    },
    {
      Title: t("GreatGaming — Content Pipeline Automation"),
      Status: sel("Review"),
      Description: rt("Automate the editorial and distribution pipeline for gaming content. Reduce time-to-publish from 48h to under 4h."),
      Product: sel("GreatGaming"),
      ProductColor: rt("#34d399"),
      Priority: sel("Medium"),
      Assignee: rt("Content Ops"),
      Due: d("2026-03-10"),
    },
    {
      Title: t("Profiles.io — 1B Records Milestone"),
      Status: sel("Backlog"),
      Description: rt("Scale the data marketplace to 1 billion enriched records. Requires infrastructure upgrades and new data-partner integrations."),
      Product: sel("Profiles.io"),
      ProductColor: rt("#6b9fff"),
      Priority: sel("High"),
      Assignee: rt("Data Eng"),
      Due: d("2026-09-01"),
    },
    {
      Title: t("Wardrobe — AI Styling Engine v3"),
      Status: sel("Backlog"),
      Description: rt("Train next-generation outfit recommendation model on 2M+ labelled outfits. Improve match accuracy to >92%."),
      Product: sel("Wardrobe"),
      ProductColor: rt("#f472b6"),
      Priority: sel("Medium"),
      Assignee: rt("ML Team"),
      Due: d("2026-06-01"),
    },
    {
      Title: t("Series A — Investor Materials Refresh"),
      Status: sel("Done"),
      Description: rt("Update pitch deck, financial model, and data room documents ahead of the Series A roadshow."),
      Product: sel("Corporate"),
      ProductColor: rt("#a78bfa"),
      Priority: sel("High"),
      Assignee: rt("Finance"),
    },
    {
      Title: t("Royale — 99.99% Uptime Target"),
      Status: sel("In Progress"),
      Description: rt("Migrate critical services to multi-region deployment. Implement auto-failover and chaos testing suite."),
      Product: sel("Royale"),
      ProductColor: rt("#fbbf24"),
      Priority: sel("High"),
      Assignee: rt("SRE"),
      Due: d("2026-03-31"),
    },
    {
      Title: t("GreatGaming — Tier-2 Operator Deals"),
      Status: sel("Review"),
      Description: rt("Close distribution agreements with 5 additional tier-2 operators across SEA and ANZ regions."),
      Product: sel("GreatGaming"),
      ProductColor: rt("#34d399"),
      Priority: sel("Medium"),
      Assignee: rt("Partnerships"),
      Due: d("2026-04-15"),
    },
    {
      Title: t("Portal — Investor NPS & Feedback Module"),
      Status: sel("Backlog"),
      Description: rt("Add quarterly NPS survey and open feedback form directly in the investor portal."),
      Product: sel("Corporate"),
      ProductColor: rt("#a78bfa"),
      Priority: sel("Low"),
      Assignee: rt("Product"),
      Due: d("2026-06-01"),
    },
  ];

  for (const properties of cards) {
    await notion.pages.create({ parent: { database_id: dbId }, properties });
    await sleep(350);
  }
  console.log(`  ✓ Seeded ${cards.length} kanban cards`);
}

/* ─────────────────────────────────────────────────────────────
 * 4. SEED PORTAL CONTENT (BTS posts)
 * ────────────────────────────────────────────────────────────── */
async function seedContent(dbId) {
  console.log("Seeding portal content…");
  const posts = [
    {
      Title: t("Building the Intelligence Module — Behind the Architecture"),
      Body: rt("A deep dive into how we designed the real-time entity resolution pipeline that powers Profiles.io's Intelligence Module v2."),
      Category: sel("Behind the Scenes"),
      Product: sel("Profiles.io"),
      ProductColor: rt("#6b9fff"),
      Published: { checkbox: true },
      Featured: { checkbox: true },
      Date: d("2026-02-20"),
      Excerpt: rt("A deep dive into the real-time entity resolution pipeline powering the Intelligence Module v2."),
    },
    {
      Title: t("Wardrobe APAC Expansion — Lessons From Singapore & Hong Kong"),
      Body: rt("What we learned launching a peer-to-peer fashion marketplace in two new markets simultaneously."),
      Category: sel("Behind the Scenes"),
      Product: sel("Wardrobe"),
      ProductColor: rt("#f472b6"),
      Published: { checkbox: true },
      Featured: { checkbox: false },
      Date: d("2026-02-12"),
      Excerpt: rt("Lessons from our dual-market APAC launch and the operational playbook for Thailand."),
    },
    {
      Title: t("How We Hit 99.98% Uptime on Royale"),
      Body: rt("The infrastructure decisions behind Royale's reliability story, and the multi-region migration underway to reach four-nines."),
      Category: sel("Behind the Scenes"),
      Product: sel("Royale"),
      ProductColor: rt("#fbbf24"),
      Published: { checkbox: true },
      Featured: { checkbox: false },
      Date: d("2026-02-05"),
      Excerpt: rt("Infrastructure decisions behind 99.98% uptime and the path to 99.99%."),
    },
    {
      Title: t("Automating the Content Pipeline — From 48h to 4h"),
      Body: rt("How we rebuilt GreatGaming's editorial and distribution pipeline to reduce time-to-publish by 12x."),
      Category: sel("Behind the Scenes"),
      Product: sel("GreatGaming"),
      ProductColor: rt("#34d399"),
      Published: { checkbox: true },
      Featured: { checkbox: false },
      Date: d("2026-01-28"),
      Excerpt: rt("Reducing content publish time from 48 hours to under 4 hours with automation."),
    },
    {
      Title: t("Series A Preparation — What We've Done and What's Next"),
      Body: rt("An inside look at our Series A preparation: updated financials, refined pitch, and investor conversations."),
      Category: sel("Financial"),
      Product: sel("Corporate"),
      ProductColor: rt("#a78bfa"),
      Published: { checkbox: true },
      Featured: { checkbox: false },
      Date: d("2026-01-15"),
      Excerpt: rt("Inside look at Series A prep: financials, pitch deck, and early conversations with 14 firms."),
    },
  ];

  for (const properties of posts) {
    await notion.pages.create({ parent: { database_id: dbId }, properties });
    await sleep(350);
  }
  console.log(`  ✓ Seeded ${posts.length} portal content posts`);
}

/* ── property helpers ── */
function t(text) {
  return { title: [{ text: { content: text } }] };
}
function rt(text) {
  return { rich_text: [{ text: { content: text } }] };
}
function sel(name) {
  return { select: { name } };
}
function d(start) {
  return { date: { start } };
}

/* ─────────────────────────────────────────────────────────────
 * MAIN
 * ────────────────────────────────────────────────────────────── */
async function main() {
  console.log("\n🔧 GHC Notion Setup\n");

  const kanbanId = await createKanbanBoard();
  await sleep(500);
  const contentId = await createPortalContent();
  await sleep(500);

  await seedKanban(kanbanId);
  await seedContent(contentId);

  console.log("\n────────────────────────────────────────");
  console.log("✓ Setup complete! Add these to .env.local:\n");
  console.log(`NOTION_KANBAN_DB=${kanbanId}`);
  console.log(`NOTION_PORTAL_CONTENT_DB=${contentId}`);
  console.log("────────────────────────────────────────\n");
}

main().catch((err) => {
  console.error("\n✗ Error:", err.message);
  process.exit(1);
});
