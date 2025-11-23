import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import "./Product.css";

const Product2 = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      name: "Product 2",
      size: selectedSize,
      price: 29.99,
      image: "https://bigstar-ks.com/wp-content/uploads/2022/05/image00006-3-scaled.jpeg",
    });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <div className="product-detail-content">
          <div className="product-image-section">
            <img
              src="https://bigstar-ks.com/wp-content/uploads/2022/05/image00006-3-scaled.jpeg"
              alt="Product 2"
              className="product-detail-image"
            />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-detail-title">Product 2</h1>
            <p className="product-detail-price">$29.99</p>
            
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
              This is a great product that you will love. Made with high-quality materials
              and designed for comfort and style.
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

export default Product2;
