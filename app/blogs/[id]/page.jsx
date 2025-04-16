import React from 'react';
import { BLOGS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';
import NotFoundSection from '@/src/components/global/NotFoundSection';

export async function generateMetadata({ params }) {
  const slug = params?.id;
  const filteredData =
    BLOGS_SEO?.find((item) => item?.path === slug) || BLOGS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = () => {
  return <NotFoundSection />;
};

export default Page;
