import React from 'react';
import { Container } from '@mui/system';

import FooterCta from '@/src/components/footerCta';

import { FOOTER_CTA_DATA } from '../constants/Constants';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <FooterCta data={FOOTER_CTA_DATA} />
    </>
  );
};

export default InnerPageLayout;
