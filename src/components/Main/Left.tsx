import "./left.scss";

const Left = () => {
  return (
    <>
      <div className="main__container--1">
        <div className="main__container--1-content">
          <div className="main__container--1-app">
            <div className="main__container--1-img">
              <img src="/src/assets/svg/app.png" alt="app" />
            </div>
            <div className="main__container--1-text">
              <p>Chaplean App</p>
              <p>Social media platform</p>
            </div>
          </div>

          <div className="main__container--1-back">
            <img src="/src/assets/svg/back.png" alt="back" />
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
            <img src="/src/assets/svg/right.png" alt="" />
          </div>
          <div className="item-2">
            <p>Data Fetching</p>
            <img src="/src/assets/svg/right.png" alt="" />
          </div>
          <div className="item-3">
            <p>Rendering</p>
            <img src="/src/assets/svg/right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
