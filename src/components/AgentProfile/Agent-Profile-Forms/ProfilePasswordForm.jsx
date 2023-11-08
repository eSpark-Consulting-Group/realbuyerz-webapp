'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Typography } from '@mui/material';
import RBCheckbox from './RBCheckbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  alignItems: 'center',
  display: 'flex',
  border: 'none',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));

export default function ProfilePasswordForm({
  data,
  values,
  errors,
  touched,
  handleChange,
}) {
  const { image, passwordfields, checkbox } = data;
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
          backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '50%' },
          pr: { xs: 2, md: 0 },
          pt: { xs: 2, md: 7 },
          pb: { xs: 2, md: 3 },
        }}
      >
        {passwordfields?.map((field, index) => {
          const { id, label, place, type, helperText, sizes, width, name } =
            field;
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
                      name={name}
                      type={type}
                      place={place}
                      value={values[name]}
                      onChange={handleChange}
                      error={errors[name] && touched[name] ? true : false}
                      helperText={(touched[name] && errors[name]) || helperText}
                      id={
                        (errors[name] && touched[name]) || id
                          ? 'errors[name] && touched[name]'
                          : null
                      }
                    />
                  </Box>
                </Box>
              </Item>
            </Grid>
          );
        })}
        <RBCheckbox
          label={checkbox.label}
          sx={{
            ml: { xs: 2, md: 7 },
            my: { xs: 1, md: 1 },
            alignItems: 'center',
          }}
        />
      </Grid>
    </Box>
  );
}
