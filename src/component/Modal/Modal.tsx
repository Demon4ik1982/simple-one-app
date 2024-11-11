import React, { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import Person from "../Person/Person";
import Button from "../../ui/Button/Button";
import { ReactComponent as ModalClose } from "../../asset/image/modal_close.svg";
import "./Modal.module.scss";

type IModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ active, setActive }: IModalProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content-info">
          <h2 className="submenu__info-title">Подзадача</h2>
          {isMobile ? (
            <div className="submenu__edit">
              <Button variant="primary" label="Сохранить" />
              <Button
                variant="outline"
                label="Отменить"
                onClick={() => setActive(false)}
              />
            </div>
          ) : (
            <div className="submenu__edit">
              <Button
                variant="menu"
                icon={<ModalClose />}
                onClick={() => setActive(false)}
              />
            </div>
          )}
        </div>
        <div className="modal__content-grid">
          <h1 className="sub-task-info__title">Новая запись</h1>
          <TaskInput
            styleInput="input"
            importance={true}
            label="Тема"
            inputValue="На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
          />
          <TaskInput
            styleInput="input"
            importance={false}
            label="Статус"
            inputValue="Новая"
          />
          <TaskInput styleInput="input" importance={false} label="Описание" />
          <TaskInput
            styleInput="input"
            importance={false}
            label="Продукт"
            inputValue="Paltform"
            iconType="search"
          />
          <TaskInput
            styleInput="input"
            importance={true}
            label="Рабочие заметки"
            inputValue="Проверить ACL id=172830402014193655"
          />
          <TaskInput
            styleInput="input"
            importance={false}
            label="Приоритет"
            inputValue="Средний"
          />
          <TaskInput
            styleInput="persons"
            importance={false}
            label="Ответственный"
          >
            <Person label="Константин Константинопольский" close={false} />
          </TaskInput>
          <TaskInput styleInput="persons" importance={false} label="Группа">
            <Person label="Support Group" close={false} />
          </TaskInput>
          <TaskInput
            styleInput="input"
            importance={false}
            label="Комментарии"
            inputValue=""
          />
          <TaskInput styleInput="persons" importance={false} label="Группа">
            <Person label="Андрей Пивоваров" close={true} />
            <Person label="Максим Галактионов" close={true} />
            <Person label="Алла Лин" close={true} />
            <Person
              label="Константин Константинопольский Константинович"
              close={true}
            />
            <Person label="Игорь Иванченко" close={true} />
            <Person label="Юлия Эйчаровна" close={true} />
            <Person label="Артём Подпрыгайко-Саппортов" close={true} />
            <Person label="Илья Вазнец" close={true} />
            <Person label="Михаил Вортенов" close={true} />
            <Person label="Наталья Нашевна" close={true} />
            <Person label="Евгения Итамовна" close={true} />
            <Person label="Алиса Киральчук" close={true} />
          </TaskInput>
          <TaskInput
            styleInput="input"
            importance={false}
            label="Когда открыто"
            inputValue=""
            iconType="calendar"
          />
          <TaskInput
            styleInput="input"
            importance={false}
            label="Когда создано"
            inputValue="22.10.2024"
            iconType="calendar"
          />
          <TaskInput
            styleInput="persons"
            importance={false}
            label="Кем открыто"
          >
            <Person label="Андрей Пивоваров" close={false} />
          </TaskInput>
          <TaskInput
            styleInput="persons"
            importance={false}
            label="Кем создано"
          >
            <Person label="Андрей Пивоваров" close={false} />
          </TaskInput>
          {!isMobile ? <>
            <Button variant="primary" label="Сохранить" />
            <Button variant="outline" label="Отменить" onClick={() => setActive(false)} />
          </> : ''}
        </div>
      </div>
    </div>
  );
};

export default Modal;
