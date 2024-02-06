'use client';
import React, { useState, useEffect } from 'react';

import ProposalTabs from './ProposalTabs';
import Link from 'next/link';


import { filterData, getUniqueFilteredOptions } from '@/utils/proposalFilter';

const ProposalFilter = ({ data }) => {


  return (
    <>
      <ProposalTabs filteredProposalsData={data} />
    </>
  );
};

export default ProposalFilter;
