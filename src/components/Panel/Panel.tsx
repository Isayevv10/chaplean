import { useState } from "react";
import MobileRightSidebar from "./MobileRightSidebar";
import MobileLeftSidebar from "./MobileLeftSidebar";
import "./panel.scss";

const Panel = () => {
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [isOpenLeft, setIsOpenLeft] = useState(false);

  const toggleSidebarLeft = () => {
    setIsOpenLeft(!isOpenLeft);
  };

  const toggleSidebarRight = () => {
    setIsOpenRight(!isOpenRight);
  };

  return (
    <div className="panel__container">
      <div onClick={toggleSidebarLeft}> Menu</div>
      <div onClick={toggleSidebarRight}>Search</div>

      {isOpenRight ? (
        <MobileRightSidebar
          isOpenRight={isOpenRight}
          setIsOpenRight={toggleSidebarRight}
        />
      ) : (
        <></>
      )}

      {isOpenLeft ? (
        <MobileLeftSidebar
          isOpenLeft={isOpenLeft}
          setIsOpenLeft={toggleSidebarLeft}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Panel;
