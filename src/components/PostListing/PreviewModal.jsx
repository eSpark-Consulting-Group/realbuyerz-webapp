import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const PreviewModal = (props) => {
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
            height: '840px',
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '700px',
              borderRadius: '10px',
              border: '1px solid #E4E4E4',
              px: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '25px',
                fontWeight: 700,
                my: 2,
                textAlign: 'center',
              }}
            >
              Preview
            </Typography>

            <Box sx={{ pb: 2, borderBottom: '1px solid #E4E4E4' }}>
              <Typography
                sx={{
                  padding: '5px',
                  color: '#333',
                  fontSize: '16px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
                variant="h3"
              >
                {'Property Details'}
              </Typography>
              <Typography
                sx={{
                  padding: '5px',
                  color: ' #333',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                {'4 Bedrooms Apartment'}
              </Typography>
              <Typography
                component={'p'}
                sx={{
                  padding: '5px',
                  color: ' #333',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Pharetra non interdum id
                mauris arcu gravida sodales tellus. Erat in eget mollis nec eget
                sed viverra elit hac. Tempus tempus aenean in urna potenti
                maecenas lorem volutpat. Sollicitudin sed nisl ultrices elit
                nibh in lorem mattis orci. Ultrices lacus congue feugiat et.
                Purus volutpat urna vitae mauris nulla felis. Sed sodales ut
                euismod congue ut magna consectetur vulputate sit. Amet bibendum
                id pretium lacus bibendum eget. Egestas nibh magna ipsum sapien
                consectetur platea pulvinar vitae tincidunt. Id massa mauris
                mauris vitae sit in pellentesque enim mauris. Nisl ipsum est
                praesent pretium fermentum accumsan. Erat cum dolor enim rutrum
                risus eu.
              </Typography>
            </Box>
            <Box sx={{ pt: 2, pb: 5, borderBottom: '1px solid #E4E4E4' }}>
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '20px',
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {'Location and Purpose'}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 0.8,
                  pb: 0.4,
                }}
              >
                <Typography
                  sx={{
                    color: '#333',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                  variant="body1"
                >
                  {'Purpose:'}
                </Typography>
                <Typography
                  sx={{
                    color: '#126FAA',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                  variant="body1"
                >
                  {'Sell'}
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.341891430968!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2s!4v1702632437533!5m2!1sen!2s"
                  title="Property Location"
                  width="100%"
                  height="150"
                  allowfullscreen=""
                  frameBorder="0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
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
