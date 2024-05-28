import "../Main/left.scss";
import "./mobileMenuSidebar.scss";
import Left from "../Main/Left";
import { useEffect } from "react";
import leftArrow from "../../assets/svg/leftArrow.png";

interface Props {
  isOpenLeft: boolean;
  setIsOpenLeft: () => void;
}

const MobileMenuSidebar = ({ isOpenLeft, setIsOpenLeft }: Props) => {
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
    <div className={`sidebarMenu ${isOpenLeft ? "open" : ""}`}>
      <div className="sidebarMenu--back">
        <div>
          <img src={leftArrow} alt="close" />
        </div>
        <span onClick={setIsOpenLeft}>back</span>
      </div>

      <Left />
    </div>
  );
};

export default MobileMenuSidebar;
