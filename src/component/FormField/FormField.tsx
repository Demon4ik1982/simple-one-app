import { FC } from "react";
import "./FormField.module.scss";

export interface IFormFieldProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

const FormField: FC<IFormFieldProps> = ({ placeholder, icon }) => {
  return (
    <label className="input-wrapper">
      <input className="input-field" type="text" placeholder={placeholder} />
      {icon && (
        <div className="input-icon">
          {icon}
        </div>
      )}
    </label>
  );
};

export default FormField;
