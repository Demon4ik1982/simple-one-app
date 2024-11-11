import React, { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button/Button";
import { ReactComponent as More } from "../../asset/image/more.svg";
import "./SubMenu.module.scss";
import KebabMenu from "../KebabMenu/KebabMenu";
import Modal from "../Modal/Modal";

const SubMenu = () => {
  const [kebabActive, setKebabActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);
  const menuRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setKebabActive(!kebabActive);
  const hendleModal = () => setModalActive(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setKebabActive(false);
      }
    };

    if (kebabActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [kebabActive]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalActive(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="submenu">
      <div className="submenu__info">
        <h2 className="submenu__info-title">Подзадача</h2>
        <div className="submenu__info-wrapper" ref={menuRef}>
          <Button variant="outline" label="Создать" onClick={hendleModal} />
          {isMobile ? (
            <></>
          ) : (
            <Button variant="menu" icon={<More />} onClick={toggleMenu} />
          )}
          <KebabMenu active={kebabActive} setKebab={setKebabActive} />
        </div>
      </div>
      {isMobile ? (
        <div className="submenu__edit">
          <Button variant="primary" label="Сохранить" />
          <Button variant="outline" label="Сохранить и выйти" />
        </div>
      ) : (
        <></>
      )}

      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default SubMenu;
