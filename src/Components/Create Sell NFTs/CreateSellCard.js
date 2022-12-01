import React from "react";
import "./CreateSellCard.css";

export const CreateSellCard = (props) => {
  return (
    <>
      <div className="col-sm-3">
        <div className="create_box">
          <div className="icon_box text-center">{props.icon}</div>
          <div className="create_text">
            <h6 className="create_col_head text-light pt-3 ">{props.name}</h6>
            <p className="create_col_para ">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
