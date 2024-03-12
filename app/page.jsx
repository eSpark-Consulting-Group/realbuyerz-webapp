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
} from '@/src/constants/Home';
import { AGENT_PROFILE_DATA } from '@/src/constants/AgentProfile';
import { GLOBAL_SEO } from '@/src/constants/seo';

const pathname = '/';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];

export const metadata = {
  metadataBase: new URL('https://www.realbuyerz.com/'),
  title: filteredData?.title,
  description: filteredData?.description,
  keywords: [`Real Buyers`, `Property Real Estate`, `Sell Buy Rent Property`],
  author: `Real Buyers`,
  alternates: {
    canonical: `https://www.realbuyerz.com${filteredData?.path}`,
    languages: {
      'en-US': '/en-US',
      'en-UK': '/en-UK',
    },
  },
  robots: `index, follow`,
  openGraph: {
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Real Buyers', 'Mehdi Raza'],
    siteName: `Real Buyers: Descriptions`,
    locale: `en_US`,
    images: [
      {
        url: filteredData?.image,
        alt: filteredData?.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: `summary_large_image`,
    metadataBase: new URL('https://www.realbuyerz.com/'),
    title: filteredData?.title,
    description: filteredData?.description,
    siteId: `@realbuyerz`,
    creator: `@realbuyerz`,
    images: [`${filteredData?.image}`],
  },
};

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
