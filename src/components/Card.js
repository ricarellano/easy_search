import React, { Fragment } from "react";
import CardInfo from "../components/CardInfo";

const Card = (props) => {
  const { filtered } = props.filtered;

  const FilterSource = Object.keys(filtered).map((source, i) => {
    let filter;
    if (filtered[source].length) {
      filter = (
        <div key={i} className="card ">
          {source === "calendar" && (
            <h2>
              <i className="fa fa-calendar cardIcon"></i>
              {source}
            </h2>
          )}
          {source === "dropbox" && (
            <h2>
              <i className="fa fa-dropbox cardIcon"></i>
              {source}
            </h2>
          )}
          {source === "slack" && (
            <h2>
              <i className="fa fa-slack cardIcon"></i>
              {source}
            </h2>
          )}
          {source === "tweet" && (
            <h2>
              <i className="fa fa-twitter cardIcon"></i>
              {source}
            </h2>
          )}
          {source === "contacts" && (
            <h2>
              <i className="fa fa-address-book cardIcon"></i>
              {source}
            </h2>
          )}

          <CardInfo info={filtered[source]} source={source} />
        </div>
      );
    }
    return filter;
  });

  return <Fragment>{FilterSource}</Fragment>;
};

export default Card;
