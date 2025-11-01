import About from "@/components/about/about";
import Faq from "@/components/faq/faq";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Issues from "@/components/issues/issues";
import Solution from "@/components/solution/solution";
import Team from "@/components/team/team";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0A17] overflow-x-hidden">
      <Hero />
      <Issues />
      <About />
      <Solution />
      <Features />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
