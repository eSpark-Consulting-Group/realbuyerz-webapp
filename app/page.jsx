import HomePage from '@/src/components/home/Homepage';
import { getMetadata } from '@/src/components/seo';

import { GLOBAL_SEO } from '@/src/constants/global/seo';

const pathname = '/';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Page = () => {
  return <HomePage />;
};

export default Page;
