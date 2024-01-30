import React, { useRef } from 'react';
import { Grid, Radio, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';

const AccountType = ({ AccountName, textField, handleChange, formik, selectedValue, handleChangeRadioButton }) => {
    const gridRef = useRef(null);

    const handleClick = () => {
        handleChangeRadioButton({
            target: { value: AccountName.toLowerCase().replace(/\s/g, '') }
        });
    };

    return (
        <>
            <Grid
                ref={gridRef}
                container
                onClick={handleClick}
                sx={{
                    border: '1px solid #E9E9E9',
                    height: '70px',
                    width: '100%',
                    display: 'flex',
                    backgroundColor: selectedValue === AccountName.toLowerCase().replace(/\s/g, '') ? '#EDF7FF' : 'transparent',
                    alignItems: 'center',
                    mx: { md: '30px', lg: '38px', xl: '40px' },
                    my: '10px',
                    px: { lg: '40px' },
                    cursor: 'pointer',
                }}
            >
                <Grid item xs={2} sm={1} lg={1}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' },
                        pr: { lg: '90px !important', },
                        pl: '0px !important'
                    }}
                >
                    <Radio
                        checked={selectedValue === AccountName.toLowerCase().replace(/\s/g, '')}
                        value={AccountName.toLowerCase().replace(/\s/g, '')}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        sx={{
                            color: '#126FAA !important',
                        }}
                    />
                </Grid>
                <Grid item xs={5} sm={3} lg={8}>
                    <Typography
                        sx={{
                            color: '#333',
                            fontSize: { xs: '12.1px', sm: '20px' },
                            fontStyle: 'normal',
                            fontWeight: 600,
                        }}
                    >
                        {AccountName}
                    </Typography>
                </Grid>
                <Grid item xs={5} sm={8} lg={2.7}
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'flex-end' },
                    }}>
                    {selectedValue === AccountName.toLowerCase().replace(/\s/g, '') ? <KeyboardArrowDownIcon fontSize='large' /> : <KeyboardArrowRightIcon fontSize='large' />}
                </Grid>
            </Grid>
            {selectedValue === AccountName.toLowerCase().replace(/\s/g, '') && (
                <InputTextField textField={textField} handleChange={handleChange} formik={formik} />
            )}
        </>
    )
}

export default AccountType