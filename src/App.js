import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import { commerce } from './lib/commerce'
import Cart from './Components/Cart/Cart';

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

  useEffect(() => {
    // getAllproducts();
    fetchCart();
  }, [])


  return (
    <> 
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart}/>
    </>
  )
}

export default App