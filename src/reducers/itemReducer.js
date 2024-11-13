import { v4 as uuidv4 } from "uuid";

function itemReducer(shoppingItems, action) {
  // action is object with {type: add_item}
  if (action.type == "add_item") {
    return [
      ...shoppingItems,
      { id: uuidv4(), name: action.itemName, quantity: 1 },
    ];
  } else if (action.type == "increment_quantity") {
    return shoppingItems.map((item) => {
      if (item.id === action.itemId) item.quantity++;
      return item;
    });
  } else if (action.type == "decrement_quantity") {
    let newShoppingItems = shoppingItems.map((item) => {
      if (item.id === action.itemId) item.quantity--;
      return item;
    });

    return newShoppingItems.filter((item) => item.quantity > 0);
  }
}

export default itemReducer;
