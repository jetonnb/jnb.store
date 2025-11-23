// App.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './pages/CartContext';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import Men from './Men';
import Women from './Women';
import Product from './pages/Product';




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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<Product />} />



            
           
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
