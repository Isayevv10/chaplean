import "../Main/right.scss";
import "./mobileSearchSidebar.scss";
import Right from "../Main/Right";
import { useEffect } from "react";
import leftArrow from "../../assets/svg/leftArrow.png";

interface Props {
  isOpenRight: boolean;
  setIsOpenRight: () => void;
}

const MobileSearchSidebar = ({ isOpenRight, setIsOpenRight }: Props) => {
  useEffect(() => {
    if (isOpenRight) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenRight]);

  return (
    <div className={`sidebarSearch ${isOpenRight ? "open" : ""}`}>
      <div className="sidebarSearch--back">
        <div>
          <img src={leftArrow} alt="close" />
        </div>
        <p onClick={setIsOpenRight}>back</p>
      </div>

      <Right />
    </div>
  );
};

export default MobileSearchSidebar;
