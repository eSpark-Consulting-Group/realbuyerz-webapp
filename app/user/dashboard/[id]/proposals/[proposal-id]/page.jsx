"use client";
import ProposalCard from '@/src/components/Proposal/ProposalCard';
import ViewAllPosting from '@/src/components/UserDashboard/ViewAllPosting'
import { a11yProps } from '@/src/utils/tabs';
import { Autocomplete, Box, Button, Divider, Grid, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
    const [value, setValue] = useState(0);
    const [currentTab, setCurrentTab] = useState('Inbox');
    const tabs = [
        {
            label: 'All',
            prop: a11yProps(0),
        },
        {
            label: 'Active',
            prop: a11yProps(1),
        },
        {
            label: 'Draft',
            prop: a11yProps(2),
        },
        {
            label: 'Trash',
            prop: a11yProps(3),
        },
    ];
    const handleChangeTab = (event, newValue) => {
        let tab = event?.target?.innerText.split(' ');
        if (tab.length > 1) {
            tab = tab.slice(0, -1).join(' ');
        } else {
            tab = tab.join(' ');
        }
        setCurrentTab(tab);

        setValue(newValue);
        console.log({ currentTab });
    };
    return (
        <>
            <Box sx={{ maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' }, }}>

                <Grid container sx={{
                    alignItems:'flex-end'
                }}>
                    <Grid item xs={6} md={2.75}>
                        <Box sx={{width:"90%"}}>
                            <Typography>
                                Purpose
                            </Typography>
                            <Autocomplete
                            sx={{
                                marginTop:'20px',
                                background:'#fff'
                            }}
                                disablePortal
                                id="combo-box-demo"
                                options={[
                                    {
                                        label: 'Karachi',
                                        value: '',
                                    },
                                    {
                                        label: 'Lahore',
                                        value: '',
                                    },
                                ]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select Purpose" />
                                )}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={2.75}>
                        <Box sx={{width:"90%"}}>
                            <Typography>
                                City
                            </Typography>
                            <Autocomplete
                            sx={{
                                marginTop:'20px',
                                background:'#fff'
                            }}
                                disablePortal
                                id="combo-box-demo"
                                options={[
                                    {
                                        label: 'Karachi',
                                        value: '',
                                    },
                                    {
                                        label: 'Lahore',
                                        value: '',
                                    },
                                ]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select City" />
                                )}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={2.75}>
                        <Box sx={{width:"90%"}}>
                            <Typography>
                                Location
                            </Typography>
                            <Autocomplete
                            sx={{
                                marginTop:'20px',
                                background:'#fff'
                            }}
                                disablePortal
                                id="combo-box-demo"
                                options={[
                                    {
                                        label: 'Karachi',
                                        value: '',
                                    },
                                    {
                                        label: 'Lahore',
                                        value: '',
                                    },
                                ]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select Location" />
                                )}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={2.75}>
                        <Box sx={{width:"90%"}}>
                            <Typography>
                                Property Type
                            </Typography>
                            <Autocomplete
                            sx={{
                                marginTop:'20px',
                                background:'#fff'
                            }}
                                disablePortal
                                id="combo-box-demo"
                                options={[
                                    {
                                        label: 'Karachi',
                                        value: '',
                                    },
                                    {
                                        label: 'Lahore',
                                        value: '',
                                    },
                                ]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select Type" />
                                )}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant='text' sx={{
                            color:'#126FAA',
                            textDecoration:'underline'
                        }}>Reset</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    background: '#fff',
                    borderRadius: '10px',
                    border: '1px solid #E4E4E4',
                    mt: 6,
                    mb: 6,
                    mx: { xs: 'auto', lg: 0 },
                    maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: "30px"
                }}>
                    <Tabs
                        variant="scrollable"
                        value={value}
                        onChange={handleChangeTab}
                        aria-label="basic tabs example"
                    >
                        {tabs?.map(({ label, prop }, i) => (
                            <Tab
                                key={i}
                                label={`${label}`}
                                {...prop}
                                disableRipple={true}
                                sx={{
                                    textTransform: 'math-auto',
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>
                <Divider />
                <Box
                    sx={{
                        p: { xs: 2, sm: 3 },
                    }}
                >
                    {
                        [...Array(5)].map((_, index) => (
                            <ProposalCard key={index} index={index} />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default page