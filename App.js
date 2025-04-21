import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Orderpage from './pages/Orderpage';
import ViewCart from './pages/ViewCart';

const App = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Function to clear all items from the cart
  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders/current" element={<Orderpage />} />
        <Route 
          path="/cart" 
          element={<ViewCart cartItems={cartItems} removeFromCart={handleRemove} clearCart={handleClear} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
