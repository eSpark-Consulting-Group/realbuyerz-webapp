import BrowseByCategory from '@/src/components/home/BrowseByCategory';
import FeaturedProperties from '@/src/components/home/FeaturedProperties';
import HeroSection from '@/src/components/home/HeroSection';
import NewlyListedProperties from '@/src/components/home/NewlyListedProperties';
import OurHomePartners from '@/src/components/home/OurHomePartners';
import PopularLocations from '@/src/components/home/PopularLocations';
import CreateAccount from '@/src/components/home/CreateAccount';

import {
  CATEGORIES,
  FEATURED_PROPERTIES,
  PARTNERS,
  POPULAR_LOCATIONS_DATA,
} from '@/src/constants/Home';
import { AGENT_PROFILE_DATA } from '@/src/constants/AgentProfile';

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
