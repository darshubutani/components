import * as React from "react";
import "./styles.css";

interface Props {
  image?: string;
  defination?: string;
  title?: string;
  description: string;
  subTitle?: string;
  actions?: any;
}

const Card: React.FC<Props> = ({
  image,
  title,
  description,
  defination,
  subTitle,
  actions,
}) => {

  return (
    <>
      <div className="card">
        {image && (
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className="cardContent">
          {defination && <div className="defination">{defination}</div>}
          {title && (
            <div className="title">
              <b>{title}</b>
            </div>
          )}
          {subTitle && <div className="subTitle">{subTitle}</div>}
          {description && (
            <div className="description">
              {description}
            </div>
          )}
        </div>
        <div className = {actions?.type?.name === "Expand" ? "" : "cardActions" }>
        {React.Children.map(actions, (action, index) => (
            <button key={index}>
              {action}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Card;
