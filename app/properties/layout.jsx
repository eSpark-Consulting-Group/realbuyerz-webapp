import React from 'react';
import { Box } from '@mui/material';
import FooterCta from '@/src/components/footerCta';
import { FOOTER_CTA_DATA } from '../constants/Constants';
import { Container } from '@mui/system';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default InnerPageLayout;
