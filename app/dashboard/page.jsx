import React from 'react';

import FooterCta from '@/src/components/footerCta';

import { FOOTER_CTA_DATA } from '../constants/Constants';

const Dashboard = () => {
  return (
    <>
      <div className=" flex min-h-screen">
        <div className="left-section ">Left Section</div>
        <div className="main-section ">Mid Section</div>
        <div className="right-section ">Right Section</div>
      </div>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default Dashboard;
