'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Button, Typography } from '@mui/material';
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

export default function ProfilePasswordForm({ data }) {
  const { buttonText, image, passwordFeilds, checkbox } = data;
  const [inputData, setInputData] = React.useState(
    Object.fromEntries(passwordFeilds?.map((field) => [field.name, '']))
  );
  const handleChange = (e, name) => {
    const { value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(inputData, 'input123');
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
          pr: { xs: 1, md: 0 },
          pt: { xs: 2, md: 7 },
          pb: { xs: 2, md: 7 },
        }}
      >
        {passwordFeilds?.map((feild, index) => {
          const { id, label, place, type, helperText, sizes, width, name } =
            feild;
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
                      value={inputData[name]}
                      onChange={(e) => handleChange(e, name)}
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
          name={name}
          value={inputData[name]}
          onChange={(e) => handleChange(e, name)}
        >
          {buttonText}
        </Button>
      </Grid>
    </Box>
  );
}
