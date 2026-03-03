import type { Metadata } from "next";
import ForgotPasswordClient from "@/components/ForgotPasswordClient";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Forgot Password — GHC",
  description: "Reset your GHC investor portal password.",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <ScrollReveal />
      <ForgotPasswordClient />
    </>
  );
}
