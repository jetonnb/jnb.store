import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Women = () => {

  const WomenProducts = [
    {
      id: 4,
      title: 'Product 4',
      price: 24.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/05/1-8-scaled.jpeg',
      link: '/product/4'
    },
    {
      id: 5,
      title: 'Product 5',
      price: 12.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2021/05/IMG_2794-scaled.jpg',
      link: '/product/5'
    },
    {
      id: 8,
      title: 'Product 8',
      price: 17.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/05/1-2.jpeg',
      link: '/product/8'
    },
    {
      id: 9,
      title: 'Product 9',
      price: 15.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/03/image00012-3-scaled.jpeg',
      link: '/product/9'
    }
    // Add more products here...
  ];

  // Adjust chunking logic to display two cards below and three on the front row
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    let i = 0;
    while (i < array.length) {
      chunkedArray.push(array.slice(i, i + size));
      i += size;
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(WomenProducts, 3); // Split WomenProducts into rows of three

  return (
    <div style={{  minHeight: '100vh', padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {chunkedProducts.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexBasis: '100%' }}>
          {row.map((product) => (
            <div key={product.id} style={cardStyle}>
              <Link to={product.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.imgSrc} alt={product.title} style={imageStyle} />
              </Link>
              <div style={productTitleStyle}>{product.title}</div>
              <div style={contentStyle}>
                
                
                <p>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const cardStyle = {
  width: '200px',
  height: 'auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  marginBottom: '20px', // Added margin bottom to create space between cards
  margin: '10px' // Adjusted margin for better spacing
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '15px',
  marginBottom: '10px'
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};



const productTitleStyle = {
  fontSize: '25px',
  fontWeight: 'bold',
};

export default Women;
