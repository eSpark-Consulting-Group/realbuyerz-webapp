import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import { display } from '@mui/system';

const SelectedItemsComponent = ({ selectedItems }) => {
  return (
    <div>
      {/* <h2>Selected Amenities:</h2> */}
      <ul
        style={{
          display: 'flex',
        }}
      >
        {selectedItems?.map((item, index) => (
          <li
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '10px',
              gap: '5px',
            }}
            key={index}
          >
            <Image src={item.image} width={30} height={30} />
            <Typography>{item.title}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedItemsComponent;
