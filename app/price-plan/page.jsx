import React from 'react';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';
import PricePlanPage from '@/src/components/price-plan/PricePlanPage';

const pathname = '/price-plan';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <PricePlanPage />
    </>
  );
};

export default Page;
