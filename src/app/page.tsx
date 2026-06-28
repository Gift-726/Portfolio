import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CaseStudies from "@/components/CaseStudies";
import ArtifactsGrid from "@/components/ArtifactsGrid";
import AboutMe from "@/components/AboutMe";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <CaseStudies />
        <ArtifactsGrid />
        <AboutMe />
      </main>
      <ContactFooter />
    </>
  );
}
