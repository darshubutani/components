import React from "react";
import "./styles.css";

export enum AlertVarientEnum {
  FILLED = "filled",
  OUTLINED = "outlined",
}

interface Props {
  message: string;
  type?: string;
  varient?: AlertVarientEnum;
  icon?: JSX.Element;
  title?: boolean;
  closeIcon?: JSX.Element;
}

const Alert: React.FC<Props> = ({
  message,
  type,
  varient,
  icon,
  title,
  closeIcon,
}) => {
  console.log("varient is",varient)
  return (
    <>
      <div
        className={`alert 
        ${(varient === undefined )? "default" : 
            (varient === AlertVarientEnum.FILLED  ? "outlined" : "filled")} 
        ${type}`}
      >
        <div className={varient === AlertVarientEnum.OUTLINED ? "icon-white" : ""}>
          {icon}
        </div>
        <div>
          {title && (
            <div className="title">
              {type && type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          )}
          <div className="message">{message}</div>
        </div>
        {closeIcon && <div className="closeIcon svg">{closeIcon}</div>}
      </div>
    </>
  );
};

export default Alert;
