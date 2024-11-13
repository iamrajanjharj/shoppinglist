//CSS Imports
import "./InputItem.css";

//UTILS Imports
import { showSuccess } from "../../utils/showToasts";

function InputItem() {
  return (
    <div className="item-input-wrapper">
      <input className="item-input" type="text" placeholder="Add an item..." />
      <button
        className="add-item-button"
        onClick={() => showSuccess("Item added successfully")}
      >
        Add
      </button>
    </div>
  );
}

export default InputItem;
