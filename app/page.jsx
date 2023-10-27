import AgentPropertiesSlider from '@/src/components/AgentProfile/AgentPropertiesSlider';
import BrowseByCategory from '@/src/components/HomePage/BrowseByCategory';
import FeaturedProperties from '@/src/components/HomePage/FeaturedProperties';
import HeroSection from '@/src/components/HomePage/HeroSection';
import NewlyListedProperties from '@/src/components/HomePage/NewlyListedProperties';
import OurHomePartners from '@/src/components/HomePage/OurHomePartners';
import FooterCta from '@/src/components/footerCta';
import PopularLocations from '@/src/components/HomePage/PopularLocations';
import CreateAccount from '@/src/components/HomePage/CreateAccount';

import {
  CATEGORIES,
  FEATURED_PROPERTIES,
  PARTNERS,
  POPULAR_LOCATIONS_DATA,
} from './constants/HomeConstants';
import { SLIDER_CARD_DATA } from './constants/AgentProfileConstant';
import { FOOTER_CTA_DATA } from './constants/Constants';

function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <BrowseByCategory data={CATEGORIES} />
      <FeaturedProperties data={FEATURED_PROPERTIES} />
      <CreateAccount />
      <OurHomePartners data={PARTNERS} />
      <NewlyListedProperties data={SLIDER_CARD_DATA} />
      <PopularLocations data={POPULAR_LOCATIONS_DATA} />
      <FooterCta data={FOOTER_CTA_DATA} />
    </div>
  );
}

export default Home;
