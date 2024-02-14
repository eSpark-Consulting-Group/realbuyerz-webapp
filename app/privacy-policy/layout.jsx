import React from 'react';
import { Box } from '@mui/material';
import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA } from '@/app/constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#F4F5F7', border: '1px solid #F4F5F7' }}>
      <Box maxWidth={1200} mx={'auto'}>
        {children}
      </Box>
      <FooterCta data={FOOTER_CTA_DATA} />
    </Box>
  );
};

export default InnerPageLayout;
