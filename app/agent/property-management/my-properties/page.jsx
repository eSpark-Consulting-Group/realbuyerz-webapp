'use client'
import PropertiesFilter from '@/src/components/Properties/PropertiesFilter';
import React from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  const properties = useSelector((state) => state?.postListingAds?.agentPostings);
  console.log(properties, 'propertesss')
  return (
    <>
     <PropertiesFilter data={properties} />
    </>
  );
};

export default Page;
