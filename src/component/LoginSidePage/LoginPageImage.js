import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
const LoginImage = () => {
    return (

        < Box >
            <Image
                src={"assets/images/boximage.svg"}
                width={470}
                height={500}
            />
        </Box>
    )
}
export default LoginImage;
{/* <Box
                    component="div"
                    sx={{
                        width: '500px',
                        height: '300px',
                        backgroundImage: 'url("/assets/images/boximage.svg")',
                        // backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        mx: "auto"
                    }}
                ></Box> */}