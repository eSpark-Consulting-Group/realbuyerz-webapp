'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import { createInformationState } from '@/utils/addInfo';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import { createPropertyStatusState } from '@/utils/propertyStatus';
import { createMediaDataState } from '@/utils/mediaData';

const Page = () => {
  const initializePropertyData = () => {
    const informationState = createInformationState(
      PROPERTY_INFORMATION.addInfo,
      PROPERTY_BUYING_DETAIL.sellingDetails
    );
    const propertyStatusState = createPropertyStatusState({
      propertySell: PROPERTY_INFORMATION.sell,
      propertyBuyingDetails: PROPERTY_BUYING_DETAIL.sellingDetails,
    });
    const uploadMediaData = createMediaDataState({
      propertyInformation: PROPERTY_INFORMATION.uploadButton,
      propertyBuyingDetails: PROPERTY_BUYING_DETAIL.sellingDetails,
    });
    return {
      ...informationState,
      ...propertyStatusState,
      ...uploadMediaData,
    };
  };

  const [propertyData, setPropertyData] = useState(initializePropertyData());
  useEffect(() => {
    console.log('propertyData', setPropertyData);
  }, [propertyData]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: 0, md: '0 auto', lg: 0 },
          }}
        >
          <BuyersPlatform />
          <AdInformation propertyData={propertyData} />
          <PropertyPurpose propertyData={propertyData} />
          <PropertySize />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Page;
