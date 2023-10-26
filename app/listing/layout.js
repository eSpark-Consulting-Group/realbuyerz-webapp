import React from 'react';
import { Container } from '@mui/material';
import FooterCta from '@/src/components/footerCta';

const InnerPageLayout = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
            <FooterCta />
        </>
    );
};

export default InnerPageLayout;
