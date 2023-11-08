import React from 'react';
import { Container } from '@mui/material';

import FooterCta from '@/src/components/FooterCta';
import { FOOTER_CTA_DATA } from '@/app/constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default InnerPageLayout;
