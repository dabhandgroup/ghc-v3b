import type { Metadata } from "next";
import PortalClient from "@/components/PortalClient";

export const metadata: Metadata = {
  title: "Investor Portal \u2014 GHC",
  description: "GHC Investor Portal \u2014 Confidential briefings and portfolio updates.",
};

export default function InvestorPortalHomePage() {
  return <PortalClient />;
}
