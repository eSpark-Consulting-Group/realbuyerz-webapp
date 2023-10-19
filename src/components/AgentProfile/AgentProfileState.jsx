import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  SvgIcon,
  Container,
} from "@mui/material";

const AgentProfileState = () => {
  const Properties = [
    {
      title: "46 Properties For Sale",
      view: "View All",
      PropertyNumber1: "34",
      PropertieName1: "Plots",
      PropertyNumber2: "7",
      PropertieName2: "Houses",
      PropertyNumber3: "5",
      PropertieName3: "Commercials",
    },
    {
      title: "46 Properties For Rent",
      view: "View All",
      PropertyNumber1: "34",
      PropertieName1: "Plots",
      PropertyNumber2: "7",
      PropertieName2: "Houses",
      PropertyNumber3: "5",
      PropertieName3: "Commercials",
    },
  ];
  return (
    <Box
      sx={{
        width: "440px",
        height: "325px",
        marginBottom: 10,
      }}
    >
      <Box sx={{ pt: 8 }}>
        <Typography
          variant="h4"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Inter",
          }}
        >
          Properties By Arman Khan
        </Typography>
        {Properties.map((items, index) => (
          <Box key={index} sx={{ pt: 5 }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    color: "#777777",
                    paddingBottom: 1,
                  }}
                >
                  <SvgIcon
                    sx={{ fontSize: 19, mr: 1, mb: 1 }}
                    viewBox="0 0 19 17"
                    color="primary"
                  >
                    <path
                      d="M19 10.2379L9.5 2.96528L0 10.2379V7.27266L9.5 0L19 7.27266V10.2379ZM16.625 9.97327V17H11.875V12.3155H7.125V17H2.375V9.97327L9.5 4.70322L16.625 9.97327Z"
                      fill="#FB631C"
                    />
                  </SvgIcon>
                  {items.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    color: "orange",
                  }}
                >
                  View All
                  <SvgIcon
                    sx={{ fontSize: 10, ml: 0.5 }}
                    viewBox="0 0 7 7"
                    color="primary"
                  >
                    <path
                      d="M1 6L6 1M6 1V5.8M6 1H1.2"
                      stroke="#FB631C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </SvgIcon>
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              {["1", "2", "3"].map((number) => (
                <Grid item xs={4} key={number}>
                  <Paper
                    sx={{
                      width: "100%",
                      height: 80,
                      maxWidth: "sm",
                      border: 0.5,
                      borderColor: "#777777",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "lg",
                          fontWeight: "bold",
                          color: "#126FAA",
                          textAlign: "center",
                        }}
                      >
                        {items[`PropertyNumber${number}`]}
                      </Typography>
                      <Typography sx={{ fontSize: "xs", color: "#777777" }}>
                        {items[`PropertieName${number}`]}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AgentProfileState;
