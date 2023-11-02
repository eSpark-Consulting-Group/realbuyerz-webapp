'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Button, Typography } from '@mui/material';
import RBSelect from './RBSelect';

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

export default function ProfileForm({ data }) {
  const { heading, buttonText, image, feilds, passwordFeilds } = data;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        xs={11}
        md={9}
        item
        sx={{
          mx: 'auto',
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: '2px solid black',
          pr: { xs: 1, md: 0 },
          columnGap:4,
          // p:5
          
        }}
      >
        <Grid item xs={12}>
          <Item>Profile Section</Item>
        </Grid>
        {feilds?.map((feild, index) => {
          const {
            id,
            label,
            place,
            type,
            helperText,
            dropdowns,
            rows,
            buttonText,
            pt,
            sizes,
          } = feild;
          return (
            <Grid key={index} item xs={sizes?.xs} sm={sizes?.sm} md={sizes?.md}>
              <Item>
                <Box
                  sx={{
                    width: '90%',
                    height: '100%',
                    mx:'auto',
                    pt: { xs: 0, md: `${pt}` },
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '18px',
                  }}>
                    <Typography variant="h6">{label}</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <RBSelect menuItem={dropdowns} sx={{ width: '12%' }} />
                      <RBInput
                        sx={{
                          width: {
                            xs: '100%',
                            sm: '100%',
                            md: '100%',
                            lg: '430px',
                            xl: '430px',
                          },
                          // height: '45px',
                        }}
                        type={type}
                        place={place}
                        helperText={helperText}
                        id={id}
                        rows={rows}
                      />
                      {buttonText && (
                        <Button
                          variant="primary"
                          sx={{
                            // width: '100px',
                            // height: '30px',
                            borderRadius: '5px',
                            alignSelf: 'center',
                          }}
                        >
                          {buttonText}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
          );
        })}
        <Grid item xs={12} sx={{ paddingLeft: '0 !important' }}>
          <Item
            sx={{
              background: 'rgba(218, 233, 242, 0.40)',
              height: '71px',
              paddingLeft: 5,
            }}
          >
            <Typography variant="h6" color={'text'}>
              Change Password
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
