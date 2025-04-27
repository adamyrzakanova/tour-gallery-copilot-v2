import React, { useState } from 'react';

const TourCard = ({ tour, onRemove }) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <h3 className="tour-price">${price}</h3>
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;