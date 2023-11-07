'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RBInput from './RBInput';
import { Button, Typography } from '@mui/material';
import RBSelect from './RBSelect';
import RBHelperText from './RBHelperText';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

export default function ProfileForm({
  data,
  handleChange,
  values,
  errors,
  touched,
}) {
  const { image, feilds } = data;
  const [verifyText, setVerifyText] = React.useState('unverified');

  const [selectedItem, setSelectedItem] = React.useState(
    '/images/agent_form/pakistan_flag.png'
  );
  const [selectedItem2, setSelectedItem2] = React.useState(
    '/images/agent_form/pakistan_flag.png'
  );

  const handleVerify = (name) => {
    if (values[name] !== '') {
      setVerifyText('verified');
    } else {
      setVerifyText('unverified');
    }
  };
  const flagChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };

  const flagChange2 = (e) => {
    const { value } = e.target;
    setSelectedItem2(value);
  };

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
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: { xs: '', sm: '60% auto' },
          pr: { xs: 2, md: 0 },
          pt: { xs: 2, md: 7 },
          pb: { xs: 2, md: 7 },
        }}
      >
        {feilds?.map((feild, index) => {
          const {
            id,
            label,
            place,
            type,
            helperText,
            dropdowns,
            rows,
            name,
            buttonText,
            pt,
            sizes,
            width,
            multiline,
          } = feild;

          const selectedCountryObject1 = dropdowns?.find(
            (item) => item.icon === selectedItem
          );
          const selectedCountryObject2 = dropdowns?.find(
            (item) => item.icon === selectedItem2
          );

          return (
            <Grid key={index} item xs={sizes?.xs} sm={sizes?.sm} md={sizes?.md}>
              <Item>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    mx: 'auto',
                    pt: { xs: 0, md: `${pt}` },
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
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {label}
                      {label === 'Mobile' ? (
                        <Typography
                          sx={{
                            color: `${
                              verifyText === 'verified' ? '#1DBE4F' : '#FD0D1B'
                            }`,
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                          }}
                        >
                          {verifyText === 'verified' ? (
                            <CheckCircleOutlineIcon sx={{ mr: 0.5 }} />
                          ) : (
                            <HighlightOffIcon sx={{ mr: 0.5 }} />
                          )}
                          {verifyText}
                        </Typography>
                      ) : null}
                    </Typography>
                    <Box
                      sx={{
                        display: {
                          xs: `${
                            label === 'Whatsapp' || label === 'Mobile'
                              ? 'flex'
                              : 'flex'
                          }`,
                        },
                        columnGap: 2,
                        flexDirection: { xs: 'column', sm: 'row' },
                        rowGap: { xs: 3 },
                      }}
                    >
                      {label == 'Whatsapp' ? (
                        <RBSelect
                          menuItem={dropdowns}
                          value={selectedItem}
                          label={'Select Country'}
                          onChange={(e) => flagChange(e)}
                          sx={{
                            width: {
                              xs: '80px',
                              sm: 'auto',
                              md: '65px',
                              lg: '90px',
                            },
                            height: { xs: '53px', sm: 'auto', lg: '53px' },
                          }}
                        />
                      ) : (
                        <RBSelect
                          menuItem={dropdowns}
                          value={selectedItem2}
                          label={'Select Country'}
                          onChange={(e) => flagChange2(e)}
                          sx={{
                            width: {
                              xs: '80px',
                              sm: 'auto',
                              md: '65px',
                              lg: '90px',
                            },
                            height: { xs: '53px', sm: 'auto', lg: '53px' },
                          }}
                        />
                      )}

                      <RBInput
                        sx={{
                          width: width,
                          gap: 1,
                          textAlign: 'left',
                        }}
                        rows={rows}
                        name={name}
                        multiline={multiline}
                        value={values[name]}
                        onChange={handleChange}
                        error={errors[name] && touched[name] ? true : false}
                        helperText={
                          (touched[name] && errors[name]) || helperText
                        }
                        id={
                          (errors[name] && touched[name]) || id
                            ? 'errors[name] && touched[name]'
                            : null
                        }
                        type={type}
                        place={`${place} ${
                          label === 'Whatsapp'
                            ? selectedCountryObject1?.code
                            : '' || label === 'Mobile'
                            ? selectedCountryObject2?.code
                            : ''
                        }`}
                      />
                      {buttonText && (
                        <Button
                          variant="primary"
                          type="button"
                          disabled={
                            verifyText === 'verified' && values[name] !== ''
                              ? true
                              : false
                          }
                          onClick={() => handleVerify(name)}
                          sx={{
                            width: { xs: '100%', sm: 'auto' },
                            height: { xs: '100%', sm: 'auto' },
                            borderRadius: '5px',
                            alignSelf: 'center',
                            '&:hover': { color: '#fff' },
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
      </Grid>
    </Box>
  );
}
