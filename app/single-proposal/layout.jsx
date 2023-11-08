import React from 'react';
import { Box } from '@mui/material';
import FooterCta from '@/src/components/FooterCta';
import { FOOTER_CTA_DATA } from '../constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ background: '#c0c0c0', p: '50px' }}>{children}</Box>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default InnerPageLayout;
