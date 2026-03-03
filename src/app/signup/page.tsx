import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import SignupClient from "@/components/SignupClient";

export const metadata: Metadata = {
  title: "Apply for Investor Access \u2014 GHC",
  description: "Apply for access to the GHC confidential investor portal.",
};

export default function SignupPage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />
      <SignupClient />
      <Footer />
    </>
  );
}
