// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './homeComponent/Home';
import Products from './Products';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import ProductDetails from './ProductDetails';
import AboutProducts from './AboutProducts';
import ProductDescription from './ProductDescription';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([]); 
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    // setCart((prevCart) => [...prevCart, product]);
    if (existingProduct) {
      // If it exists, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <BrowserRouter>
    <Navbar cartSize={cart.length} />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/product-details/:productId' element={<ProductDetails setCart={setCart} addToCart={addToCart} />} >
      <Route path='about-product' element={<AboutProducts/>} />
      <Route path='product-description' element={<ProductDescription/>} />
        </Route>
      <Route path='/Cart' element={<Cart cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} getTotalPrice={getTotalPrice}/>} />
      <Route path='/Login' element={< Login/>} />
      <Route path='/Register' element={<Register/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
