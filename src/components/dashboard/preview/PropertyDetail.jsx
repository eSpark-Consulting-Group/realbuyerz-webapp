import { Box, Typography } from '@mui/material';

const PropertyDetail = ({
  title,
  subTitle,
  description,
  heading,
  width = '100%',
  px = 4,
  pt = 3,
  pb = 5,
  paddingHeading = '20px',
  subPadding = 3,
  fontSize = '20px',
  mb,
  fontStyle = '15px',
  fontSizeDescription = '12px',
}) => {
  
  return (
    <Box
      sx={{
        px,
        pt,
        pb,
        borderBottom: '1px solid #E4E4E4',
        width,
        '@media(min-width:280px) and (max-width:400px)': {
          px: subPadding,
        },
      }}
    >
      {heading && (
        <Typography
          variant="h2"
          sx={{
            pb: paddingHeading,
            color: '#000',
            fontSize: '20px',
            fontWeight: 500,
            mb,
          }}
        >
          {heading}
        </Typography>
      )}

      {title && (
        <Typography
          variant="h2"
          sx={{
            pb: '20px',
            color: '#000',
            fontSize,
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
      )}

      {subTitle && (
        <Typography
          variant="h3"
          sx={{
            p: '5px',
            color: '#333',
            fontSize: fontStyle,
            fontWeight: 600,
          }}
        >
          {subTitle}
        </Typography>
      )}

      {description && (
        <Typography
          sx={{
            width,
            p: '5px',
            color: '#333',
            fontSize: fontSizeDescription,
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default PropertyDetail;
