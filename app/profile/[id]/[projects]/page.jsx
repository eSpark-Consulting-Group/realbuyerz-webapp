import React from 'react';
import { getBlogsMetadata } from '@/src/components/seo';
import AgentProjectPage from '@/src/components/profile/agent-projects/AgentProjectsPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';

export async function generateMetadata() {
  const pathname = '/profile';
  const filteredData =
    GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
  return getBlogsMetadata(filteredData);
}

const Page = ({ params }) => {
  return <AgentProjectPage params={params} />;
};

export default Page;
