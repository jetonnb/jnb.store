import React, { useState } from 'react';
import { useCart } from './CartContext';



const titleStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  margin: '0',
  color: '#333',
  marginBottom: '10px',
};

const priceStyle = {
  fontSize: '30px',
  margin: '0',
  color: '#333',
};

const sizeContainerStyle = {
  fontSize: '20px',
  margin: '0',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '20px',
  border: '1px solid #ccc',
};

const imageContainerStyle = {
  flex: '0 0 auto',
  marginRight: '20px',
};

const imageStyle = {
  width: '400px',
  height: 'auto',
  borderRadius: '15px' 
};

const textContainerStyle = {
  minWidth: '300px',
};

const sizeButtonStyle = {
  fontSize: '12px',
  margin: '0 3px',
  color: '#fff',
  cursor: 'pointer',
  padding: '4px 8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  backgroundColor: '#333',
  transition: 'background-color 0.3s',
};

const selectedButtonStyle = {
  ...sizeButtonStyle,
  background: '#ccc',
  color: '#333',
};

const addToCartButtonStyle = {
  fontSize: '16px',
  margin: '10px 0',
  color: '#fff',
  cursor: 'pointer',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#333',
  transition: 'background-color 0.3s, transform 0.3s', // Added transform transition
};

const Product5 = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSizeSelect = (size) => {
    if (selectedSize === size) {
      setSelectedSize(''); // Deselect the size if it's already selected
    } else {
      setSelectedSize(size);
    }
    setShowError(false);
  };

  

  const handleAddToCart = () => {
    if (!selectedSize) {
      setIsClicked(true);
      setShowError(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 240);
      return;
    }

    setIsClicked(true); // Set isClicked to true when Add to Cart is clicked
    setTimeout(() => {
      setIsClicked(false); // Reset isClicked after the transition
    }, 300);

    addToCart({
      name: 'Product 5',
      size: selectedSize,
      price: 12.99,
      image:
        'https://bigstar-ks.com/wp-content/uploads/2021/05/IMG_2794-scaled.jpg', // Include the image URL
    });
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://bigstar-ks.com/wp-content/uploads/2021/05/IMG_2794-scaled.jpg"
          alt="Product 5"
          style={imageStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Product 5 Details</h1>
        <p style={priceStyle}>Price: $12.99</p>
        <div style={sizeContainerStyle}>
          <span style={{ marginRight: '10px' }}>Size:</span>
          <button
            style={selectedSize === 'S' ? selectedButtonStyle : sizeButtonStyle}
            onClick={() => { handleSizeSelect('S'); }}
          >
            S
          </button>
          <button
            style={selectedSize === 'M' ? selectedButtonStyle : sizeButtonStyle}
            onClick={() => { handleSizeSelect('M'); }}
          >
            M
          </button>
          <button
            style={selectedSize === 'L' ? selectedButtonStyle : sizeButtonStyle}
            onClick={() => { handleSizeSelect('L'); }}
          >
            L
          </button>
          <button
            style={selectedSize === 'XL' ? selectedButtonStyle : sizeButtonStyle}
            onClick={() => { handleSizeSelect('XL'); }}
          >
            XL
          </button>
          </div>
<button
  style={isClicked ? { ...addToCartButtonStyle, transform: 'scale(1.1)' } : addToCartButtonStyle}
  onClick={() => { handleAddToCart(); }}
>
  Add to Cart
</button>
<hr /> {/* This is the line separator */}
<p style={{ color: '#333', margin: '10px 0' }}>This is a great product that you will love.</p> {/* This is the product description */}
{showError && !selectedSize && (
  <p style={{ color: 'red', margin: '5px 0' }}>Please select the size of the product you want.</p>
)}
</div>
</div>
);
};

export default Product5;