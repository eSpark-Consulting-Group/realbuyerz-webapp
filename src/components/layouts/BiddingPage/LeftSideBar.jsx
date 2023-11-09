import React, { useState } from "react";
import ExpendedSiderBar from "./LeftSideBar/ExpendedSiderBar";
import CollapsedSideBar from "./LeftSideBar/CollapsedSideBar";

const LeftSideBar = ({ menuItem }) => {
  let fullWidth = "100%";
  let iconWidth = "60px";
  const [isCollapsed, setIsCollapsed] = useState(fullWidth);

  const collapsed = () => {
    setIsCollapsed((prevWidth) =>
      prevWidth === fullWidth ? iconWidth : fullWidth,
       );
  };
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
            isCollaps={collapsed}/>
      )}
    </>
  );
};

export default LeftSideBar;
