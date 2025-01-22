'use client';
import PostListing from '@/src/components/dashboard/agent/property-management/post-listing/PostListing';
import React from 'react';

const Page = ({ params }) => {
  const { property_Id } = params;
  return (
    <>
      <PostListing property_Id={property_Id} />
    </>
  );
};

export default Page;
