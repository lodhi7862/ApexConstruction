import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CEOMessage from "@/components/CEOMessage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { company, services } from "@/lib/data";

// JSON-LD structured data for richer search results.
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.name,
    slogan: company.tagline,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    foundingDate: String(company.foundedYear),
    founder: { "@type": "Person", name: company.ceo },
    description:
      "Premium construction services for residential, commercial and institutional projects.",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <WhyUs />
        <CEOMessage />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
