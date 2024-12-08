import HeroSection from "@/components/HeroSec";
import CarouselComponent from "@/components/Items";
import Products from "@/components/ourProduct";
import OurRange from "@/components/Range";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurRange/>
      <Products />
      <CarouselComponent />
    </div>
  );
}
