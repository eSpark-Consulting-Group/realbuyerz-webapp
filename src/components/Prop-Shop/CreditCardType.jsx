import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Grid, Radio, useMediaQuery } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import InputTextField from './InputTextField';

const CreditCardType = ({
  textField,
  setTypeCard,
  cardTypeImage,
  handleChange,
  creditCardLable,
  selectedValue,
  handleChangeRadioButton,
  formik,
  NAME_ON_CARD,
}) => {
  const gridRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  const handleClick = () => {
    handleChangeRadioButton({ target: { value: NAME_ON_CARD } });
    setTypeCard();
  };

  return (
    <>
      <Grid
        ref={gridRef}
        container
        onClick={handleClick}
        sx={{
          mx: { lg: '32px', xl: '40px' },
          my: '30px',
          width: '100%',
          height: '70px',
          backgroundColor:
            selectedValue === NAME_ON_CARD ? '#EDF7FF' : 'transparent',
          border: '1px solid #E9E9E9',
          display: 'flex',
          alignItems: 'center',
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
            justifyContent: { xs: 'center', sm: 'center' },
          }}
        >
          <Radio
            checked={selectedValue === NAME_ON_CARD}
            onChange={handleChangeRadioButton}
            value="name_on_card"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{ color: '#126FAA !important' }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={5}
          md={4}
          lg={4}
          xl={3.5}
          sx={{
            color: '#333',
            fontSize: { xs: '11px', sm: '20px' },
            '@media (max-width: 295px)': {
              fontSize: '10.5px',
            },
            fontStyle: 'normal',
            fontWeight: 600,
            display: 'flex',
            justifyContent: { xs: 'flex-start' },
            pl: { xl: '35px' },
          }}
        >
          {creditCardLable}
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          lg={1}
          xl={1.4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {cardTypeImage?.map((item, index) => (
              <Image
                key={index}
                src={item?.icon}
                width={isSmallScreen ? 35 : 44}
                height={28}
                alt={item?.alt}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={5}
          lg={6}
          xl={6}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-end !important' },
            pr: { sm: '20px', lg: '15px' },
          }}
        >
          {selectedValue === NAME_ON_CARD ? (
            <KeyboardArrowDownIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '35px' } }}
            />
          ) : (
            <KeyboardArrowRightIcon
              fontSize="large"
              sx={{ color: '#666', fontSize: { xs: '26px', sm: '35px' } }}
            />
          )}
        </Grid>
      </Grid>
      {selectedValue === NAME_ON_CARD && (
        <InputTextField
          textField={textField}
          handleChange={handleChange}
          formik={formik}
        />
      )}
    </>
  );
};
export default CreditCardType;
