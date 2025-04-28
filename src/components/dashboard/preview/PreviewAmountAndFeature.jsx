import { Box, Typography } from '@mui/material';

const PreviewAmountAndFeature = ({
  area,
  amount,
  areaAndAmount,
  instalmentAvailable,
  readyPossession,
  width,
  px,
  pt,
  pb,
  subPadding,
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
    <Box
      sx={{
        p: 5,
        px: px || 'none',
        pt: pt || 'none',
        pb: pb || 'none',
        borderBottom: '1px solid #E4E4E4',
        width: width || '100%',
        '@media(min-width:280px) and (max-width:400px)': {
          px: subPadding || 3,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: fontSize || '20px',
          fontWeight: 500,
          mb: 2,
        }}
      >
        {areaAndAmount?.title || 'Price & Features'}
      </Typography>

      {/* Area Size */}
      <CommonBox
        extra={{ mb: 1.5 }}
        fontSize={fontStyle || '14px'}
        fontWeight={fontWeight || 600}
        heading={'Area Size:'}
        color={'#126FAA'}
        text={area ? `${area} Sq-ft` : 'Not specified'}
      />

      {/* Price */}
      <CommonBox
        extra={{ mb: 1.5 }}
        fontSize={fontStyle || '14px'}
        fontWeight={fontWeight || 600}
        heading={'Price:'}
        color={'#126FAA'}
        text={amount ? `PKR ${amount.toLocaleString()}` : 'Not specified'}
      />

      {/* Installment Available */}
      <CommonBox
        extra={{ mb: 1.5 }}
        fontSize={fontStyle || '14px'}
        fontWeight={fontWeight || 600}
        heading={'Installment:'}
        color={instalmentAvailable ? '#126FAA' : '#666'}
        text={instalmentAvailable ? 'Available' : 'Not available'}
      />

      {/* Ready for Possession */}
      <CommonBox
        fontSize={fontStyle || '14px'}
        fontWeight={fontWeight || 600}
        heading={'Possession:'}
        color={readyPossession ? '#126FAA' : '#666'}
        text={readyPossession ? 'Ready' : 'Not ready'}
      />
    </Box>
  );
};

const CommonBox = ({
  extra = {},
  fontSize,
  fontWeight,
  heading,
  color,
  text,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, ...extra }}>
      <Typography
        sx={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: '#333',
        }}
      >
        {heading}
      </Typography>

      <Typography
        sx={{
          fontSize: fontSize,
          fontWeight: 500,
          color: color,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PreviewAmountAndFeature;
