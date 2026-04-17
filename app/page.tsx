import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesSection from "@/components/features-section";
import AboutSection from "@/components/about-section";
import OurWorkSection from "@/components/our-work-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <WhatsAppFloat />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <OurWorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
