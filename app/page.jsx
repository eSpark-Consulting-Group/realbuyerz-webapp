import BrowseByCategory from '@/src/components/HomePage/BrowseByCategory';
import FeaturedProperties from '@/src/components/HomePage/FeaturedProperties';
import HeroSection from '@/src/components/HomePage/HeroSection';
import NewlyListedProperties from '@/src/components/HomePage/NewlyListedProperties';
import OurHomePartners from '@/src/components/HomePage/OurHomePartners';
import PopularLocations from '@/src/components/HomePage/PopularLocations';
import CreateAccount from '@/src/components/HomePage/CreateAccount';

import {
  CATEGORIES,
  FEATURED_PROPERTIES,
  PARTNERS,
  POPULAR_LOCATIONS_DATA,
} from '@/app/constants/Home';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <BrowseByCategory data={CATEGORIES} />
        <FeaturedProperties data={FEATURED_PROPERTIES} />
        <CreateAccount />
        <OurHomePartners data={PARTNERS} />
        <NewlyListedProperties data={AGENT_PROFILE_DATA} />
        <PopularLocations data={POPULAR_LOCATIONS_DATA} />
      </div>
    </>
  );
};

export default Home;
