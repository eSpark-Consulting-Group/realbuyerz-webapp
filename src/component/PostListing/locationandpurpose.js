'use client'
import React, { useState } from 'react';
import { Typography, Box, Button, TextField, Select, MenuItem } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
import PostTitle from './posttitle';
const LocationPurpose = () => {
    const [value, setValue] = useState('');
    return (
        <Box sx={{
            background: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "30px",
            border: "1px #E4E4E4 solid",
            borderRadius: "10px",

        }}>
            <PostTitle text={PropertyInformation.postTitles.text2} />

            <Box

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '500px',
                    height: '300px',
                    backgroundImage: 'url("/assets/images/realbuyer.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    mx: "auto",
                }}>
                <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "8px"
                }}>
                    <Image src={PropertyInformation.purpose.images}
                        width={47}
                        height={45}
                    />
                    <Typography sx={{
                        color: "#333333",
                    }}>{PropertyInformation.purpose.text} </Typography><span style={{ color: "#FF0000" }}>*</span>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {PropertyInformation.sell.map((item, index) => (
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            borderRadius: "20px",
                            border: "1px #E7E7E7 solid",
                            width: "150px",
                            height: "60px"
                        }} key={index}>
                            <Image
                                src={item.images}
                                width={47}
                                height={45} />
                            <Button>{item.text}</Button>
                        </Box>
                    ))}
                </Box>
                <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "8px"
                }}>
                    <Image src={PropertyInformation.propertyType.images}
                        width={47}
                        height={45}
                    />
                    <Typography sx={{
                        color: "#333333",
                    }}>{PropertyInformation.propertyType.text} </Typography><span style={{ color: "#FF0000" }}>*</span>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "8px"
                }}>
                    <Image src={PropertyInformation.city.images}
                        width={47}
                        height={45}
                    />
                    <Typography sx={{
                        color: "#333333",
                    }}>{PropertyInformation.city.text} </Typography><span style={{ color: "#FF0000" }}>*</span>

                </Box>
                <TextField
                    style={{ width: '400px', color: "#777777" }}
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    select
                    label="Select City"
                >
                    <MenuItem key={1} value="test0">
                        None
                    </MenuItem>
                    <MenuItem key={2} value="test1">
                        Test 1
                    </MenuItem>
                    <MenuItem key={3} value="test2">
                        Test 2
                    </MenuItem>
                </TextField>
                <Box sx={{
                    display: "flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    gap: "8px"
                }}>
                    <Image src={PropertyInformation.location.images}
                        width={47}
                        height={45}
                    />
                    <Typography sx={{
                        color: "#333333",
                    }}>{PropertyInformation.location.text} </Typography><span style={{ color: "#FF0000" }}>*</span>

                </Box>
            </Box>
        </Box>
    )
}
export default LocationPurpose;
// {
//     PropertyInformation.property.map((item, index) => (
//         <Box sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             gap: "15px"
//         }} key={index}>
//             <Image
//                 src={item.image}
//                 width={40}
//                 height={40}
//             />
//             <Typography
//                 sx={{
//                     fontSize: "22px",
//                     fontFamily: "Inter",
//                     fontWeight: 400,
//                     color: "#909394"
//                 }}
//             >
//                 {item.title}
//             </Typography>
//         </Box>