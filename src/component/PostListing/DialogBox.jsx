import React from 'react';
import { Dialog, DialogContent, Box } from '@mui/material';

import Facilities from './Facilities';

const DialogBox = (props) => {
  const { onClose, open, data, onSelected } = props;
  const handleClose = () => {
    onClose();
  };

  const handleCancelButton = () => {
    onClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <Box>
          <DialogContent>
            <Facilities
              cancel={handleCancelButton}
              Data={data}
              onSelected={onSelected}
            />
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default DialogBox;
