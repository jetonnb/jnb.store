// App.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './pages/CartContext';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import Login from './Login'; // Import the Login component
import Signup from './Signup';
import Footer from './Footer';
import Men from './Men';
import Women from './Women';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import Product7 from './pages/Product7';
import Product8 from './pages/Product8';
import Product9 from './pages/Product9';



function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} /> {/* Add the Route for the login page */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/1" element={<Product1 />} />
            <Route path="/product/2" element={<Product2 />} />
            <Route path="/product/3" element={<Product3 />} />
            <Route path="/product/4" element={<Product4 />} />
            <Route path="/product/5" element={<Product5 />} />
            <Route path="/product/6" element={<Product6 />} />
            <Route path="/product/7" element={<Product7 />} />
            <Route path="/product/8" element={<Product8 />} />
            <Route path="/product/9" element={<Product9 />} />


            
           
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
