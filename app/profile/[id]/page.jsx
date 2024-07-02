import React from 'react';
import ProfileSinglePage from '@/src/components/profile/ProfileSinglePage';
import { AGENTS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';

export async function generateMetadata({ params }) {
  const slug = params?.id;
  const filteredData =
    AGENTS_SEO?.find((item) => item?.path === slug) || AGENTS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = () => {
  return (
    <>
      <ProfileSinglePage />
    </>
  );
};

export default Page;
