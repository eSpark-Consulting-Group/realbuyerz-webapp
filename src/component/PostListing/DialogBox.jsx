import React from 'react';
import {
  Dialog,
  DialogContent,
} from '@mui/material';

import Facilities from './Facilities';

const DialogBox = (props) => {
  const { onClose, selectedValue, open, data } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCancelButton = (value) => {
    onClose(value);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <Facilities cancel={handleCancelButton} Data={data} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
