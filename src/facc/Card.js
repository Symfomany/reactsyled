import React from "react";

/**
 * Facc: Function as child components
 * @param {*} param0
 */
const Card = ({
  children,
  title,
  image = "http://www.capsurlemonde.org/voyage/affiche/homepage-monde-affiche.jpg",
  ...props
}) => {
  return (
    <div className="card" {...props}>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-media">
        <img src={image} />
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
