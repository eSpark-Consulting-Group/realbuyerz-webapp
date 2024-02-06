'use client';
import React from 'react';
import ProposalFilter from '@/src/components/Proposals/ProposalFilter';
import { useSelector } from 'react-redux';
import PropertyListingCard from '@/src/components/Properties/PropertyListingCard';

const Page = () => {
  const postListings = useSelector((state) => state?.postListingAds?.agentPostings);
  // console.log(postListings, 'postttttt listinggsss')

  // const proposals = useSelector((state) => state.proposals.proposals);




  return (
    <>
      {/* <PropertiesFilter data={proposals}/> */}
      {/* <ProposalFilter data={postListings}/> */}
      <PropertyListingCard propertyData={postListings}/>
    </>
  );
};

export default Page;
