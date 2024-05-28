import { useState } from "react";
import "./panel.scss";
import MobileMenuSidebar from "./MobileMenuSidebar";
import MobileSearchSidebar from "./MobileSearchSidebar";

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
        <MobileSearchSidebar
          isOpenRight={isOpenRight}
          setIsOpenRight={toggleSidebarRight}
        />
      ) : (
        <></>
      )}

      {isOpenLeft ? (
        <MobileMenuSidebar
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
