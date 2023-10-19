import React from "react";
import Sliders from "@/src/component/Slider/slider";
import ProfileAgent from "@/src/component/Profile/profile";
import PropertyLocation from "@/src/component/PropertyDetails/propertyDetails";
import PropertyDescription from "@/src/component/PropertyDescription/propertyDescription";
import { Box } from "@mui/material";
const PropertyDeal = () => {
    return (
        <>
            <Box sx={{
                paddingTop: "20px",
            }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "50px"
                    }}
                >

                    <Sliders />
                    <ProfileAgent />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "white",
                        paddingRight: "400px"
                    }}
                >
                    <PropertyLocation />
                    <PropertyDescription />
                </Box>
            </Box>

        </>
    )
}
export default PropertyDeal;