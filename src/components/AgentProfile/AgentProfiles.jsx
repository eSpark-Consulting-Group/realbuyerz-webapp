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
import { width } from "@mui/system";

const AgentProfiles = ({ title, location, NoOfRent, NoOfSales , buttonTitle , salesIcon , rentIcon, locationIcon }) => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        background:
          "linear-gradient(180deg, rgba(75, 183, 255, 0.16) 0%, rgba(75, 183, 255, 0.04) 54.17%)",
        borderRadius: "100px 0 0 100px",
      }}
    >
      <Box item sx={{ display: "flex", width: "auto", height: "auto" }}>
        <Grid
          sx={{
            width: 290,
            height: "auto",
            borderRadius: "47%",
            backgroundColor: "white",
          }}
         >
          <Box
            sx={{
              width: 200,
              height: "auto",
              padding: 0,
              borderRadius: "40%",
              backgroundColor: "white",
            }}
          >
            <img
              src="/images/Ellipse.png"
              alt="Profile"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
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
            <Grid item sx={{ display: "flex", width: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  width: "auto",
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
                  sx={{ color: "#777777", fontWeight: "medium", marginTop: 1 }}
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
              xs={2}
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
                  sx={{ color: "text.primary", fontWeight: "bold" }}
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
