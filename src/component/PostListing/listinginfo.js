import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
const ListingInfo = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px"
            }}>
                <Image
                    src="/assets/images/home.svg"
                    width={40}
                    height={40}
                />
                <Typography sx={{
                    fontSize: "22px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    color: "#909394"
                }}>Listings Information</Typography>

            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px"
            }}>
                <Image
                    src="/assets/images/Property.svg"
                    width={40}
                    height={40}
                />
                <Typography sx={{
                    fontSize: "22px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    color: "#909394"
                }}>Property Price</Typography>

            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px"
            }}>
                <Image
                    src="/assets/images/Gallery.svg"
                    width={40}
                    height={40}
                />
                <Typography sx={{
                    fontSize: "22px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    color: "#909394"
                }}>Good Property Images</Typography>

            </Box>
        </Box>
    )
}
export default ListingInfo;