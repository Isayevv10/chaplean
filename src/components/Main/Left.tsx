import "./left.scss";
import back from "/src/assets/svg/back.png";
import right from "/src/assets/svg/right.png";
import app from "/src/assets/svg/app.png";

const Left = () => {
  return (
    <>
      <div className="main__container--1">
        <div className="main__container--1-content">
          <div className="main__container--1-app">
            <div className="main__container--1-img">
              <img src={app} alt="app" />
            </div>
            <div className="main__container--1-text">
              <p>Chaplean App</p>
              <p>Social media platform</p>
            </div>
          </div>

          <div className="main__container--1-back">
            <img src={back} alt="back" />
          </div>
        </div>

        <div className="main__container--1-started">
          <p>Getting Started</p>
          <p>Installation</p>
          <p>Project Structure</p>
        </div>

        <div className="main__container--1-building">
          <p>Building Your Application</p>
          <div className="item-1">
            <p>Routing</p>
            <img src={right} alt="" />
          </div>
          <div className="item-2">
            <p>Data Fetching</p>
            <img src={right} alt="" />
          </div>
          <div className="item-3">
            <p>Rendering</p>
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
