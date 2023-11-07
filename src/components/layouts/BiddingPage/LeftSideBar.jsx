import React, { useState } from "react";
import ExpendedSiderBar from "./LeftSideBar/ExpendedSiderBar";
import CollapsedSideBar from "./LeftSideBar/CollapsedSideBar";

const LeftSideBar = ({LiveBiddingData}) => {
  let fullWidth = "100%";
  let iconWidth = "60px";
  const [isCollapsed, setIsCollapsed] = useState(fullWidth);

  const collapsed = () => {
    setIsCollapsed((prevWidth) =>
      prevWidth === fullWidth ? iconWidth : fullWidth
    );
  };
  return (
    <>
      {isCollapsed === fullWidth ? (
        <ExpendedSiderBar
          isCollapsed={isCollapsed}
          data={LiveBiddingData}
          isExpended={collapsed}
        />
      ) : (
        <CollapsedSideBar
          isCollapsed={isCollapsed}
          data={LiveBiddingData}
          isCollaps={collapsed}
        />
      )}
    </>
  );
};

export default LeftSideBar;
