import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./img1.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <h1>Welcome to the Food Delivery App</h1>
    </div>
  );
};

export default Home;