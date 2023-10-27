import FooterCta from '@/src/components/footerCta';
import { Typography } from '@mui/material';
import React from 'react';
import { footerCtaData } from '../constents/constents';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard flex min-h-screen'>
        <div className='left-section w-15'>Left Section</div>
        <div className='main-section w-70'>Mid Section</div>
        <div className='right-section w-15'>Right Section</div>
      </div>
      <FooterCta data={footerCtaData} />
    </>
  );
};

export default Dashboard;
