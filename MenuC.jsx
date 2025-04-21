import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
              <button 
                onClick={() => removeFromCart(index)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button 
          onClick={clearCart}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "darkred",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
