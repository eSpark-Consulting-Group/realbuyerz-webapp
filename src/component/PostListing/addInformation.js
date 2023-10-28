import React from 'react';
import { Typography, Box, TextField } from '@mui/material';
import Image from 'next/image';
import { PropertyInformation } from './postlistingConstants';
import PostTitle from './posttitle';
import ImageTitle from './imagewithtitle';
import RBTextField from './TextField';
const AdInformation = () => {
    return (
        <Box
            sx={{
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '30px',
                border: '1px #E4E4E4 solid',
                borderRadius: '10px',
            }}
        >
            <PostTitle text={PropertyInformation.postTitles.text1} />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '500px',
                    height: '300px',
                    backgroundImage: 'url("/assets/images/realbuyer.svg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    mx: 'auto',
                }}
            >
                {/* <ImageTitle image={image}
                    text={text} /> */}
                {PropertyInformation.addInfo.map((item, index) => (
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignSelf: 'flex-start',
                                alignItems: 'center',
                                fontSize: '20px',
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                gap: '8px',
                            }}
                            key={index}
                        >
                            <Image src={item.image} width={45} height={45} />
                            <Typography
                                sx={{
                                    color: '#333333',
                                }}
                            >
                                {item.text}
                            </Typography>
                            <span style={{ color: '#FF0000' }}>*</span>
                        </Box>
                        <RBTextField placeholder={item.placeholder}
                        />

                        <TextField
                            placeholder={item.placeholder}
                            sx={{
                                width: '700px',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
export default AdInformation;

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
