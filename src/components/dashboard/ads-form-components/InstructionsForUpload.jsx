import Image from 'next/image';

import { Typography, Box } from '@mui/material';

const InstructionsForUpload = ({ propertyInformation }) => {
  return (
    <Box>
      {propertyInformation?.map((item, index) => (
        <Box sx={{ padding: '11px' }} key={index}>
          <ul>
            <li>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  pr: { xs: 0, lg: 10 },
                  flexDirection: { xs: 'row', md: 'row' },
                  alignItems: 'start',
                  fontSize: '20px',
                  fontWeight: 400,
                  gap: '15px',
                  listStyle: 'none',
                }}
              >
                <Image
                  src={item?.image}
                  alt={'tick'}
                  width={17}
                  height={13}
                  style={{
                    mt: 1,
                  }}
                  className="tick-icon"
                />

                <Typography
                  sx={{
                    fontSize: { xs: '14px ', sm: '16px' },
                    fontWeight: 400,
                    color: '#969696',
                  }}
                >
                  {item?.text}
                </Typography>
              </Box>
            </li>
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default InstructionsForUpload;
