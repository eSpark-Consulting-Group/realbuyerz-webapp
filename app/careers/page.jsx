import React from 'react';
import CareersPage from '@/src/components/careers/CareersPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/careers';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <CareersPage />;
};

export default Page;
