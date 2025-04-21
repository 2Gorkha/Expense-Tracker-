import React, { useState } from "react";

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Sample items to add
  const menuItems = ["Pizza", "Burger", "Pasta", "Fries", "Soda"];

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu</h2>
      {menuItems.map((item, index) => (
        <button 
          key={index} 
          onClick={() => addToCart(item)}
          style={{
            margin: "5px",
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Add {item}
        </button>
      ))}

      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item} 
              <button 
                style={{ marginLeft: "10px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }} 
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewCart;
