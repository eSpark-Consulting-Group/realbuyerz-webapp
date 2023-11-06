'use client'
import React from 'react'

import { Grid } from '@mui/material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import Sliders from '@/src/components/Properties/Slider/slider';
import PropertyOverview from '@/src/components/Properties/PropertyOverview/PropertyOverview';
import PropertyDetails from '@/src/components/Properties/PropertyDescription/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';



import { PROPERTIES_LISTING } from '@/app/constants/Properties';
import { data } from 'jquery';


function page() {
    // const router = useRouter()
    const pathname = usePathname()

    // Split the pathname by '/' and get the last segment (id)
    const segments = pathname.split('/')
    const id = segments[segments.length - 1]

    // Access PROPERTIES_LISTING using the extracted id
    const property = PROPERTIES_LISTING[id - 1]

    console.log('Pathname:', pathname)
    console.log('Extracted ID:', id)
    console.log('Corresponding Property:', property)
    return (
        <>
            <Grid
                container
                sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '50px',
                    }}
                >
                    <Sliders propertySlider={property} />
                    <PropertyOverview propertyData={property} />
                    <PropertyDetails propertyData={property} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ProfileAgent agentData={property} />
                </Grid>
            </Grid>
        </>
    )
}

export default page


