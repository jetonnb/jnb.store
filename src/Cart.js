import React from 'react';
import { useCart } from './pages/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <div className="cartIconContainer">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#333" />
      </div>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cartItem">
              <img src={item.image} alt={item.name} className="cartItemImage" />
              <div>
                <p>{item.name}</p>
                <div className="itemDetails">
                  <p>Size: {item.size}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <button className="removeItemButton" onClick={() => removeFromCart(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
          <button className="buyButton">
            {cart.length > 1 ? 'Buy All' : 'Buy'}
          </button>
        </>
      ) : (
        <p className="cartMessage">You haven't added any products to the cart.</p>
      )}
    </div>
  );
};

export default Cart;