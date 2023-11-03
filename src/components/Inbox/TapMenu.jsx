import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

const TapMenu = () => {
    return (
        <Grid item xs={12} sx={{ padding: "33px 0px 33px 0px", mx: "10px" }}>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Box>
                    <Image
                        src={"/images/inbox/reloadIcon.svg"}
                        width={25}
                        height={25} />
                </Box>
                <Box>Inbox</Box>
                <Box>Archive</Box>
            </Grid>
        </Grid>
    )
}

export default TapMenu
