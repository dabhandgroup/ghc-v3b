import type { Metadata } from "next";
import LoginClient from "@/components/LoginClient";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Investor Login \u2014 GHC",
  description: "Sign in to your GHC investor portal.",
};

export default function LoginPage() {
  return (
    <>
      <ScrollReveal />
      <LoginClient />
    </>
  );
}
