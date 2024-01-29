import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import { commerce } from './lib/commerce'
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckoutForm from './Components/CheckoutForm/Checkout/CheckoutForm';
// import { Switch } from '@material-ui/core';

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});

  const getAllproducts = async () => {
    const { data } = await commerce.products.list();
    setProduct(data);
  }

  const fetchCart = async () => {
    // const cart = await commerce.cart.retrieve();
    // setCart(cart);
    //above use as below
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, {quantity});
    setCart(item);
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  }


  useEffect(() => {
    getAllproducts();
    fetchCart();
  }, [])
  

  return (
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={
        <Products products={products} onAddToCart={handleAddToCart} />
        } />
        <Route path="/cart" element={
        <Cart cart={cart} 
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}/>
        } />
        <Route path="/checkout" element={
        <CheckoutForm cart={cart}/>
        } />
      </Routes>
    </Router>
  )
}

export default App