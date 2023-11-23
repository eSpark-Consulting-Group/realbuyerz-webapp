'use client';
import React from "react";
import { Box, Typography } from "@mui/material";

class ErrorPage extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
        return { statusCode };
    }

    render() {
        return (
            <Box>
                <Typography>
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </Typography>
            </Box>
        );
    }
}
export default ErrorPage;