import React from 'react';
import { Container } from '@mui/material';

import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/app/constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import Footer from '@/src/components/layouts/Footer';

const InnerPageLayout = ({ children }) => {
  return (
    <>
    <MainHeader />
      <Container>{children}</Container>
      <FooterCta data={FOOTER_CTA_DATA} />
      <Footer data={FOOTER_DATA} />
    </>
  );
};

export default InnerPageLayout;
