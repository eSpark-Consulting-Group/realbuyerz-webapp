import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import PriceMenu from './PriceMenu';
import SizeMenu from './SizeMenu';
import AllMenu from './AllMenu';
import TooltipText from '../global/TooltipText';

const tabMap = {
  House: 0,
  Plots: 1,
  Commercial: 2,
};

const ProjectMenu = ({
  field,
  filterObject,
  setfilterObject,
  activeMenuOption,
  setActiveMenuOption,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const open = Boolean(anchorEl);
  const key = field?.key;

  const handleClick = useCallback((event) => {
    setAnchorEl(event?.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);

    const label = filterObject?.all?.label;
    const category = filterObject?.all?.category;

    if (label in tabMap) {
      setActiveTab(tabMap[label]);
    }

    setActiveMenuOption(category);
  }, [filterObject, setActiveMenuOption]);

  const commonMenuProps = {
    filterObject,
    setfilterObject,
    setAnchorEl,
  };

  const renderMenu = () => {
    switch (key) {
      case 'all':
        return (
          <AllMenu
            {...commonMenuProps}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeMenuOption={activeMenuOption}
            setActiveMenuOption={setActiveMenuOption}
          />
        );
      case 'price':
        return <PriceMenu {...commonMenuProps} handleClose={handleClose} />;
      case 'size':
        return <SizeMenu {...commonMenuProps} handleClose={handleClose} />;
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
  }, [handleClose]);

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
            borderColor: '#000',
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
            sx={{ color: '#666', transition: 'transform 0.3s' }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{ color: '#666', transition: 'transform 0.3s' }}
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
