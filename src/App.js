import React, { useEffect, useState } from 'react'
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import {commerce} from './lib/commerce'

function App() {
const[products, setProduct] = useState([]);

const getAllproducts = async() => {
  const {data} = await commerce.products.list();
  setProduct(data);
}

useEffect(()=>{
  getAllproducts();
},[])
  return (
    <>
      <Navbar />
      <Products products={products}/>
    </>
  )
}

export default App