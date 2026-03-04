import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import LogoIcon from "@/components/LogoIcon";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <ScrollReveal />
      <HomeClient />
      <Footer />
    </>
  );
}
