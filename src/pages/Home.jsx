import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home