import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import {Redirect} from "react-dom"
import Index from './components/Index';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import About from './pages/About';


var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://fakestoreapi.com/products',
  headers: { }
};


function App() {

  const [products, setProducts] = useState()


  useEffect(function() {
    async function getProducts() {
       await axios(config)
      .then(function (response) {
          console.log(response.data)
;        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    getProducts();
  }, [])
  

  
  


  return (
    <>
      <Header setProducts={setProducts} products={products}/>
    <main className="App">
      <Routes>
        <Route path="/" element={<Index products={products} setProducts={setProducts}/>} />
        <Route path="/products" element={<Index products={products} setProducts={setProducts}/>} />
        <Route path="/products/:id" element={<Index products={products} setProducts={setProducts}/>}/>
        <Route path="/about" element={<About />}/>
        
          {/* <Redirect to="/products" /> */}
        
        
      </Routes>
    </main>
    </>
  );
}

export default App;
