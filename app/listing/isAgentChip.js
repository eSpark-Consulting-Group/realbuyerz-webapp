'use client'
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { Icon, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { chipData } from './constant';

function DeletableSquareChip({ label }) {
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setIsDeleted(true);
    };

    if (isDeleted) {
        return null;
    }

    return (
        <Chip
            label={label}
            variant="outlined"
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<ClearIcon color="icon" />}
            sx={{
                fontSize: '18px',
                borderRadius: '4px',
                marginRight: '8px',
                marginBottom: '8px',
                color: "#333",
                border: "1px solid #e4e4e4"
            }}
        />
    );
}

function Chips() {
    return (
        <Box sx={{ display: "flex", }}>
            {chipData.map((label, index) => (
                <DeletableSquareChip key={index} label={label} />
            ))}
            <Link href="#" sx={{ color: "#126FAA", fontWeight: "500" }}>
                <Typography >Clear</Typography>
            </Link>
        </Box>
    );
}


export default Chips;