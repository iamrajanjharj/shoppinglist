//CSS Imports
import "./ShoppingList.css";

//Component Imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReducer } from "react";

//Reducers Import
import itemReducer from "../../reducers/itemReducer";

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  function handleAddItem(itemName) {
    dispatch({
      type: "add_item",
      itemName: itemName,
    });
  }

  function handleAddQuantity(itemId) {
    dispatch({
      type: "increment_quantity",
      itemId: itemId,
    });
  }

  function handleDecreaseQuantity(itemId) {
    dispatch({
      type: "decrement_quantity",
      itemId: itemId,
    });
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="current-shopping-list">
        <InputItem addItem={handleAddItem} />
        <ItemList
          shoppingItems={shoppingItems}
          addQuantity={handleAddQuantity}
          decreaseQuantity={handleDecreaseQuantity}
        />
      </div>
    </>
  );
}

export default ShoppingList;
