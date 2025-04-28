'use client';
import { Box, Grid } from '@mui/material';

import PostTitle from './ads-form-components/PostTitle';
import PropertyStatus from './ads-form-components/PropertyStatus';
import SelectCityType from './ads-form-components/SelectCity';
import SelectLocationType from './ads-form-components/SelectLocationType';
import SelectProperyType from './ads-form-components/SelectPropertyType';

const PropertyPurpose = ({
  propertyData,
  formik,
  propertyTypeDetails,
  filteredUserProperty,
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
        height: 'auto',
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
          backgroundSize: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top 35%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
          }}
        >
          <PostTitle text={propertyData?.postTitles?.locationandpurpose} />

          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: { xs: 5, sm: 6 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: { xs: 1, sm: 2 },
              }}
            >
              <PropertyStatus
                propertyInformation={propertyData?.purpose}
                propertySell={propertyData?.buy}
                propertyData={propertyData}
                formik={formik}
              />

              <SelectProperyType
                image={propertyData?.propertyType?.images}
                label={propertyData?.propertyType?.text}
                iconTitle={propertyData?.IconTitle}
                plotType={propertyData?.propertyPlot}
                commercialType={propertyData?.propertyCommercial}
                formik={formik}
                propertyTypeDetails={propertyTypeDetails}
              />

              <SelectCityType
                image={propertyData?.city?.images}
                label={propertyData?.city?.text}
                cityOptions={propertyData?.selectCityOptions}
                formik={formik}
              />

              <SelectLocationType
                propertyInformation={propertyData}
                formik={formik}
                filteredUserProperty={filteredUserProperty}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PropertyPurpose;
