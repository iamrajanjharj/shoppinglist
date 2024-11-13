//CSS Imports
import "./Item.css";

//Component Imports
import React from "react";

function Item({ itemName, quantity }) {
  return (
    <div className="item-wrapper">
      <div className="item-name">{itemName}</div>
      <div className="item-qunatity">{quantity}</div>
    </div>
  );
}

export default React.memo(Item);
