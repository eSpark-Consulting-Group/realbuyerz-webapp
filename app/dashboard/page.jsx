import React from 'react';

import { FOOTER_CTA_DATA } from '@/app/constants/Constants';
import FooterCta from '@/src/components/FooterCta';
import UserDashboard from '@/src/components/UserDashboard/UserDashboard';

const Dashboard = () => {
  return (
    <>
      <UserDashboard />
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default Dashboard;
