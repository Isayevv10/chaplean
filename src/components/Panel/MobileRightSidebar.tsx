import "../Main/right.scss";
import "./mobileRightSidebar.scss";
import Right from "../Main/Right";

interface Props {
  isOpenRight: boolean;
  setIsOpenRight: () => void;
}

const MobileRightSidebar = ({ isOpenRight, setIsOpenRight }: Props) => {
  return (
    <div className={`sidebar ${isOpenRight ? "open" : ""}`}>
      <div onClick={setIsOpenRight} className="previous">
        <div>
          <img src="/src/assets/svg/left.png" alt="left" />
        </div>
        <p>back</p>
      </div>

      <Right />
    </div>
  );
};

export default MobileRightSidebar;
