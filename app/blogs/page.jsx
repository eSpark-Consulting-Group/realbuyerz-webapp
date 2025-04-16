import React from 'react';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const pathname = '/blogs';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <NotFoundSection />;
};

export default Page;
