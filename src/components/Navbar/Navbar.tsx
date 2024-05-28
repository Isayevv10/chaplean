import "./navbar.scss";

interface Props {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: Props) => {
  return (
    <div className="nav">
      <div className="logo">
        <img src="\src\assets\img\logo.png" alt="logo" />
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">What is Chaplean</a>
          </li>
          <li>
            <a href="#">Our difference</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleSidebar}>
        <img src="/src/assets/svg/open.png" alt="open" />
      </div>
    </div>
  );
};

export default Navbar;
