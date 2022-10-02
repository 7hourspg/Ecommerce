import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Products from "./Products";
import Single from "./Single";
import { Route,Routes } from 'react-router-dom'
import Newslatter from "./Newslatter";
function Home() {
  return (
    <>
      
      <Carousel />
      <Categories />
      <Products />
      <Newslatter/>
      
    </>
  );
}

export default Home;
