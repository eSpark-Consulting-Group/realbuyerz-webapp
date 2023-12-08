import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SliderCardTitle = ({ title }) => {
  const [saved, setSaved] = useState(false);

  const handleToggleSave = () => {
    setSaved((prevSaved) => !prevSaved);
  };
  return (
    <Grid container>
      <Grid item xs={10}>
        <Link href={`/properties/${title?.id}`}>
          <Typography
            variant="body1"
            sx={{
              color: '#FB631C',
              fontWeight: '600',
              fontSize: '18px',
              fontStyle: 'normal',
              textAlign: 'left',
            }}
          >
            {title?.name}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={2}>
        {saved === true ? (
          <FavoriteIcon
            onClick={handleToggleSave}
            style={{ color: ' #fb631c' }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={handleToggleSave}
            style={{ color: ' #fb631c' }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SliderCardTitle;
