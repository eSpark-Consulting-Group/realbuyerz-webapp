'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Button, Typography } from '@mui/material';
import RBSelect from './RBSelect';
import RBCheckbox from './RBCheckbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  //   justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function ProfilePasswordForm({ data }) {
  const { buttonText, image, passwordFeilds, checkbox } = data;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        xs={12}
        md={12}
        item
        sx={{
          mx: 'auto',
          display: 'block',
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          // borderBottom: '2px solid #E4E4E4',
          // borderRight: '2px solid #E4E4E4',
          // borderLeft: '2px solid #E4E4E4',
          // columnGap: { md: 0, lg: 2, xl: 0 },
          pr: { xs: 1, md: 0 },
          pt: { xs: 2, md: 7 },
          pb: { xs: 2, md: 7 },
        }}
      >
        {passwordFeilds?.map((feild, index) => {
          const { id, label, place, type, helperText, sizes, width } = feild;
          return (
            <Grid key={index} item xs={sizes?.xs} sm={sizes?.sm} md={sizes?.md}>
              <Item>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    mx: 'auto',
                    pt: { xs: 0 },
                    pl: { lg: 5, md: 5 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: '18px',
                    }}
                  >
                    <Typography variant="h6">{label}</Typography>
                    <RBInput
                      sx={{
                        width: width,
                      }}
                      type={type}
                      place={place}
                      helperText={helperText}
                      id={id}
                    />
                  </Box>
                </Box>
              </Item>
            </Grid>
          );
        })}
        <RBCheckbox
          sx={{
            ml: { xs: 2, md: 7 },
            my: { xs: 1, md: 1 },
            alignItems: 'center',
          }}
          label={checkbox.label}
        />
        <Button
          sx={{
            ml: { xs: 2, md: 7 },
            mt: { xs: 2, md: 3 },
            width: { xs: 'auto', md: '160px' },
            height: { xs: 'auto', md: '45px' },
          }}
          variant="primary"
        >
          {buttonText}
        </Button>
      </Grid>
    </Box>
  );
}
