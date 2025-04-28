import { useRouter } from 'next/navigation';

import { Button } from '@mui/material';

const SeeAllPosting = ({ title, link, isFetched }) => {
  const router = useRouter();
  return (
    <Button
      sx={{
        backgroundColor: 'transparent !important',
        padding: 0,
        Weight: 500,
        fontSize: { xs: '17px', sm: '20px' },
        lineHeight: '24.2px',
        color: '#126FAA',
        textDecoration: 'underline !important',
        textUnderlineOffset: '5px',
        backgroundColor: 'transparent !important',
      }}
      disabled={isFetched}
      onClick={() => router.push(link)}
    >
      {title}
    </Button>
  );
};

export default SeeAllPosting;
