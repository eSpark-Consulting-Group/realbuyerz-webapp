import React from "react";
import { Typography, Box } from "@mui/material";
import { Amenities } from "./constaints";
import { Area } from "./constaints";
import { Demand } from "./constaints";
import { Purpose } from "./constaints";
import { PropertyType } from "./constaints";
import { City } from "./constaints";
import { propertyTitle } from "./constaints";
import { propertyDescription } from './constaints';
const PropertyDescription = () => {
    return (
        <Box
            sx={{

                // paddingBottom: "19px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}
        >
            <Box
                sx={{
                    flex:
                        '1 1 0',
                }}
            >
                <Box sx={{
                    color: "#333333",
                    fontSize: "30px",
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    wordWrap: "break-word"
                }}
                >Title</Box>
                <Typography>{propertyTitle.titleone}</Typography>
                <Typography
                    sx={{
                        textAlign: 'left',
                        color: '#333333',
                        fontSize: '30px',
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        overflowWrap: 'break-word',

                    }}
                >Description</Typography>
                <Box
                    sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        width: "700px"
                    }}>
                    <Typography>
                        {propertyDescription.placeone}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400
                    }} >Location & Purpose</Typography>
                    <Box sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                    }}>
                        <span >Purpose: </span>
                        <span >{Purpose.sell}</span>
                    </Box>
                    <Box sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                    }}>
                        <span >Property Type: </span>
                        <span >{PropertyType.house}</span>
                    </Box>
                    <Box sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                    }}>
                        <span >City: </span>
                        <span>{City.karachi}</span>
                    </Box>
                </Box>
                <Typography sx={{
                    color: "#333333",
                    fontSize: "16px",
                    fontFamily: 'Inter',
                    fontWeight: 400
                }} >Location:</Typography>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <Box>
                    <Typography
                        sx={{
                            color: "#333333",
                            fontSize: "18px",
                            fontFamily: 'Inter',
                            fontWeight: 700
                        }}
                    >Amenities</Typography>
                    <Box sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400
                    }}
                    >
                        {/* {Amenities.map((item, index) => (
                            <Typography key={index}>{item.Amenities}</Typography>
                        ))} */}
                        {/* const amenityElements = Object.values(Amenities).map((amenity, index) => (
                        <Typography key={index}>{amenity}</Typography>
                        )); */}
                        <Typography
                        >{Amenities.park}</Typography>
                        <Typography >{Amenities.masjid}</Typography>
                        <Typography >{Amenities.playground}</Typography>
                        <Typography >{Amenities.security}</Typography>
                        <Typography >{Amenities.security}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: "#333333",
                            fontSize: "18px",
                            fontFamily: 'Inter',
                            fontWeight: 700
                        }}
                    >Area</Typography>
                    <Typography sx={{
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400
                    }}>{Area.area}</Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "18px",
                        fontFamily: 'Inter',
                        fontWeight: 700,
                    }}
                    > Demand</Typography>
                    <Typography sx={{
                        color: "#333333",
                        fontSize: "16px",
                        fontFamily: 'Inter',
                        fontWeight: 400,
                    }}>{Demand.demand}</Typography>
                </Box>
            </Box>
        </Box >
    );
}
export default PropertyDescription;







