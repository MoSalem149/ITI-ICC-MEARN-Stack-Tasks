import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ImageGrid from "../components/ImageGrid";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <ImageGrid />
    </>
  );
}
