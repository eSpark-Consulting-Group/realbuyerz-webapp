import React from 'react';
import { PROJECTS_SEO } from '@/src/constants/global/seo';
import { getBlogsMetadata } from '@/src/components/seo';
import AgentProjectsTypePage from '@/src/components/profile/agent-projects/AgentProjectsTypePage';

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const filteredData =
    PROJECTS_SEO?.find((item) => item?.path === slug) || PROJECTS_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = ({ params }) => {
  return <AgentProjectsTypePage params={params} />;
};

export default Page;
