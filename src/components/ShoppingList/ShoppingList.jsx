//Component Imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//CSS Imports
import "./ShoppingList.css";

function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function handleAddItem(itemName) {
    setShoppingItems([
      ...shoppingItems,
      { id: uuidv4(), name: itemName, quantity: 1 },
    ]);
  }

  function handleAddQuantity(itemId) {
    setShoppingItems(
      shoppingItems.map((item) => {
        if (item.id === itemId) item.quantity++;
        return item;
      })
    );
  }

  function handleDecreaseQuantity(itemId) {
    let newShoppingItems = shoppingItems.map((item) => {
      if (item.id === itemId) item.quantity--;
      return item;
    });

    setShoppingItems(newShoppingItems.filter((item) => item.quantity > 0));
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
