import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Panel from "./components/Panel/Panel";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 360);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 360);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar smallScreen={isSmallScreen} />
      {isSmallScreen ? <Panel /> : <></>}
      <Main smallScreen={isSmallScreen} />
      <Footer />
    </>
  );
}

export default App;
