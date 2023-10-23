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

const AgentProfiles = ({
  title,
  location,
  NoOfRent,
  NoOfSales,
  buttonTitle,
  salesIcon,
  rentIcon,
  locationIcon,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        background:
        "linear-gradient(180deg, rgba(75, 183, 255, 0.16) 0%, rgba(75, 183, 255, 0.04) 54.17%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "185px",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          borderRadius: "0 110px 110px 0"
        }}
      ></Box>

      <Box
        item
        sx={{
          display: "flex",
          position: "relative", 
        }}
      >
        <Grid
          sx={{
            width: "180px",
            height: "160px",
            margin: "auto",
            display: 'flex',
            alignItem: "center",
            justifyContent: "center"
          }}
        >
          <img
              src="/images/Ellipse.png"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                zIndex: 1, 
              }}
            />
        </Grid>
        <Grid
          sx={{
            padding: 2,
            width: "100%",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            sx={{
              height: "auto",
              width: "100%",
            }}
          >
            <Grid item xs={4} sx={{ display: "flex", width: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    color: "#1176AD",
                    mt: 2,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#777777",
                    fontWeight: "medium",
                    marginTop: 1,
                  }}
                >
                  {locationIcon}
                  {location}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#777777",
                    fontWeight: "medium",
                    mt: 1,
                    marginBottom: 0,
                  }}
                >
                  {salesIcon}
                  {NoOfSales}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#777777", fontWeight: "medium", mt: 1 }}
                >
                  {rentIcon}
                  {NoOfRent}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                paddingRight: "10px",
              }}
            >
              <Paper
                sx={{
                  background: "white",
                  borderRadius: "17px",
                  boxShadow: 2,
                  padding: 2,
                  marginLeft: "auto",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" ,
                  color: "#126FAA"}}
                >
                  {buttonTitle}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AgentProfiles;
