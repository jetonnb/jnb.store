import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './pages/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-icon-wrapper">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <h1 className="cart-title">Shopping Cart</h1>
      </div>

      <div className="cart-content">
        {cart.length > 0 ? (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-size">Size: {item.size}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <button 
                    className="remove-button" 
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button className="buy-now-button">
              Buy Now ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </button>
          </>
        ) : (
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty</p>
            <Link to="/" className="continue-shopping-button">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;