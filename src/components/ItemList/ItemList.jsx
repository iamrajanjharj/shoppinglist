//CSS Imports
import "./ItemList.css";

//Components Import
import Item from "../Item/Item";

function ItemList({ shoppingItems }) {
  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <Item itemName={item.name} key={item.id} quantity={item.quantity} />
          );
        })}
    </div>
  );
}

export default ItemList;
