import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

// === DESKTOP STYLES ===
const containerStyleDesktop = {
  display: "flex",
  alignItems: "flex-start",
  padding: "20px",
  border: "1px solid #ccc",
};
const imageContainerStyleDesktop = {
  flex: "0 0 auto",
  marginRight: "20px",
};
const imageStyleDesktop = {
  width: "400px",
  height: "auto",
  borderRadius: "15px",
};
const textContainerStyleDesktop = {
  minWidth: "300px",
};
const titleStyleDesktop = {
  fontSize: "48px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
  marginBottom: "10px",
};
const priceStyleDesktop = {
  fontSize: "30px",
  margin: "0",
  color: "#333",
};
const sizeContainerStyleDesktop = {
  fontSize: "20px",
  margin: "0",
  color: "#333",
  display: "flex",
  alignItems: "center",
};

// === MOBILE STYLES ===
const containerStyleMobile = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  border: "1px solid #ccc",
};
const imageContainerStyleMobile = {
  flex: "0 0 auto",
  marginRight: "0",
  marginBottom: "20px",
  textAlign: "center",
};
const imageStyleMobile = {
  width: "90%",
  height: "auto",
  borderRadius: "15px",
};
const textContainerStyleMobile = {
  minWidth: "90%",
  textAlign: "center",
};
const titleStyleMobile = {
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
  marginBottom: "10px",
};
const priceStyleMobile = {
  fontSize: "24px",
  margin: "0",
  color: "#333",
};
const sizeContainerStyleMobile = {
  fontSize: "16px",
  margin: "0",
  color: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "10px",
};

const sizeButtonStyle = {
  fontSize: "12px",
  margin: "5px",
  color: "#fff",
  cursor: "pointer",
  padding: "6px 10px",
  border: "1px solid #ccc",
  borderRadius: "3px",
  backgroundColor: "#333",
  transition: "background-color 0.3s",
};
const selectedButtonStyle = {
  ...sizeButtonStyle,
  background: "#ccc",
  color: "#333",
};

const Product4 = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === MERGED STYLES BASED ON isMobile ===
  const containerStyle = isMobile
    ? containerStyleMobile
    : containerStyleDesktop;
  const imageContainerStyle = isMobile
    ? imageContainerStyleMobile
    : imageContainerStyleDesktop;
  const imageStyle = isMobile ? imageStyleMobile : imageStyleDesktop;
  const textContainerStyle = isMobile
    ? textContainerStyleMobile
    : textContainerStyleDesktop;
  const titleStyle = isMobile ? titleStyleMobile : titleStyleDesktop;
  const priceStyle = isMobile ? priceStyleMobile : priceStyleDesktop;
  const sizeContainerStyle = isMobile
    ? sizeContainerStyleMobile
    : sizeContainerStyleDesktop;

  const addToCartButtonStyle = {
    fontSize: isMobile ? "14px" : "16px",
    margin: "10px 0",
    color: "#fff",
    cursor: "pointer",
    padding: isMobile ? "8px 16px" : "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#333",
    transition: "background-color 0.3s, transform 0.3s",
  };

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
      name: "Product 4",
      size: selectedSize,
      price: 24.99,
      image:
        "https://bigstar-ks.com/wp-content/uploads/2022/05/1-8-scaled.jpeg",
    });
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://bigstar-ks.com/wp-content/uploads/2022/05/1-8-scaled.jpeg"
          alt="Product 4"
          style={imageStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Product 4 Details</h1>
        <p style={priceStyle}>Price: $24.99</p>
        <div style={sizeContainerStyle}>
          <span style={{ marginRight: "10px" }}>Size:</span>
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              style={
                selectedSize === size ? selectedButtonStyle : sizeButtonStyle
              }
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button
          style={
            isClicked
              ? { ...addToCartButtonStyle, transform: "scale(1.1)" }
              : addToCartButtonStyle
          }
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <hr />
        <p style={{ color: "#333", margin: "10px 0" }}>
          This is a great product that you will love.
        </p>
        {showError && !selectedSize && (
          <p style={{ color: "red", margin: "5px 0" }}>
            Please select the size of the product you want.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product4;
