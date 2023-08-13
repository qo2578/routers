import React from 'react';
import { Route, Routes} from 'react-router';
import {Link}  from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import './App.css'

const App = () => {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <Link c to="/" className='header-links'>главная</Link>
        <Link to="/contacts">контакты</Link>
        <Link to="/products">продукты</Link>
    
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Contacts/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App