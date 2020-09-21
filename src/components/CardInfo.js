import React, { Fragment } from "react";

const CardInfo = (props) => {
  const { info, source } = props;

  const infoData = info.map((info, inx) => (
      <ul key={inx}>
        {Object.keys(info).map((key, i) => (
          <li key={i}>
            <span className="infoLabel">{key === 'invitees' && key }</span>{" "}
            <span className="infoLabel">{key === 'company' && key }</span>{" "}
            <span className="infoLabel">{key === 'emails' && key }</span>{" "}
            <span className="infoLabel">{key === 'phones' && key }</span>{" "}
            <span className="infoLabel">{key === 'path' && 'Document'}</span>{" "}
            <span className="infoLabel">{key === 'shared_with' && 'Shared'}</span>{" "}
            <span className="infoLabel">{key === 'created' && key}</span>{" "}
            <span className="infoLabel">{key === 'author' && key}</span>{" "}
            {key !== "id" && key !== "matching_terms" && info[key]}
          </li>
        ))}
      </ul>
    ));

  return (
    <Fragment>
      <div className="cardInfo">{infoData}</div>
    </Fragment>
  );
};

export default CardInfo;
