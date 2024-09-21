import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Men = () => {
  const [cartItems, setCartItems] = useState([]);
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleHoverExit = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  const menProducts = [
    {
      id: 1,
      title: 'Product 1',
      price: 19.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/06/image00015-scaled.jpeg',
      link: '/product/1'
    },
    {
      id: 2,
      title: 'Product 2',
      price: 14.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/05/image00006-3-scaled.jpeg',
      link: '/product/2'
    },
    {
      id: 3,
      title: 'Product 3',
      price: 16.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/05/image00014-scaled.jpeg',
      link: '/product/3'
    },
    {
      id: 6,
      title: 'Product 6',
      price: 18.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/05/image00024-1-scaled.jpeg',
      link: '/product/6'
    },
    {
      id: 7,
      title: 'Product 7',
      price: 21.99,
      imgSrc: 'https://bigstar-ks.com/wp-content/uploads/2022/04/image00026-1-scaled.jpeg',
      link: '/product/7'
    }
  ];

  const chunkArray = (array) => {
    const firstRow = array.slice(0, 3);
    const secondRow = array.slice(3);
    return [firstRow, secondRow];
  };

  const chunkedProducts = chunkArray(menProducts);

  return (
    <div style={{  minHeight: '100vh', padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {chunkedProducts.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexBasis: '100%' }}>
          {row.map((product, index) => (
            <Link to={product.link} style={{ textDecoration: 'none', color: 'inherit', width: '200px', margin: '10px' }} key={product.id}>
              <div style={cardStyle}>
                <img src={product.imgSrc} alt={product.title} style={imageStyle} />
                <div style={contentStyle}>
                  <h3 style={productTitleStyle}>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

const cardStyle = {
  width: '100%', // Adjusted to fill the link element
  height: 'auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  marginBottom: '20px'
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

export default Men;