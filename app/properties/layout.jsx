import React from 'react';
import { Box } from '@mui/material';
import FooterCta from '@/src/components/footerCta';
import { FOOTER_CTA_DATA } from '../constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Box className="wide-container">{children}</Box>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default InnerPageLayout;
