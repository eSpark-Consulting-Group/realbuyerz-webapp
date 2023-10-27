import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import LiveBiddingTitle from "./LiveBiddingTitle";
import { liveBiddingInPropertiesData } from "@/app/constents/Live-bidding/constants";

const BiddingDetails = () => {
  return (
    <>
      <LiveBiddingTitle data={"LIVE BIDDING IN PROPERTIES"} />
      {liveBiddingInPropertiesData.map((item) => {
        return (
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
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "300px",
                  height: "342px",
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
                  <Typography variant="h4">{item.title}</Typography>
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
                    paddingRight: "40px"
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
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.estimateRange}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                  sx={{
                    paddingLeft: "93px"
                  }}>
                    <Button
                      sx={{
                        border: "1px solid #FB631C",
                        borderRadius: "90px",
                        alignItems: "end",
                        padding: "0px"
                      }}
                    >
                      View
                    </Button>
                  </Box>
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
                  <Typography variant="body1">{item.time}</Typography>
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
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "14.52px",
                      fontFamilly: "inter",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box sx={{ paddingLeft: "20px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Status:&nbsp;
                    </Typography>
                    <Typography variant="body1">{item.status}</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      City:&nbsp;
                    </Typography>
                    <Typography variant="body1">{item.City}</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Area:&nbsp;
                    </Typography>
                    <Typography variant="body1">{item.Area}</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Proposal:&nbsp;
                    </Typography>
                    <Typography variant="body1">{item.Proposal}</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Connects:&nbsp;
                    </Typography>
                    <Typography variant="body1">{item.Connects}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Box
                sx={{
                  position: "absolute",
                  width: "300px",
                  height: "342px",
                  background: "#EDF7FF",
                  zIndex: -1,
                  marginLeft: "0px",
                  borderRadius: "200px 16px  16px 200px",
                  top: "0",
                  left: "75.8%",
                }}
              ></Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default BiddingDetails;
