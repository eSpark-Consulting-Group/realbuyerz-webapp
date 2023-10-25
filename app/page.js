import AgentPropertiesSlider from '@/src/components/AgentProfile/AgentPropertiesSlider';
import BrowseByCategory from '@/src/components/HomePage/BrowseByCategory';
import FeaturedProperties from '@/src/components/HomePage/FeaturedProperties';
import HeroSection from '@/src/components/HomePage/HeroSection';
import NewlyListedProperties from '@/src/components/HomePage/NewlyListedProperties';
import OurHomePartners from '@/src/components/HomePage/OurHomePartners';
import { categories, partners, popularLocationsData } from './constents/HomeConstants';
import PopularLocations from '@/src/components/HomePage/PopularLocations';
import CreateAccount from '@/src/components/HomePage/CreateAccount';

export default function Home() {
  return (
    <div className='min-h-screen '>
      <HeroSection />
      <BrowseByCategory data={categories} />
      <FeaturedProperties />
      <CreateAccount />
      <OurHomePartners data={partners} />
      <NewlyListedProperties />
      <PopularLocations data={popularLocationsData} />
    </div>
  );
}
