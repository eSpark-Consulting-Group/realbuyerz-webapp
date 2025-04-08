import Link from 'next/link';

import { Typography } from '@mui/material';

const SliderCardTitle = ({ link }) => {
  return (
    <Link href={`/projects/${link?.property_id}`}>
      <Typography
        sx={{
          color: '#FB631C',
          fontWeight: '600',
          fontSize: { xs: '14px', md: '18px' },
          fontStyle: 'normal',
          textAlign: 'left',
        }}
      >
        {link?.title}
      </Typography>
    </Link>
  );
};

export default SliderCardTitle;
