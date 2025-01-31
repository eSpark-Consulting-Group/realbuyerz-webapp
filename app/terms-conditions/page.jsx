import React from 'react';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';
import TermsPage from '@/src/components/terms-conditions/TermsPage';

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
