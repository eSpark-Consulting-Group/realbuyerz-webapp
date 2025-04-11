import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PropertyCard = ({ item }) => {
  const {
    image,
    currency,
    price,
    location,
    area,
    area_unit,
    direction,
    description,
  } = item || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: { xs: 240, sm: 340, md: 400 },
        maxWidth: { xs: 400 },
        width: '98%',
        borderRadius: 0.8,
        border: '1px solid #E4E4E4',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: loading ? 'none' : '0px 0px 4px rgba(251, 99, 28, 0.4)',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: 250 }}>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        ) : (
          <Image
            src={image || '/images/default/default_project_image.jpg'}
            alt="House"
            layout="fill"
            objectFit="cover"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />
        )}
      </Box>

      <CardContent>
        {loading ? (
          <>
            <Skeleton width="60%" height={20} />
            <Skeleton width="100%" height={20} />
            <Skeleton width="80%" height={20} />
            <Skeleton width="40%" height={20} />
            <Skeleton width="100%" height={60} />
          </>
        ) : (
          <>
            <Typography
              sx={{
                color: '#000',
                fontSize: { xs: 15, sm: 18, md: 20 },
                fontWeight: 500,
              }}
            >
              {currency}
              <Typography
                component="span"
                sx={{
                  color: '#000',
                  fontSize: { xs: 18, sm: 20, md: 25 },
                  fontWeight: 600,
                  ml: 1,
                }}
              >
                {price}
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#000',
                fontSize: { xs: 14, sm: 15, md: 16 },
                fontWeight: 500,
                mt: 1,
              }}
            >
              {location}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#000',
                fontSize: { xs: 14, sm: 15, md: 16 },
                fontWeight: 400,
                mt: 1,
              }}
            >
              {area} {area_unit}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#000',
                fontSize: { xs: 14, sm: 16, md: 18 },
                fontWeight: 600,
                mt: 1,
              }}
            >
              {direction}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#000',
                fontSize: { xs: 14, sm: 15, md: 16 },
                fontWeight: 400,
                mt: 1,
              }}
            >
              {description}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
