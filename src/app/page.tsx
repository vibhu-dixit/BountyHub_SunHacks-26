import CategoryShowcase from "@/components/category-showcase";
import FeaturedBounties from "@/components/featured-bounties";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
export default function HomePage() {
  return <div className="min-h-screen flex flex-col" data-unique-id="2d545a32-9786-4116-9683-6fe90241158e" data-file-name="app/page.tsx">
      <Navbar />
      <main className="flex-grow" data-unique-id="dcb5b465-2c74-4a61-8158-446f43d577e7" data-file-name="app/page.tsx">
        <HeroSection />
        <FeaturedBounties />
        <HowItWorks />
        <CategoryShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>;
}