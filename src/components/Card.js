import React, { Fragment } from "react";

const Card = (props) => {
  const { filtered } = props.filtered;

  const FilterSource = Object.keys(filtered).map((source, i) => {
    let filter;
    if (filtered[source].length) {
      filter = (
        <div key={i} className="card">
          <h2>{source}</h2>
        </div>
      );
    }
    return filter;
  });

  return <Fragment>{FilterSource}</Fragment>;
};

export default Card;
