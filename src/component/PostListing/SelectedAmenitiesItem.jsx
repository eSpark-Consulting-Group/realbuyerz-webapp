import React from 'react';

const SelectedItemsComponent = ({ selectedItems }) => {
  return (
    <div>
      <h2>Selected Amenities:</h2>
      <ul>
        {selectedItems?.map((item, index) => (
          <li key={index}>
            {item.image}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedItemsComponent;
