import type { Metadata } from "next";
import ResetPasswordClient from "@/components/ResetPasswordClient";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Reset Password — GHC",
  description: "Set a new password for your GHC investor portal.",
};

export default function ResetPasswordPage() {
  return (
    <>
      <ScrollReveal />
      <ResetPasswordClient />
    </>
  );
}
