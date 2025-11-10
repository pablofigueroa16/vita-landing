import About from "@/components/about/about";
import Faq from "@/components/faq/faq";
import Features from "@/components/features/features";
// import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Issues from "@/components/issues/issues";
import Solution from "@/components/solution/solution";
import Team from "@/components/team/team";
import Contact from "@/components/contact/contact";
import TextScroll from "@/components/textScroll/textScroll";
import Timeline from "@/components/timeline/timeline";
import MobileNavbar from "@/components/mobileNavbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Issues />
        <About />
        <Solution />
        <Features />
        <Timeline />
        <Team />
        <Faq />
        <TextScroll />
        <Contact />
        {/* <Footer /> */}
        <MobileNavbar />;
      </div>
    </div>
  );
}
