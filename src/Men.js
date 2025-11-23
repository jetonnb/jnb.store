import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from './data';
import './Home.css'; // Reusing Home.css for consistent styling

const Men = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menProducts = products.filter(product => product.category === 'men');

  return (
    <div className="home-container">
      <h1 className="page-title">Men's Collection</h1>
      
      <div className="products-section">
        <div className="products-grid">
          {menProducts.map((product) => (
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

export default Men;