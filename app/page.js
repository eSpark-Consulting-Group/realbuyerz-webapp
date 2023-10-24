import BrowseByCategory from "@/src/components/HomePage/BrowseByCategory";
import HeroSection from "@/src/components/HomePage/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <BrowseByCategory />
    </div>
  );
}
