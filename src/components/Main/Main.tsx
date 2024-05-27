import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./main.scss";

interface Props {
  smallScreen: boolean;
}

const Main = ({ smallScreen }: Props) => {
  return (
    <div className="main__container">
      {smallScreen ? <></> : <Left />}
      <Middle />
      {smallScreen ? <></> : <Right />}
    </div>
  );
};

export default Main;
