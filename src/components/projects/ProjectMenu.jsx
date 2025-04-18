import React, { useState, useEffect } from 'react';
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
  const key = field?.key;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    const label = filterObject?.all?.label;
    const category = filterObject?.all?.category;

    const tabMap = {
      House: 0,
      Plots: 1,
      Commercial: 2,
    };

    if (label in tabMap) {
      setActiveTab(tabMap[label]);
    }

    setActiveMenuOption(category);
  };

  const renderMenu = () => {
    const commonProps = {
      filterObject,
      setfilterObject,
      setAnchorEl,
    };

    switch (key) {
      case 'all':
        return (
          <AllMenu
            {...commonProps}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeMenuOption={activeMenuOption}
            setActiveMenuOption={setActiveMenuOption}
          />
        );
      case 'price':
        return <PriceMenu {...commonProps} handleClose={handleClose} />;
      case 'size':
        return <SizeMenu {...commonProps} handleClose={handleClose} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScrollOrResize = () => handleClose();

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
            sx={{ color: '#666666', transition: 'transform 0.3s' }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{ color: '#666666', transition: 'transform 0.3s' }}
          />
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ sx: { p: 0 } }}
        sx={{ mt: 1, width: '100%' }}
      >
        {renderMenu()}
      </Menu>
    </>
  );
};

export default ProjectMenu;
