import { NextResponse } from "next/server";

/*
 * Notion → Kanban API route
 *
 * This route fetches cards from a Notion database and returns them
 * in the shape the portal kanban board expects.
 *
 * SETUP:
 * 1. Create a Notion integration at https://www.notion.so/my-integrations
 * 2. Share your Notion database with the integration
 * 3. Add env vars to .env.local:
 *      NOTION_API_KEY=secret_xxxxxx
 *      NOTION_KANBAN_DB=<your-database-id>
 *
 * NOTION DATABASE COLUMNS (expected property names):
 *   - Title        (title)       → card title
 *   - Status       (select)      → "Backlog" | "In Progress" | "Review" | "Done"
 *   - Description  (rich_text)   → card description
 *   - Product      (select)      → product name e.g. "Profiles.io"
 *   - ProductColor (rich_text)   → hex colour e.g. "#6b9fff" (optional, defaults by product)
 *   - Priority     (select)      → "Low" | "Medium" | "High"
 *   - Assignee     (rich_text)   → team / person name
 *   - Due          (date)        → due date
 */

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

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

/* ── helpers ── */
const statusMap: Record<string, KanbanStatus> = {
  Backlog: "backlog",
  "In Progress": "in_progress",
  Review: "review",
  Done: "done",
};

const defaultColors: Record<string, string> = {
  "Profiles.io": "#6b9fff",
  Wardrobe: "#f472b6",
  Royale: "#fbbf24",
  GreatGaming: "#34d399",
  Corporate: "#a78bfa",
};

function richTextToPlain(rt: { plain_text: string }[]): string {
  return (rt || []).map((t) => t.plain_text).join("");
}

/* ── route handler ── */
export async function GET() {
  const apiKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_KANBAN_DB;

  if (!apiKey || !dbId) {
    return NextResponse.json(
      { cards: [], error: "Notion credentials not configured. Using client-side fallback data." },
      { status: 200 }
    );
  }

  try {
    const res = await fetch(`${NOTION_API}/databases/${dbId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [{ property: "Status", direction: "ascending" }],
      }),
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Notion API error:", res.status, body);
      return NextResponse.json(
        { cards: [], error: `Notion API ${res.status}` },
        { status: 200 }
      );
    }

    interface NotionPage {
      id: string;
      properties: Record<string, {
        type: string;
        title?: { plain_text: string }[];
        select?: { name: string } | null;
        rich_text?: { plain_text: string }[];
        date?: { start?: string } | null;
      }>;
    }

    const data = await res.json();
    const cards: KanbanCard[] = (data.results as NotionPage[]).map((page) => {
      const props = page.properties;

      const product = props.Product?.select?.name || "Uncategorised";
      const colorRaw = props.ProductColor?.rich_text
        ? richTextToPlain(props.ProductColor.rich_text)
        : "";
      const statusRaw = props.Status?.select?.name || "Backlog";
      const priorityRaw = (props.Priority?.select?.name || "Medium").toLowerCase() as
        | "low"
        | "medium"
        | "high";

      return {
        id: page.id,
        title: props.Title?.title
          ? richTextToPlain(props.Title.title)
          : "Untitled",
        description: props.Description?.rich_text
          ? richTextToPlain(props.Description.rich_text)
          : "",
        status: statusMap[statusRaw] || "backlog",
        product,
        productColor: colorRaw || defaultColors[product] || "#6b9fff",
        priority: priorityRaw,
        assignee: props.Assignee?.rich_text
          ? richTextToPlain(props.Assignee.rich_text) || undefined
          : undefined,
        dueDate: props.Due?.date?.start || undefined,
      };
    });

    return NextResponse.json({ cards });
  } catch (err) {
    console.error("Failed to fetch Notion kanban:", err);
    return NextResponse.json(
      { cards: [], error: "Failed to connect to Notion" },
      { status: 200 }
    );
  }
}
