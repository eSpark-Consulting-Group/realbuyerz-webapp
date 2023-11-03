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

export default function ProfileForm({ data }) {
  const { image, feilds } = data;
  const [selectedCountryObject, SetselectedCountryObject] = React.useState();
  const [inputData, setInputData] = React.useState(
    Object.fromEntries(feilds.map((field) => [field.name, '']))
  );

  const [selectedItem, setSelectedItem] = React.useState(
    '/images/agent_form/pakistan_flag.png'
  );
  const [selectedItem2, setSelectedItem2] = React.useState(
    '/images/agent_form/pakistan_flag.png'
  );

  const flagChange2 = () => {
    const { value } = e.target;
    setSelectedItem2(value);
  };

  const handleChange = (e, name, i) => {
    const { value } = e.target;
    console.log(inputData);

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSelectedItem(value);
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
          backgroundPosition: 'center',
          pr: { xs: 1, md: 0 },
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
            value,
            buttonText,
            pt,
            sizes,
            width,
            multiline,
          } = feild;

          const selectedCountryObject = dropdowns?.find(
            (item) => item.icon === selectedItem
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
                    <Typography variant="h6">{label}</Typography>
                    <Box
                      sx={{
                        display: `${
                          label === 'Whatsapp' || label === 'Mobile'
                            ? 'flex'
                            : 'null'
                        }`,
                        gap: 2,
                      }}
                    >
                      {index == 4 ? (
                        <RBSelect
                          menuItem={dropdowns}
                          // name={inputData[index]?.name}
                          value={selectedItem}
                          // value={'wewe'}
                          label={'Select Country'}
                          onChange={(e) => handleChange(e, name, index)}
                          sx={{
                            width: { md: '65px', lg: '90px' },
                            height: { lg: '53px' },
                          }}
                        />
                      ) : (
                        <RBSelect
                          menuItem={dropdowns}
                          // name={inputData[index]?.name}
                          value={selectedItem2}
                          // value={'wewe'}
                          label={'Select Country'}
                          onChange={flagChange2}
                          sx={{
                            width: { md: '65px', lg: '90px' },
                            height: { lg: '53px' },
                          }}
                        />
                      )}

                      <RBInput
                        sx={{
                          width: width,
                        }}
                        name={name}
                        value={inputData[name]}
                        onChange={(e) => handleChange(e, name)}
                        type={type}
                        place={`${place} ${
                          label === 'Whatsapp' || label === 'Mobile'
                            ? selectedCountryObject?.code
                            : 'Phone Number'
                        }`}
                        helperText={helperText}
                        id={id}
                        rows={rows}
                        multiline={multiline}
                      />
                      {helperText && <RBHelperText helperText={helperText} />}
                      {buttonText && (
                        <Button
                          variant="primary"
                          type="button"
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
      </Grid>
    </Box>
  );
}
