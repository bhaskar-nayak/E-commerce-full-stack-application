
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Cart.css'
function Cart({ cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice }){
  
    return(
      <>
      <div className="container mt-5">
      <h2 className='fontShop'>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className='cartempty'>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
  <div key={item.id} className="mb-3 my-4">
    <img src={`http://localhost:9091${item.imgSrc}`} alt={item.name} style={{ width: '120px', marginRight: '10px' }} />
    {item.name} - ₹{item.price} - Quantity: {item.quantity}
          {/* {cart.map((item) => (
            <div key={item.id} className="mb-3 my-4">
              <img src={`http://localhost:9091/images/${item.imgSrc}`} alt={item.name} style={{ width: '120px', marginRight: '10px' }} />
              src={item.imgSrc} */}
              {/* {item.name} - ₹{item.price} - Quantity: {item.quantity} */}
              <button className="btn btn-light mx-2" onClick={() => incrementQuantity(item.id)}>
                +
              </button>
              <button className="btn btn-light mx-2" onClick={() => decrementQuantity(item.id)}>
                -
              </button>
              <button className="btn btn-dark" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <p className='totalprice'>Total Price:₹{getTotalPrice()}</p>
          <Link to="/">
            <button className="btn btn-dark my-5">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
      </>
    )
}
export default Cart;