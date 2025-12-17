import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import DetailedServices from "@/components/DetailedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Financing from "@/components/Financing";
import MembershipTeaser from "@/components/MembershipTeaser";
import ResourcesTeaser from "@/components/ResourcesTeaser";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { LocalBusinessSchema, FAQSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      {/* Hero Section - Generic, no city/county */}
      <Hero />
      {/* Services Overview Grid */}
      <ServicesGrid />
      {/* Detailed Services Section */}
      <DetailedServices />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* How It Works */}
      <HowItWorks />
      {/* Financing Section */}
      <Financing />
      {/* Membership Teaser */}
      <MembershipTeaser />
      {/* Reviews */}
      <Reviews />
      {/* FAQ */}
      <FAQ />
      {/* Resources Teaser */}
      <ResourcesTeaser />
      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
