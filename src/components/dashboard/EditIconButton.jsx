import Link from 'next/link';

import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditIconButton = ({ editIconLink, pathName, user }) => {
  return (
    <Link href={editIconLink}>
      <Typography
        color={'primary'}
        sx={{
          display: 'flex',
          cursor: 'pointer',
          position: { xs: 'absolute' },
          zIndex: 10,
          right: { xs: 60, md: 150 },
          top: {
            xs: !pathName?.includes(user) ? 330 : 81,
            sm: !pathName?.includes(user) ? 382 : 112,
            md: 25,
          },
          bottom: {
            xs: 'auto',
            sm: 'auto',
          },
          left: 'auto',
          '@media (min-width:280px) and (max-width:319px)': {
            top: !pathName?.includes(user) && 320,
            right: !pathName?.includes(user) && 50,
          },
        }}
      >
        <EditIcon />
      </Typography>
    </Link>
  );
};

export default EditIconButton;
