import React from 'react';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';
import dynamic from 'next/dynamic';
const TermsPage = dynamic(
  () => import('@/src/components/terms-conditions/TermsPage'),
  {
    ssr: false,
  }
);

const pathname = '/faqs';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <TermsPage />
    </>
  );
};

export default Page;
