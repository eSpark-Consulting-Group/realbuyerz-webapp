import React, { useState } from 'react';
import { Menu, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PriceMenu from './PriceMenu';
import SizeMenu from './SizeMenu';
import AllMenu from './AllMenu';
import TooltipText from '../global/TooltipText';

const ProjectMenu = ({
  field,
  filterObject,
  setfilterObject,
  activeMenuOption,
  setActiveMenuOption,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const { key } = field || {};
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const renderMenu = (key) => {
    if (key === 'all') {
      return (
        <AllMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filterObject={filterObject}
          setfilterObject={setfilterObject}
          activeMenuOption={activeMenuOption}
          setActiveMenuOption={setActiveMenuOption}
          setAnchorEl={setAnchorEl}
        />
      );
    } else if (key === 'price') {
      return (
        <PriceMenu
          filterObject={filterObject}
          setfilterObject={setfilterObject}
          handleClose={handleClose}
          setAnchorEl={setAnchorEl}
        />
      );
    } else if (key === 'size') {
      return (
        <SizeMenu
          filterObject={filterObject}
          setfilterObject={setfilterObject}
          handleClose={handleClose}
          setAnchorEl={setAnchorEl}
        />
      );
    } else {
      return null;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (filterObject?.all?.label === 'House') {
      setActiveTab(0);
    } else if (filterObject?.all?.label === 'Plots') {
      setActiveTab(1);
    } else if (filterObject?.all?.label === 'Commercial') {
      setActiveTab(2);
    }
    setActiveMenuOption(filterObject?.all?.category);
  };

  React.useEffect(() => {
    const handleScrollOrResize = () => {
      handleClose();
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [filterObject]);

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          cursor: 'pointer',
          '&:hover': {
            border: '1px solid #000',
          },
        }}
      >
        <TooltipText
          text={key === 'all' ? filterObject?.all?.category : key}
          maxLength={10}
          variant="secondary"
          typographyStyle={{
            fontSize: '15px',
            fontWeight: 400,
            textTransform: 'capitalize',
            textWrap: 'nowrap',
          }}
        />
        {open ? (
          <KeyboardArrowUpIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          sx: { p: 0 },
        }}
        sx={{ mt: 1, width: '100%' }}
      >
        {renderMenu(key)}
      </Menu>
    </>
  );
};

export default ProjectMenu;
