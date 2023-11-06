import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const TapMenu = () => {
    const [activeTab, setActiveTab] = useState('inbox');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Grid item xs={10} sx={{ padding: "25px 0px 25px 0px", mx: "10px" }}>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Button
                        disableRipple 
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                            }
                        }}
                    >
                        <Image
                            src={"/images/inbox/reloadIcon.svg"}
                            width={25}
                            height={25}
                        />
                    </Button>
                </Box>
                <Box sx={{ position: "relative" }}>
                    <Button
                        disableRipple 
                        sx={{
                            color: activeTab === 'inbox' ? '#FB631C' : '#000',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            }
                            
                        }}
                        onClick={() => handleTabChange('inbox')}
                    >
                        Inbox
                    </Button>
                    {activeTab === 'inbox' && (
                        <Box sx={{ border: "1px solid #FB631C", width: "60px", position: "absolute", top: 61 }}></Box>
                    )}
                </Box>
                <Box sx={{ position: "relative" }}>
                    <Button
                        disableRipple // Add this to disable the ripple effect on click
                        sx={{
                            color: activeTab === 'archive' ? '#FB631C' : '#000',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            }
                        }}
                        onClick={() => handleTabChange('archive')}
                    >
                        Archive
                    </Button>
                    {activeTab === 'archive' && (
                        <Box sx={{ border: "1px solid #FB631C", width: "60px", position: "absolute", top: 61 }}></Box>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TapMenu;
