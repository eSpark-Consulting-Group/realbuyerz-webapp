import React from "react";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

const Price = ({ price }) => {
    return (
        <>
            <Typography
                sx={{
                    fontSize: 27,
                    fontWeight: 700,
                    fontFamily: 'Inter',
                    color: 'zinc',
                    wordBreak: 'break-word',
                }}
            >
                PKR {price}
            </Typography>
            <Typography
                sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: 'Inter',
                    color: 'zinc',
                }}
            >
                Reach out to us:
            </Typography>
            <Button
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#FB631C',
                    width: '100%',
                    height: '60px',
                    fontSize: '25px',
                    fontWeight: 500,
                    gap: '10px',
                    color: 'white',
                    borderRadius: 10,
                    fontFamily: 'Inter',
                }}
            >
                <Image src="assets/images/msgicon.svg" width={28} height={20} />
                <span>Message</span>
            </Button>
        </>
    )
}
export default Price;