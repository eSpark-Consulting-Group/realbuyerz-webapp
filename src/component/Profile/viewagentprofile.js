import React from 'react';
import { Typography, Button, Avatar, Box } from '@mui/material';

const ViewAgentProfile = ({ avatar, name }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: 195,
                background: 'white',
                borderRadius: 2,
                border: '1px solid #e0e0e0',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                }}
            >
                <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
                <Typography
                variant='secondary'
                    sx={{
                        ml: 2,
                        fontSize: 25,
                        fontWeight: 600,      
                    }}
                >
                    {name}
                </Typography>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#F5F6FB',
                }}
            >
                <Button variant='dimSecondary'
                    sx={{
                        width: '100%',
                        fontSize: 20,
                        background: '#F5F6FB',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        '&:hover': {
                            background: '#F5F6FB',
                        },
                    }}
                >
                    View Agent Profile
                </Button>
            </Box>
        </Box>
    );
};
export default ViewAgentProfile;
