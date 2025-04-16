import React from 'react';
import AgentProjectsCategoryPage from '@/src/components/profile/agent-projects/AgentProjectsCategoryPage';
import { PROJECTS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';

export async function generateMetadata({ params }) {
  const slug = params?.id;
  const filteredData =
    PROJECTS_SEO?.find((item) => item?.path === slug) || PROJECTS_SEO[0];
  return getBlogsMetadata(filteredData);
}
const Page = () => {
  return (
    <>
      <AgentProjectsCategoryPage />
    </>
  );
};

export default Page;
