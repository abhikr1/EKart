import React, { useState } from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories"
import Product from "./Product/Product"

const HomePage = () => {

    return (
      <div className="App">
        <Header/>
        <Categories/>
        <Banner/>
        <Product/>
        <Footer /> 
      </div>
    );
  }


export default HomePage;