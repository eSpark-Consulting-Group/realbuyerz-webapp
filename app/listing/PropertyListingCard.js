import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
    },
    section: {
        margin: "20px 0",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
};

const PropertyListingCard = ({ data }) => {
    return (
        <>
            {data.map((property, index) => (
                <Grid
                    key={index}
                    container
                    justifyContent="center"
                    sx={{
                        my: "30px",
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: "5px",
                        border: "1px #E4E4E4 solid",
                        background: "#F5F6FB",
                    }}
                >
                    <Grid item xs={4}>
                        <Box sx={{
                            m: "20px 20px 20px 20px", borderRadius: "5px ", height: '85%', width: '90%', position: 'relative'
                        }}>
                            {" "}
                            <Image
                                src={property.imageUrl}
                                layout="fill"
                                objectFit='cover'
                                sx={{
                                    borderRadius: "5px ",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        style={styles.section}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            pr: "76px", pl: "20px",
                        }}
                    >
                        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                            <Typography
                                // variant="secondary"
                                sx={{ fontSize: "20px", fontWeight: "500" }}
                            >PKR</Typography>
                            <Typography
                                // variant="h3"
                                sx={{ fontSize: "25px", fontWeight: "600" }}
                            >{property.price}</Typography>
                        </Box>
                        <Typography
                            // variant="secondary"
                            sx={{ fontSize: "16px", fontWeight: "400", pt: "30px" }}
                        >{property.location}</Typography>
                        <Typography
                            // variant="secondary"
                            sx={{ fontSize: "16px", fontWeight: "600", pt: "15px" }}
                        >{property.area}sqft</Typography>
                        <Typography
                            // variant="h3" 
                            sx={{ fontSize: "18px", fontWeight: "600", pt: "15px" }}
                        >{property.direction}</Typography>
                        <Typography
                            // variant="secondary"
                            sx={{ fontSize: "16px", fontWeight: "400", }}
                        >{property.description}</Typography>

                        <div className="posted-1-day-ago">
                            <Typography
                                // variant="body2"
                                sx={{ fontSize: "16px", fontWeight: "400", pt: "15px" }}
                            >
                                Posted {property.postedDate}
                            </Typography>
                        </div>
                        <Box
                            container
                            spacing={2}
                            style={styles.section}
                            gap={"20px"}
                            sx={{ display: "flex" }}
                        >
                            <Box className="view-more">
                                <Link href={property.viewMoreLink}>
                                    <Button variant="primary">
                                        <Typography variant="secondary">View More</Typography>
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="agent-profile">
                                <Link href={property.agentProfileLink}>
                                    <Button variant="primary">
                                        <Typography variant="secondary">Agent Profile</Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    );
};

export default PropertyListingCard;
