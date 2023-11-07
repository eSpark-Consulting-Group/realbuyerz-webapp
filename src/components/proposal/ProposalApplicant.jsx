import React from 'react';
import { Grid, Typography } from '@mui/material';

function ProposalApplicant() {
  return (
    <Grid
      item
      xs={2}
      sx={{
        p: '40px 40px 40px 20px',
        justifyContent: 'center',
        borderRight: '1px solid #E4E4E4',
      }}
    >
      <Typography variant="h6" sx={{ pb: '10px' }}>
        Applicant
      </Typography>
      <Typography variant="body1">
        Kashif has applied to or been invited to your or your company’s job need
        experience custom template designers for custom posts archive creation
      </Typography>
    </Grid>
  );
}

export default ProposalApplicant;
