import "./mobileLeftSidebar.scss";
import "../Main/left.scss";
import Left from "../Main/Left";
import { useEffect } from "react";

interface Props {
  isOpenLeft: boolean;
  setIsOpenLeft: () => void;
}

const MobileLeftSidebar = ({ isOpenLeft, setIsOpenLeft }: Props) => {
  useEffect(() => {
    if (isOpenLeft) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenLeft]);

  return (
    <div className={`sidebarLeft ${isOpenLeft ? "open" : ""}`}>
      <div className="sidebarLeft--back">
        <div>
          <img src="/src/assets/svg/left.png" alt="close" />
        </div>
        <span onClick={setIsOpenLeft}>back</span>
      </div>

      <Left />
    </div>
  );
};

export default MobileLeftSidebar;
