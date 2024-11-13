//CSS Imports
import "./InputItem.css";

//UTILS Imports
import { showSuccess } from "../../utils/showToasts";

//COMPONENTS Imports
import { useState } from "react";

function InputItem({ addItem }) {
  const [itemName, setItemName] = useState("");

  return (
    <div className="item-input-wrapper">
      <input
        className="item-input"
        type="text"
        placeholder="Add an item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        className="add-item-button"
        onClick={() => {
          addItem(itemName);
          setItemName("");
          showSuccess(`Item ${itemName} added successfully`);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputItem;
