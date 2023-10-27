import React from 'react';
import { Container } from '@mui/material';
import FooterCta from '@/src/components/footerCta';
import { footerCtaData } from '../constents/constents';

const InnerPageLayout = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
            <FooterCta data={footerCtaData} />
        </>
    );
};

export default InnerPageLayout;
