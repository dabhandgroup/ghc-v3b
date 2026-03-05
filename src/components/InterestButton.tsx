"use client";

import { useState, useEffect, useCallback } from "react";
import { getPlanIdForSlug, GENERIC_PLAN_ID } from "@/data/project-plans";

interface InterestButtonProps {
  projectSlug: string;
  projectName: string;
  planId?: string;
}

export default function InterestButton({ projectSlug, projectName, planId }: InterestButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const resolvedPlanId = planId || getPlanIdForSlug(projectSlug) || GENERIC_PLAN_ID;

  // Check if user already follows this project on mount
  useEffect(() => {
    (async () => {
      try {
        const ms = (window as any).$memberstackDom;
        if (!ms) return;
        const member = await ms.getCurrentMember();
        if (!member?.data) return;
        const plans: any[] = member.data.planConnections || [];
        if (plans.some((p: any) => p.planId === resolvedPlanId && p.status === "ACTIVE")) {
          setState("done");
        }
      } catch { /* not logged in or ms not ready */ }
    })();
  }, [resolvedPlanId]);

  const handleClick = useCallback(async () => {
    setState("loading");
    try {
      const ms = (window as any).$memberstackDom;
      if (ms) {
        const member = await ms.getCurrentMember();
        if (member?.data) {
          // Existing user — add the project-specific plan
          await ms.addPlan({ planId: resolvedPlanId });
          setState("done");
          return;
        }
      }
      // New user — redirect to signup with project context
      window.location.href = `/signup?project=${projectSlug}&plan=${resolvedPlanId}`;
    } catch {
      // Fallback: redirect to signup
      window.location.href = `/signup?project=${projectSlug}`;
    }
  }, [projectSlug, resolvedPlanId]);

  if (state === "done") {
    return (
      <button className="lt-btn-interest lt-btn-interest-done" disabled>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Following {projectName}
      </button>
    );
  }

  return (
    <button
      className="lt-btn-interest"
      onClick={handleClick}
      disabled={state === "loading"}
    >
      {state === "loading" ? (
        "Processing\u2026"
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
          Register Interest
        </>
      )}
    </button>
  );
}
