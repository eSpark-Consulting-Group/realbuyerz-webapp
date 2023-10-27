'use client';
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

function DeletableSquareChip({ label, onDelete }) {
  return (
    <Chip
      label={label}
      variant='outlined'
      color='primary'
      onDelete={onDelete}
      deleteIcon={<ClearIcon color='icon' />}
      sx={{
        fontSize: '18px',
        borderRadius: '4px',
        marginRight: '8px',
        marginBottom: '8px',
        color: '#333',
        border: '1px solid #e4e4e4',
      }}
    />
  );
}

function Chips({ data }) {
  const [selectedChips, setSelectedChips] = useState([]);

  const handleDeleteChip = (chipToDelete) => () => {
    setSelectedChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleClearAllChips = () => {
    setSelectedChips([]);
  };

  const uniqueAgentPropertyTypes = [
    ...new Set(
      data.map((property) => `${property.agentName}-${property.propertytype}`)
    ),
  ];

  return (
    <Box sx={{ display: 'contents' }}>
      {uniqueAgentPropertyTypes.map((label, index) => {
        const [agentName, propertyType] = label.split('-');
        return (
          <DeletableSquareChip
            key={index}
            label={`${agentName}'s ${propertyType}`}
            onDelete={handleDeleteChip(label)}
          />
        );
      })}
      <Button
        href='#'
        sx={{ color: '#126FAA', fontWeight: '500' }}
        onClick={handleClearAllChips}>
        <Typography>Clear</Typography>
      </Button>
    </Box>
  );
}

export default Chips;
