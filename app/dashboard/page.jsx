<<<<<<< HEAD
import { Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard flex min-h-screen">
      <div className="left-section w-15">Left Section</div>
      <div className="main-section w-70">Mid Section</div>
      <div className="right-section w-15">Right Section</div>
    </div>
=======
import React from 'react';

import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA } from '@/app/constants/Constants';

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="left-section">Left Section</div>
        <div className="main-section">Mid Section</div>
        <div className="right-section">Right Section</div>
      </div>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
>>>>>>> epic/issue/1
  );
};

export default Dashboard;
