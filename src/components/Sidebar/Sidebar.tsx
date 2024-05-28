import "./sidebar.scss";
import logo from "/src/assets/img/logo.png";
import close from "/src/assets/svg/close.png";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="close-icon" onClick={toggleSidebar}>
            <img src={close} alt="close" />
          </div>
        </div>

        <ul>
          <li>
            <a href="#">What is Chaplean</a>
          </li>
          <li>
            <a href="#">Our difference</a>
          </li>
          <li>
            <a href="#" className="docs">
              Docs
            </a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
