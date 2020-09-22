import React, { Fragment, useState, useEffect } from "react";

const CardInfo = (props) => {
  const [info, SetInfo] = useState({
    info: props.info,
  });

  const handleRemove = (id) => {
    const remove = info.info.filter((item) => item.id != id);
    return SetInfo({ ...info, info: remove });
  };

  const content = (data) => {
    let res = Object.keys(data).map((key, i) => (
      <li key={i}>
        <span className="infoLabel">{key === "invitees" && key}</span>{" "}
        <span className="infoLabel">{key === "company" && key}</span>{" "}
        <span className="infoLabel">{key === "emails" && key}</span>{" "}
        <span className="infoLabel">{key === "phones" && key}</span>{" "}
        <span className="infoLabel">{key === "path" && "Document"}</span>{" "}
        <span className="infoLabel">{key === "shared_with" && "Shared"}</span>{" "}
        <span className="infoLabel">{key === "created" && key}</span>{" "}
        <span className="infoLabel">{key === "author" && key}</span>{" "}
        {key !== "id" && key !== "matching_terms" && data[key]}
      </li>
    ));
    return res;
  };

  const infoData = info.info.map((info, inx) => {
    return (
      <ul key={inx}>
        <div className="cardTrash">
          <a
            href="#"
            style={{ color: "red" }}
            className="fa fa-trash"
            onClick={() => handleRemove(info.id)}
          ></a>
        </div>
        {content(info)}
      </ul>
    );
  });

  return (
    <Fragment>
      <div className="cardInfo">{infoData}</div>
    </Fragment>
  );
};

export default CardInfo;
