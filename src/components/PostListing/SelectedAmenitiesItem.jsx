import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

const SelectedAmenitiesItems = ({ selectedItems }) => {
  return (
    <div>
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
            <Image src={item.image} width={30} height={30} alt="amenities" />
            <Typography>{item.title}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SelectedAmenitiesItems;
