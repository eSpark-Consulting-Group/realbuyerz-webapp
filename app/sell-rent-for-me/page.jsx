import React from 'react';
import SellRentPage from '@/src/components/sell-rent-for-me/SellRentPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/sell-rent-for-me';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <SellRentPage />;
};

export default Page;
