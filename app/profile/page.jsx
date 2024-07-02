import React from 'react';
import ProfilesPage from '@/src/components/profile/ProfilesPage';
import { GLOBAL_SEO } from '@/src/constants/global/seo';
import { getMetadata } from '@/src/components/seo';

const pathname = '/profile';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <ProfilesPage />;
};

export default Page;
