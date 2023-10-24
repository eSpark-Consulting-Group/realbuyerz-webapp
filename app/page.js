import BrowseByCategory from '@/src/components/HomePage/BrowseByCategory';
import FeaturedProperties from '@/src/components/HomePage/FeaturedProperties';
import HeroSection from '@/src/components/HomePage/HeroSection';
import NewlyListedProperties from '@/src/components/HomePage/NewlyListedProperties';
import OurHomePartners from '@/src/components/HomePage/OurHomePartners';

export default function Home() {
  return (
    <div className='min-h-screen '>
      <HeroSection />
      <BrowseByCategory />
      <OurHomePartners />
      <NewlyListedProperties />
      <FeaturedProperties />
    </div>
  );
}
