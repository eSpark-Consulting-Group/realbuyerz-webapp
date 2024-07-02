import React from 'react';
import ProjectsCategoryPage from '@/src/components/projects/ProjectsCategoryPage';
import { BLOGS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const filteredData =
    BLOGS_SEO?.find((item) => item?.path === slug) || BLOGS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = () => {
  return (
    <>
      <ProjectsCategoryPage />
    </>
  );
};

export default Page;
