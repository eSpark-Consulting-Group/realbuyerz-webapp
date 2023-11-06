import React from 'react';
import { Box, Grid } from '@mui/material';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './PostTitle';
import PropertyFacilities from './PropertyFacilities';
import AddAmenities from './AddAmenities';

const PropertyFeatures = () => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px #E4E4E4 solid',
                        borderRadius: '10px',
                        background: 'white',
                        height: { xs: '800px', md: '650px' },
                        alignItems: 'center',
                        width: '90%',
                        justifyContent: 'flex-start',
                    }}
                >
                    <PostTitle text={PropertyInformation.postTitles.featureamenities} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: { xs: '10px', md: '30px' },
                            width: { xs: '100%', md: '700px' },
                            padding: { xs: '10px', md: '40px' },
                            flexDirection: 'column',
                            marginTop: '20px',
                        }}
                    >
                        <PropertyFacilities PropertyInformation={PropertyInformation.feature} />
                        <AddAmenities />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
export default PropertyFeatures;
