'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import ProposalFilter from '@/src/components/Proposals/ProposalFilter';

const Listing = () => {
  const proposals = useSelector((state) => state.proposals.proposals);
  console.log('proposals', proposals);
  return (
    <>
      <ProposalFilter data={proposals} />
    </>
  );
};

export default Listing;
