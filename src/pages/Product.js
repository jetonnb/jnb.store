import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { products } from '../data';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showError, setShowError] = useState(false);

  // Find the product based on the ID from the URL
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(selectedSize === size ? "" : size);
    setShowError(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setIsClicked(true);
      setShowError(true);
      setTimeout(() => setIsClicked(false), 240);
      return;
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    addToCart({
      id: product.id,
      name: product.title, // Changed from product.name to product.title to match data.js
      size: selectedSize,
      price: product.price,
      image: product.imgSrc, // Changed from product.image to product.imgSrc to match data.js
    });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <div className="product-detail-content">
          <div className="product-image-section">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="product-detail-image"
            />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            
            <div className="size-selection">
              <span className="size-label">Select Size:</span>
              <div className="size-buttons">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              className={`add-to-cart-button ${isClicked ? 'clicked' : ''}`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            
            <hr className="product-divider" />
            
            <p className="product-description">
              {product.description}
            </p>
            
            {showError && !selectedSize && (
              <p className="size-error">
                Please select a size before adding to cart.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
