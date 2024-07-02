import React from 'react';
import AgentProjectPage from '@/src/components/profile/agent-projects/AgentProjectsPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/profile';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return (
    <>
      <AgentProjectPage />
    </>
  );
};

export default Page;
