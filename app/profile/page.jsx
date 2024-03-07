'use client';
import ProfilesPage from '@/src/components/ProfilesPage';
import React from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  const agents = useSelector((state) => state?.agents);
  console.log(agents);
  return <ProfilesPage agents={agents} />;
};

export default Page;
