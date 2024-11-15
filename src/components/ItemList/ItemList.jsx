//CSS Imports
import "./ItemList.css";

//UTIL Imports
import { showError } from "../../utils/showToasts";

//FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

//Components Import
import Item from "../Item/Item";

function ItemList({ shoppingItems, addQuantity, decreaseQuantity }) {
  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <div key={item.id} className="items-list">
              <div
                className="change-quantity add-item"
                onClick={() => addQuantity(item.id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div
                className="change-quantity remove-item"
                onClick={() => {
                  if (item.quantity == 1) {
                    showError(`${item.name} removed successfully.`);
                  }
                  decreaseQuantity(item.id);
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ItemList);
