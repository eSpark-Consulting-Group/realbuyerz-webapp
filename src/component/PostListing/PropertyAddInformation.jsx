import React,{useState} from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';
import { PROPERTY_INFORMATION } from './postlistingConstants';

const PropertyAddInformation = ({ PropertyInformation, inputChange }) => {
  const [propertyData, setPropertyData] = useState({
    seilingData:PROPERTY_BUYING_DETAIL.sellingDetails,
    propertySize:PROPERTY_INFORMATION.addInfo
  })
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setPropertyData((prevData) => ({
    ...prevData,
    sellingData: {
      ...prevData.seilingData,
      [name]: value,
    },
  }));
};

  const handleClickBtn = () => {
    console.log("fromaddcomponnet",propertyData)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '40px',
        width: '700px',
      }}
    >
      {propertyData.propertySize((item, index) => (
        <Box
          sx={{
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: 400,
              gap: '8px',
            }}
            key={index}
          >
            <Image src={item.image} width={45} height={45} />
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              {item.text}
            </Typography>
            <span style={{ color: '#FF0000' }}>*</span>
          </Box>
          <TextField
            placeholder={item.placeholder}
            sx={{
              marginLeft: { xs: '0px', md: '50px' },
              width: { xs: '100%', md: '600px' },
              '& placholder': {
                textOverflow: 'ellipsis',
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                overflow: 'hidden',
              },
            }}
            name={item.label}
            onChange={handleInputChange}
            multiline
          />
        </Box>
      ))}
      <Button onClick={handleClickBtn}>OK</Button>
    </Box>
  );
};
export default PropertyAddInformation;
