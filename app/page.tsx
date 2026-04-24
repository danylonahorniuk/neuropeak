import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <HowItWorks />
        <Ingredients />
        <Reviews />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
