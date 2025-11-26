import About from "@/components/about/about";
import Faq from "@/components/faq/faq";
import Features from "@/components/features/features";
import Hero from "@/components/hero/hero";
import LogosMarquee from "@/components/logosMarquee/logosMarquee";
import DashboardPreview from "@/components/dashboardPreview/dashboardPreview";
import Issues from "@/components/issues/issues";
import Solution from "@/components/solution/solution";
import Showcase from "@/components/showcase/showcase";
import { showcaseCards } from "@/components/showcase/showcaseData";
import Team from "@/components/team/team";
import Contact from "@/components/contact/contact";
import TextScroll from "@/components/textScroll/textScroll";
import Timeline from "@/components/timeline/timeline";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <LogosMarquee />
        <DashboardPreview />
        <Issues />
        <Showcase cards={showcaseCards} />
        <Solution />
        <Features />
        <Timeline />
        <About />
        <Team />
        <Faq />
        <TextScroll />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
