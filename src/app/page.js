import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Programs from "@/components/Progrmas";
import Prices from "@/components/Prices";
import Classes from "@/components/Classes";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Features />
      <Programs />
      <Prices />
      <Classes />
      <Footer />
    </div>
  );
}
