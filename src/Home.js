import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount/update
  }, []);
  
  const products = [
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
  ];

  // Function to chunk array into groups of size
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(products, 3); // Split products into rows of three

  return (
    <div style={{  minHeight: '100vh', padding: '20px' }}>
      {chunkedProducts.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: 'wrap' }}>
          {row.map((product) => (
            <div key={product.id} style={cardStyle}>
              <Link to={product.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.imgSrc} alt={product.title} style={imageStyle} />
                <div style={contentStyle}>
                  <h2>{product.title}</h2>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </Link>
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
  marginBottom: '20px' // Added margin bottom to create space between cards
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



export default Home;