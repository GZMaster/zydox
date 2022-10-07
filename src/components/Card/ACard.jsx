import React from "react";
import PropTypes from "prop-types";
import "./ACard.scss";

const ACard = ({ items, AcardClassWrapper, AcardClass }) => {
  return (
    <div className={AcardClassWrapper ? AcardClassWrapper : "ACard_Wrapper"}>
      {items.map((AcardData) => {
        const { image, title, text, id } = AcardData;
        return (
          <article className={AcardClass ? AcardClass : "ACard"} key={id}>
            <div className="ACard_Image">
              {image ? <img src={image} alt={title} /> : null}
            </div>
            <h6>{title}</h6>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
};

ACard.propTypes = {
  items: PropTypes.any,
  AcardClassWrapper: PropTypes.string,
  AcardClass: PropTypes.string,
};
export default ACard;
