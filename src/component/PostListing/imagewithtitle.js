import React from "react";
import { PropertyInformation } from "./postlistingConstants";
const ImageTitle = ({ image, text }) => {

    return (
        <>
            {
                addInfo.map((item, index) => (
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

                        {/* <TextField
                            placeholder={item.placeholder}
                            sx={{
                                width: '700px',
                            }}
                        /> */}
                    </Box>
                ))
            }
        </>
    )
}
export default ImageTitle;