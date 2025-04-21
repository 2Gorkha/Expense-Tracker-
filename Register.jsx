import React from 'react';

const Register = () => {
  return (
    <div style={{ 
      backgroundImage: "url('https://img.freepik.com/premium-vector/food-delivery-service-fast-food-delivery-scooter-delivery-service-illustration_67394-869.jpg')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form style={{ 
        background: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3">
          <label htmlFor="userType" className="form-label">User Type</label>
          <select className="form-select" id="userType">
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant Owner</option>
            <option value="delivery">Delivery Partner</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="foodPreference" className="form-label">Food Preference</label>
          <select className="form-select" id="foodPreference">
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="termsCheck" />
          <label className="form-check-label" htmlFor="termsCheck">Accept Terms & Conditions</label>
        </div>

        <button type="submit" className="btn btn-primary">SignUp</button>
      </form>
    </div>
  );
};

export default Register;
