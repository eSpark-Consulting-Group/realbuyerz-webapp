import React from 'react';
import PostRequest from '@/src/components/dashboard/user/post-request/PostRequest';

const Page = ({ params }) => {
  const { property_Id } = params;
  return (
    <>
      <PostRequest property_Id={property_Id} />
    </>
  );
};

export default Page;
