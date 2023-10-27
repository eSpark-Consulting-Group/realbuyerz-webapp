import { Typography, Grid  } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Cateogries = ({ data }) => {
  return (
    <Box sx={{
        mt: 2,
        mb:3
    }}>
      {data.map((items) => {
        return (
          <>
            <Grid item xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "60%",
                  justifyContent: "space-between",
                  alignItems:"center"
                }}
              >
                <Box
                  sx={{
                    padding: "0px 0px 0px 31px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                    }}
                  >
                    {items.mainTitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "0px 0px 0px 20px",
                  }}
                >
                  {items.icons}
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  paddingLeft: "31px",
                  paddingBottom: "7px",
                  color: "#FB631C",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  letterSpacing: "0.56px",
                }}
              >
                {items.categoryTyes}
              </Typography>
            </Grid>
          </>
        );
      })}
    </Box>
  );
};

export default Cateogries;
