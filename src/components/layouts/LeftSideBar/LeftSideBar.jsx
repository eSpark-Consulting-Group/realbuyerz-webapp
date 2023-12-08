import React, { useState } from 'react';
import ExpendedSiderBar from './ExpendedSiderBar';
import CollapsedSideBar from './CollapsedSideBar';
import { AGENT_MENU_ITEM, USER_MENU_ITEM } from '@/app/constants/LiveBidding';

const LeftSideBar = () => {
  const fullWidth = '100%';
  const iconWidth = '60px';
  const [isCollapsed, setIsCollapsed] = useState(fullWidth);
  const [userType, setUserType] = useState('user');
  const menuItem = userType === 'agent' ? AGENT_MENU_ITEM : USER_MENU_ITEM;
  const collapsed = () => {
    setIsCollapsed((prevWidth) =>
      prevWidth === fullWidth ? iconWidth : fullWidth
    );
  };
  console.log(setUserType); // this set is not using so thts y we use in a console  to avoid build issues
  return (
    <>
      {isCollapsed === fullWidth ? (
        <ExpendedSiderBar
          isCollapsed={isCollapsed}
          menuItem={menuItem}
          isExpended={collapsed}
        />
      ) : (
        <CollapsedSideBar
          isCollapsed={isCollapsed}
          menuItem={menuItem}
          isCollaps={collapsed}
        />
      )}
    </>
  );
};

export default LeftSideBar;
