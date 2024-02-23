import React, { useRef } from 'react';
import { Grid, Radio, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';

const AccountType = ({
  AccountName,
  textField,
  handleChange,
  formik,
  selectedValue,
  handleChangeRadioButton,
}) => {
  const gridRef = useRef(null);

  const handleClick = () => {
    handleChangeRadioButton({
      target: { value: AccountName.toLowerCase().replace(/\s/g, '') },
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
          backgroundColor:
            selectedValue === AccountName.toLowerCase().replace(/\s/g, '')
              ? '#EDF7FF'
              : 'transparent',
          alignItems: 'center',
          mx: { lg: '32px', xl: '40px' },
          my: '10px',
          cursor: 'pointer',
        }}
      >
        <Grid
          item
          xs={2}
          sm={1}
          lg={1}
          xl={1}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center' },
          }}
        >
          <Radio
            checked={
              selectedValue === AccountName.toLowerCase().replace(/\s/g, '')
            }
            value={AccountName.toLowerCase().replace(/\s/g, '')}
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{
              color: '#126FAA !important',
            }}
          />
        </Grid>
        <Grid item xs={5} sm={3} lg={8} xl={8}>
          <Typography
            sx={{
              color: '#333',
              fontSize: { xs: '12.1px', sm: '20px' },
              fontStyle: 'normal',
              fontWeight: 600,
              pl: { xl: '35px' },
            }}
          >
            {AccountName}
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sm={8}
          lg={2.7}
          xl={2.7}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-end' },
            pr: { sm: '20px', lg: '0px' },
          }}
        >
          {selectedValue === AccountName.toLowerCase().replace(/\s/g, '') ? (
            <KeyboardArrowDownIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '38px' } }}
            />
          ) : (
            <KeyboardArrowRightIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '38px' } }}
            />
          )}
        </Grid>
      </Grid>
      {selectedValue === AccountName.toLowerCase().replace(/\s/g, '') && (
        <InputTextField
          textField={textField}
          handleChange={handleChange}
          formik={formik}
        />
      )}
    </>
  );
};

export default AccountType;
