import "./right.scss";
import search from "/src/assets/svg/search.png";

const Right = () => {
  return (
    <>
      <div className="main__container--3">
        <div className="main__container--item-1">
          <div className="search">
            <img src={search} alt="" />
            <input type="search" name="" id="" placeholder="Search" />
          </div>

          <p>On this page</p>
          <p>Accesbility</p>
          <p>What is Chaplean</p>
          <p>How to use</p>
          <p>Accesbility</p>
        </div>

        <div className="main__container--item-2">
          <p>Edit this page</p>
          <p>Managed Chaplean</p>
        </div>
      </div>
    </>
  );
};

export default Right;
