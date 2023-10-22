"use client"
import React from "react";
import {
    Typography,
    Button,
    Avatar,
    Grid,
    Box
} from "@mui/material";
import Image from "next/image";
import { agentProfile } from "./constaints";
const ProfileAgent = () => {
    const handleClick = () => {
        console.log("hello")
    }
    return (
        <Grid container spacing={2}>
  <Grid item xs={12} md={11}>
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        height: 500,
        background: "white",
        borderRadius: 8,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        padding: 3,
        gap: 2,
        marginTop: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: 27,
          fontWeight: "bold",
          fontFamily: "Inter",
          color: "zinc",
        }}
      >
        {agentProfile.price}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontFamily: "Inter",
          color: "zinc",
        }}
      >
        Reach out to us:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height:"60px",
          fontSize:"18px",
        // padding:"7px",
        gap:"10px",
        color:"white",
          background:  theme => theme.palette.primary.main,
          borderRadius: 2,
        }}
      >
        {/* <Button  sx={{
            gap:"5px",
            border:"none"
        }}> */}
          <Image src="assets/images/msgicon.svg" width={28} height={28} />
          Message
        {/* </Button> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: 195,
          background: "white",
          borderRadius: 2,
          border: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Avatar src={agentProfile.avartar} sx={{ width: 100, height: 100 }} />
          <Typography
            sx={{
              ml: 2,
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "Inter",
              color: "#333",
            }}
          >
            {agentProfile.name}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              width: "100%",
              fontSize: 20,
              background: "#F5F6FB",
              fontWeight: 500,
              fontFamily: "Inter",
              color: "#515151",
              textTransform: "capitalize",
            }}
            onClick={handleClick}
          >
            View Agent Profile
          </Button>
        </Box>
      </Box>
      <Typography
        sx={{
          width: "100%",
          fontFamily: "Inter",
          color: "zinc",
          fontSize: 16,
          textAlign: "start",
        }}
      >
        {agentProfile.description}
      </Typography>
    </Box>
  </Grid>
</Grid>
        // <Box
        //     sx={{
        //         width: 400,
        //         height: 500,
        //         background: 'white',
        //         borderRadius: 8,
        //         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        //         display: 'flex',
        //         flexDirection: 'column',
        //         justifyContent: 'center',
        //         alignItems: 'left',
        //         padding: 3,
        //         gap: 2,
        //         marginTop:"20px"
        //     }}
        // >
        //     <Typography
        //         sx={{
        //             fontSize: 27,
        //             fontWeight: 'bold',
        //             fontFamily: 'Inter',
        //             color: 'zinc',

        //         }}
        //     >PKR {agentProfile.price}</Typography>
        //     <Typography
        //         sx={{
        //             fontSize: 16,
        //             fontFamily: 'Inter',
        //             color: 'zinc',
        //         }}
        //     >Reach out to us:</Typography>
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: "center",

        //             width: '100%',
        //             height: 'autos',
        //             background: '#FB631C',
        //             borderRadius: 2,
        //         }}
        //     >
        //         <Button variant="primary"
        //             sx={{
        //                 // background: 'transparent',
        //                 fontSize: 25,
        //                 // fontWeight: 'medium',
        //                 // fontFamily: 'Inter',
        //                 // textTransform: "capitalize",
        //                 color: 'white',
        //                 gap: 1,
        //             }}
        //         >
        //             <Image src="assets/images/msgicon.svg" width={24} height={24} />
        //             Message</Button>
        //     </Box>
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             width: 350,
        //             height: 195,
        //             background: 'white',
        //             borderRadius: 2,
        //             border: '1px solid #e0e0e0',
        //         }}
        //     >
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 p: 2,
        //             }}
        //         >
        //             <Avatar src={agentProfile.avartar} sx={{ width: 100, height: 100 }} />
        //             <Typography
        //                 sx={{
        //                     ml: 2,
        //                     fontSize: 25,
        //                     fontWeight: 'bold',
        //                     fontFamily: 'Inter',
        //                     color: '#333',
        //                 }}
        //             >
        //                 {agentProfile.name}
        //             </Typography>
        //         </Box>
        //         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        //             <Button
        //                 sx={{
        //                     width: "100%",
        //                     fontSize: 20,
        //                     background: 'purple',
        //                     fontWeight: '500px',
        //                     fontFamily: 'Inter',
        //                     color: '#515151',
        //                     textTransform: "capitalize"
        //                 }}
        //                 onClick={handleClick}
        //             >
        //                 View Agent Profile
        //             </Button>
        //         </Box>
        //     </Box>
        //     <Typography sx={{
        //         width: 350,
        //         fontFamily: 'Inter',
        //         color: "zinc",
        //         fontSize: 16,
        //         textAlign: 'start'
        //     }}

        //     >{agentProfile.description}</Typography>
        // </Box>
    );
};
export default ProfileAgent;
