import React from "react";
import "./Button.module.scss";

interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "outline" | "menu" | "onlyIcon";
  disabled?: boolean;
  icon?: React.ReactNode;
  addClass?: string;
  hidden?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  addClass,
  variant = "primary",
  disabled = false,
  hidden,
  icon
}) => {
  return (
    <button
      className={addClass ? `button ${variant} ${addClass}` : `button ${variant}`}
      onClick={onClick}
      disabled={disabled}
      style={{display: hidden ? "none" : "inline-flex"}}
    >
      {variant === 'menu' || variant === "onlyIcon" ? <span className="icon">{icon}</span> :<>{label}</>}

    </button>
  );
};

export default Button;
