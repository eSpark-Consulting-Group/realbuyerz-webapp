import { Box, Button, Typography, Grid } from '@mui/material';
import React from 'react';
import RBInput from '../AgentProfile/Agent-Profile-Forms/RBInput';
import BuyConnectSelect from './BuyConnectSelect';

const BuyConnects = ({
  title,
  discription,
  image,
  buttonText,
  feilds,
  dropdown,
}) => {
  const { items } = dropdown;

  const userDetail = Object.fromEntries(
    feilds.map((field) => [field.name, field.value])
  );

  const [buyConnectData, setBuyConnectData] = React.useState({
    ...userDetail,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyConnectData({
      ...buyConnectData,
      [name]: value,
    });
  };

  console.log(buyConnectData, 'dropValue');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container xs={12} item>
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', lg: '946px' },
            py: 2,
            border: '2px solid #E4E4E4',
            borderRadius: '10px',
            backgroundColor: '#fff',
            backgroundImage: `url('${image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '60%' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'block', lg: 'flex' },
              alignItems: 'center',
              gap: 1,
              px: 4,
              pb: 2,
              borderBottom: '2px solid #E4E4E4',
            }}
          >
            <Typography variant="h4">{title}</Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 400, my: { xs: 1, lg: 0 } }}
            >
              {discription}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 4.5,
              py: 1.5,
            }}
          >
            {feilds?.map((field, i) => (
              <Box key={i} sx={{ width: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    my: { xs: 2, lg: 2 },
                    fontSize: { xs: '17px', sm: '20px' },
                  }}
                >
                  {field?.label}
                </Typography>

                {field?.id !== 2 ? (
                  <RBInput
                    type={field?.type}
                    place={field?.place}
                    value={field?.value}
                    name={field?.name}
                    onChange={handleChange}
                    disabled={true}
                    sx={{
                      width: { xs: '100%', sm: '100%', md: '100%', lg: '50%' },
                      '& input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                      },
                    }}
                  />
                ) : null}

                {field?.id == 2 ? (
                  <BuyConnectSelect
                    name={field?.name}
                    placeHolder={'Ok'}
                    value={buyConnectData.select_the_amount_to_buy}
                    menuItem={items}
                    onChange={handleChange}
                    sx={{ width: { xs: 'auto', lg: '50%' } }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>

          <Box sx={{ px: 4, py: 2 }}>
            <Button
              variant="outlined"
              sx={{
                width: { xs: '100%', sm: '161px' },
                height: '41px',
                borderRadius: { xs: '7px', sm: '10px' },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default BuyConnects;
