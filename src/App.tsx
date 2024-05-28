import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Panel from "./components/Panel/Panel";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 360);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 360);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {isSmallScreen ? <Panel /> : <></>}
      <Main smallScreen={isSmallScreen} />
      <Footer />

      {isSmallScreen ? (
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
