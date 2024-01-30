import React from 'react';
import { Container } from '@mui/material';

import FooterCta from '@/src/components/FooterCta';

import { FOOTER_CTA_DATA, FOOTER_DATA } from '@/app/constants/Constants';
import MainHeader from '@/src/components/layouts/MainHeader';
import Footer from '@/src/components/layouts/Footer';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default InnerPageLayout;
