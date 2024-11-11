import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import SideMenu from "./component/SideMenu/SideMenu";
import MainMenu from "./component/MainMenu/MainMenu";
import SubTask from "./component/SubTask/Subtask";

function App() {
  const [isTablet, setIsTablet] = useState(window.innerWidth > 991);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      <main className="main">

          {isMobile ? <SideMenu /> : <></>}
          {isTablet ? <MainMenu /> : <></>}
          <SubTask />

      </main>
    </div>
  );
}

export default App;
