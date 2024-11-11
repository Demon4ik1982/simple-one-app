import { FC } from "react";
import "./TaskInput.module.scss";
import Button from "../../ui/Button/Button";
import { ReactComponent as Add } from "../../asset/image/add.svg";
import { ReactComponent as Clendar } from "../../asset/image/calendar.svg";
import { ReactComponent as SearchBtn } from "../../asset/image/search_btn.svg";
import { ReactComponent as Close } from "../../asset/image/close.svg";

export interface TaskInputProps {
  styleInput?: "input" | "persons";
  label?: string;
  inputValue?: string;
  placeholder?: string;
  iconType?: "search" | "calendar";
  importance?: boolean;
  children?: React.ReactNode
  gridSpan?: boolean;
}

const TaskInput: FC<TaskInputProps> = ({
  styleInput,
  placeholder,
  iconType,
  label,
  inputValue,
  importance,
  children,
  gridSpan,
}) => {

  return (
    <div className={gridSpan ? "task-input grid-span" : "task-input"} >
      <div className="task-input__wrapper">
        {importance ? (
          <span className="task-input__importance">* </span>
        ) : (
          <></>
        )}
        <span className="task-input__discr">{label}</span>
      </div>
      {styleInput === "input" ? (
        iconType ? (
          <div className="task-input__field-wrapper">
            <input className="task-input__field" type="text" defaultValue={inputValue} placeholder={placeholder} />
            {iconType === 'search' ? <Button variant="menu" icon={<SearchBtn />} /> : <Button variant="menu" icon={<Clendar />} /> }
          </div>
        ) : (
          <input className="task-input__field" type="text" defaultValue={inputValue} />
        )
      ) : (
        <div className="task-input__field-wrapper" >
          <div className="task-input__field " style={{ padding: '2px 4px', paddingRight: '30px' }}> {children ? <div className="task-input__info-wrapper">{children}<span className="task-input__icon"><Close /></span></div> : <></>}
            </div>
          <Button variant="menu" icon={<Add />} />
          <Button variant="menu" icon={<SearchBtn />} />
        </div>
      )}
    </div>
  );
};

export default TaskInput;
