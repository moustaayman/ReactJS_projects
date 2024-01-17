import { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 300)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              if (!readMore) {
                setReadMore(true);
                return;
              }
              setReadMore(false);
            }}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="btn delete-btn btn-block"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;
