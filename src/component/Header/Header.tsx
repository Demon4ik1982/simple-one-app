import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../asset/image/logo.svg";
import { ReactComponent as Settings } from "../../asset/image/settings.svg";
import { ReactComponent as Search } from "../../asset/image/search.svg";
import { ReactComponent as Sidebar } from "../../asset/image/sidebar.svg";
import FormField from "../../component/FormField/FormField";
import avatar from "../../asset/image/Avatar.png";
import Button from "../../ui/Button/Button";
import "./Header.module.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__container container">
      {isMobile ? <Logo /> : <Button variant="onlyIcon" icon={<Sidebar />} />}
      <div className="header__wrapper">
        {isMobile ? <FormField placeholder="Поиск" icon={<Search />} /> : <></>}
        <img src={avatar} alt="Максим Галактионов" />
        {isMobile ? <span>Максим Галактионов</span> : <></>}
        <Button variant="menu" icon={<Settings />} />
      </div>

      </div>
    </header>
  );
};

export default Header;
