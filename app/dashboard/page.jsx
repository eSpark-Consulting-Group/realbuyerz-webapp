import React from 'react';

import FooterCta from '@/src/components/footerCta';

import { FOOTER_CTA_DATA } from '../constants/Constants';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard flex min-h-screen">
        <div className="left-section w-15">Left Section</div>
        <div className="main-section w-70">Mid Section</div>
        <div className="right-section w-15">Right Section</div>
      </div>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default Dashboard;
