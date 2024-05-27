import "./mobileLeftSidebar.scss";
import "../Main/left.scss";
import Left from "../Main/Left";

interface Props {
  isOpenLeft: boolean;
  setIsOpenLeft: () => void;
}

const MobileLeftSidebar = ({ isOpenLeft, setIsOpenLeft }: Props) => {
  return (
    <div className={`sidebar ${isOpenLeft ? "open" : ""}`}>
      <div onClick={setIsOpenLeft} className="previous">
        <div>
          <img src="/src/assets/svg/left.png" alt="close" />
        </div>
        <span>back</span>
      </div>

      <Left />
    </div>
  );
};

export default MobileLeftSidebar;
