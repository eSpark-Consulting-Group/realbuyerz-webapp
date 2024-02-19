import React from 'react';
import { Button, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

function DynamicTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedChip, setSelectedChip] = React.useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChip(null); // Reset selected chip when changing tabs
  };

  const handleChipClick = (chip) => {
    setSelectedChip(selectedChip === chip ? null : chip); // Toggle chip selection
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
          <Box width={'450px'} py={'20px'}>
            {tab.content.map((chip, chipIndex) => (
              <Button
                key={chipIndex}
                variant={'outlined'}
                px={'10px'}
                my={'20px'}
                style={{
                  margin: '4px',
                  borderRadius: '20px',
                  height: '55px',
                  borderColor:
                    selectedChip === chip ? '#1877f2' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#f00',
                  },
                }}
                onClick={() => handleChipClick(chip)}
              >
                <Image
                  src={selectedChip === chip ? chip.image : chip.activeImage}
                  width={30}
                  height={30}
                />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '24px',
                  }}
                >
                  {' '}
                  {chip.title}
                </Typography>
              </Button>
            ))}
          </Box>
        </TabPanel>
      ))}
      <div>
        Selected Tab: {tabs[selectedTab].value}
        <br />
        Selected Chip: {selectedChip ? selectedChip.value : 'None'}
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
