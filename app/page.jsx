import BrowseByCategory from '@/src/components/HomePage/BrowseByCategory';
import FeaturedProperties from '@/src/components/HomePage/FeaturedProperties';
import HeroSection from '@/src/components/HomePage/HeroSection';
import NewlyListedProperties from '@/src/components/HomePage/NewlyListedProperties';
import OurHomePartners from '@/src/components/HomePage/OurHomePartners';
import FooterCta from '@/src/components/FooterCta';
import PopularLocations from '@/src/components/HomePage/PopularLocations';
import CreateAccount from '@/src/components/HomePage/CreateAccount';

import {
  CATEGORIES,
  FEATURED_PROPERTIES,
  PARTNERS,
  POPULAR_LOCATIONS_DATA,
} from '@/app/constants/Home';
import { AGENT_PROFILE_DATA } from '@/app/constants/AgentProfile';
import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/app/constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import Footer from '@/src/components/layouts/Footer';

const Home = () => {
  return (
    <>
      <MainHeader />
      <div className="min-h-screen">
        <HeroSection />
        <BrowseByCategory data={CATEGORIES} />
        <FeaturedProperties data={FEATURED_PROPERTIES} />
        <CreateAccount />
        <OurHomePartners data={PARTNERS} />
        <NewlyListedProperties data={AGENT_PROFILE_DATA} />
        <PopularLocations data={POPULAR_LOCATIONS_DATA} />
        <FooterCta data={FOOTER_CTA_DATA} />
      </div>
      <Footer data={FOOTER_DATA} />
    </>
  );
};

export default Home;
