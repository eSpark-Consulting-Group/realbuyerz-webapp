import React from 'react';
import ComingSoon from '@/src/components/global/ComingSoon';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/blogs';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <ComingSoon />;
};

export default Page;
