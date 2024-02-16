import React from 'react';
import { Chip, Tab, Tabs } from '@mui/material';

function DynamicTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedChip, setSelectedChip] = React.useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChip(null); // Reset selected chip when changing tabs
  };

  const handleChipClick = (chip) => {
    setSelectedChip(chip);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, tabIndex) => (
        <TabPanel key={tabIndex} value={selectedTab} index={tabIndex}>
          {tab.content.map((chip, chipIndex) => (
            <Chip
              key={chipIndex}
              icon={chip.icon}
              label={chip.label}
              variant={selectedChip === chip ? "filled" : "outlined"}
              style={{ margin: '4px', cursor: 'pointer' }}
              onClick={() => handleChipClick(chip)}
            />
          ))}
        </TabPanel>
      ))}
      <div>
        Selected Tab: {tabs[selectedTab].label}
        <br />
        Selected Chip: {selectedChip ? selectedChip.label : "None"}
      </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default DynamicTabs;
