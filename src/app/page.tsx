import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyClean from "@/components/WhyClean";
import ServiceAreas from "@/components/ServiceAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { LocalBusinessSchema, FAQSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <Hero />
      <ServicesGrid />
      <WhyClean />
      <ServiceAreas />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <ContactForm />
    </>
  );
}
