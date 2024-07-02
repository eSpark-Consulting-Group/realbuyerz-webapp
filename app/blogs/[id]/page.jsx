import React from 'react';
import ComingSoon from '@/src/components/global/ComingSoon';
import { BLOGS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';

export async function generateMetadata({ params }) {
  const slug = params?.id;
  const filteredData =
    BLOGS_SEO?.find((item) => item?.path === slug) || BLOGS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = () => {
  return <ComingSoon />;
};

export default Page;
