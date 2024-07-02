import React from 'react';
import Jagah360Page from '@/src/components/jagah360/Jagah360Page';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/jagah360';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <Jagah360Page />;
};
export default Page;
