import React, { useEffect, createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Single from "./Components/Single";
import Navbar from './Components/Navbar'
import Cart from "./Components/Cart";
export const globalContext = createContext();
function App() {
  const [getData, setGetData] = useState();
  const getNewData = (item) => {
    setGetData(item);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
    });
  }, []);
  // console.log(getData);
  return (
    <>
      <BrowserRouter>
        <globalContext.Provider value={{ func: getNewData, newId: getData }}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single/:id" element={<Single/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </globalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
