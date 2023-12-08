import React from 'react';
import { Container, Box } from '@mui/material';
import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA } from '@/app/constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <Box sx={{ background: '#F4F5F7' }}>
      <Box maxWidth={1322} mx={'auto'}>
        {children}
      </Box>
      <FooterCta data={FOOTER_CTA_DATA} />
    </Box>
  );
};

export default InnerPageLayout;
