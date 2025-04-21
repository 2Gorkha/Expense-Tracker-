import React, { useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item.trim() !== "") {
      setCart([...cart, item]);
      setItem("");
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="p-4 text-center">
      <button onClick={toggleCart} className="bg-blue-500 text-white p-2 rounded">
        Menu
      </button>
      {showCart && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-bold mb-2">Cart Items</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="p-1">{item}</li>
              ))}
            </ul>
          ) : (
            <p>No items in cart</p>
          )}
        </div>
      )}
      <div className="mt-4">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add Item"
          className="border p-2"
        />
        <button onClick={addItem} className="ml-2 bg-green-500 text-white p-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
