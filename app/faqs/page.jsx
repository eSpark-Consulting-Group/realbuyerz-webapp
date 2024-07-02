import React from 'react';
import FaqsPage from '@/src/components/faqs/FaqsPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/faqs';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <FaqsPage />;
};

export default Page;
