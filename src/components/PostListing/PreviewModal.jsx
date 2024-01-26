import React from 'react';

import { Modal, Box, Typography, Button } from '@mui/material';
import { BIDDINGS } from '@/app/constants/Biddings';
import ProposalMapLocation from '../Proposals/ProposalMapLocation';
import ClientRequirementAmount from '../Proposals/ClientRequirementAmount';
import MediaComponent from './MediaComponent';

const PreviewModal = (props) => {
  const { amenities, amount, location } = BIDDINGS;
  const { onClose, open } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            width: { xs: '92%', lg: '800px' },
            bgcolor: 'background.paper',
            borderRadius: '20px',
            height: { xs: 'auto', sm: '840px' },
            p: { xs: 2, sm: 3.5, md: 5 },
            '@media (min-width: 280px) and (max-width:424px)': {
              p: 1.5,
              gap: 1.2,
            },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1.9, sm: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '700px',
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              overflowY: 'auto',
              // px: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '25px',
                fontWeight: 700,
                mt: 2,
                textAlign: 'center',
              }}
            >
              Preview
            </Typography>
            <ProposalMapLocation location={location} />
            <ClientRequirementAmount
              amountData={amount}
              amenities={amenities}
            />
            <MediaComponent title={'Project Images'} />
            <MediaComponent title={'Project Vides'} />
          </Box>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              onClick={onClose}
              sx={{
                width: '100px',
                height: '35px',
                color: '#fff',
                borderRadius: '10px',
                border: '1px solid #FB631C',
                background: '#FB631C',
                fontSize: '15px',
                fontWeight: 400,
                '&: hover': { color: '#fff', backgroundColor: '#FB631C' },
                '@media(min-width: 280px) and (max-width:425px)': {
                  width: '100%',
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PreviewModal;
