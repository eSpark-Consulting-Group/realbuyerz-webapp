import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/base";
import LiveBiddingTitle from "./LiveBiddingTitle";

const BiddingDetails = () => {
  return (
    <>
    <LiveBiddingTitle data={"LIVE BIDDING IN PROPERTIES"} />
      <Grid container spacing={2} xs={12} sx={{}}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            marginLeft: 3,
            backgroundColor: "#AAD9FF",
            borderRadius: "16px",
            marginTop: "30px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "382px",
              background: "#EDF7FF",
              zIndex: -1,
              marginLeft: "0px",
              borderRadius: "16px 200px 200px 16px",
            }}
          ></Box>
          <Grid
            container
            spacing={2}
            sx={{
              padding: 6,
            }}
          >
            <Grid
              item
              xs={7}
              sx={{
                color: "#333",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              <Typography variant="h4">NEED 4 BEDROOM APARTMENT</Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                textAlign: "right",
                alignContent: "end",
                color: "#333",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Typography variant="body1">Est. Range:</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  80M
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              sx={
                {
                  //   color: "#FB631C",
                  //   fontFamily: "Inter",
                  //   fontSize: "12px",
                  //   fontStyle: "normal",
                  //   fontWeight: 500,
                  //   lineHeight: "normal",
                  //   paddingRight: "30px",
                  //   textAlign: "end",
                }
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid #FB631C",
                  borderRadius: "15px",
                  padding: "3px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    background: "red",
                    color: "#FB631C",
                    display: "inline-block",
                  }}
                >
                  View
                </Button>
              </Box>

              {/* <Box
              sx={{
                background: "white",
                borderRadius: "17px",
                // boxShadow: 2,
                padding: 2,
                // marginLeft: "auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#126FAA" }}
              >
                View
              </Typography>
            </Box> */}
            </Grid>
            <Box
              sx={{
                color: "#333",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                paddingRight: "10px",
                paddingLeft: "20px",
              }}
            >
              <Typography variant="body1">Posted 39 minutes ago</Typography>
            </Box>

            <Box
              sx={{
                color: "#333",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                paddingRight: "10px",
                paddingLeft: "20px",
                paddingTop: "40px",
                paddingBottom: "20px",
              }}
            >
              <Typography variant="body2">
                We are planning to buy a new home in the month of dec, if
                someone knows about it please let me know but make sure its in
                the society with parking area and security like something. We
                are planning to buy a new home in the month of dec, if someone
                knows about it please let me know but make sure its in the
                society with parking area and security like something
              </Typography>
            </Box>
            <Box sx={{ paddingLeft: "20px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Status:&nbsp;
                </Typography>
                <Typography variant="body1">BUYING</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  City:&nbsp;
                </Typography>
                <Typography variant="body1">Karachi</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Area:&nbsp;
                </Typography>
                <Typography variant="body1">GULSHAN-E-IQBAL</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Proposal:&nbsp;
                </Typography>
                <Typography variant="body1">5 to 10</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Connects:&nbsp;
                </Typography>
                <Typography variant="body1">8</Typography>
              </Box>
            </Box>
          </Grid>
          <Box
            sx={{
              position: "absolute",
              width: "300px",
              height: "382px",
              background: "#EDF7FF",
              zIndex: -1,
              marginLeft: "0px",
              borderRadius: "200px 16px  16px 200px",
              top: "0",
              left: "78.3%",
            }}
          ></Box>
        </Box>
      </Grid>
    </>
  );
};

export default BiddingDetails;
