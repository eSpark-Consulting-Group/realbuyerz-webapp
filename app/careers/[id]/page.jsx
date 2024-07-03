import React from 'react';
import CareersSinglePage from '@/src/components/careers/CareersSinglePage';
import { CAREERS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';

export async function generateMetadata({ params }) {
  const slug = params?.id;
  const filteredData =
    CAREERS_SEO?.find((item) => item?.path === slug) || CAREERS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = () => {
  return (
    <>
      <CareersSinglePage />
    </>
  );
};

export default Page;
