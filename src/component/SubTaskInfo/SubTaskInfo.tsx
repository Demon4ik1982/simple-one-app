import React from "react";
import "./SubTaskInfo.module.scss";
import TaskInput from "../TaskInput/TaskInput";
import Person from "../Person/Person";

const SubTaskInfo = () => {

  return (
    <div className="sub-task-info">
      <h1 className="sub-task-info__title">
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
        поля остаются редактируемыми для агента если он Caller
      </h1>
      <div className="sub-task-info__grid">
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
        <TaskInput styleInput="persons" importance={false} label="Ответственный">
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
          gridSpan={true}
        />
        <TaskInput styleInput="persons" importance={false} label="Группа" gridSpan={true}>
          <Person label="Андрей Пивоваров" close={true} />
          <Person label="Максим Галактионов" close={true} />
          <Person label="Алла Лин" close={true} />
          <Person label="Константин Константинопольский Константинович" close={true} />
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
        <TaskInput styleInput="persons" importance={false} label="Кем открыто">
          <Person label="Андрей Пивоваров" close={false} />
        </TaskInput>
        <TaskInput styleInput="persons" importance={false} label="Кем создано">
          <Person label="Андрей Пивоваров" close={false} />
        </TaskInput>
      </div>
    </div>
  );
};

export default SubTaskInfo;
