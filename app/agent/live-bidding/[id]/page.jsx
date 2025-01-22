import React from 'react';
import AdDetail from '@/src/components/dashboard/agent/live-bidding/property/AdDetail';

const Page = ({ params }) => {
  const { id } = params; 
  return (
    <>
      <AdDetail property_id={id} />
    </>
  );
};

export default Page;
