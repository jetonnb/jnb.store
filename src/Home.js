import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from './data';
import './Home.css';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to JNBStore</h1>
        <p className="hero-subtitle">Discover the latest trends in fashion</p>
        <Link to="/men" className="hero-button">Shop Men</Link>
        <Link to="/women" className="hero-button" style={{ marginLeft: '20px' }}>Shop Women</Link>
      </div>

      <div className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-image-container">
                  <img src={product.imgSrc} alt={product.title} className="product-image" />
                  <div className="product-overlay">
                    <button className="view-details-button">View Details</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.title}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;