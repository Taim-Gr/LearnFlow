import FeaturedCourses from "../components/FeaturedCourses";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import OfferSection from "../components/OfferSection";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyUs />
      <FeaturedCourses />
      <Testimonials />
      <OfferSection />
    </Layout>
  );
}
