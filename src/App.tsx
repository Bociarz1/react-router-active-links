// import Browser Router in index.js
// import LINK, ROUTE and ROUTES 
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

type navLinkStylesType = {
  isActive: boolean
}

function App() {
  const navLinkStyles = ({isActive}:navLinkStylesType) => {
    return {
    color: isActive ? 'red': 'green',
    fontSize: isActive ? '30px': '15px'
    }
  }
  return (
    <>
    {/* NavLink contains ACTIVE class which is a boolean flag set to true when has been clicked */}

    {/* you can style Active Class in 2 ways:
    1. by adding css styles */}
     <NavLink to='/home'>Go to HOME by NavLink</NavLink><br/>

    {/* 2. by creating function({isActive}) */}
    <NavLink style={navLinkStyles} to='/about'>Go to ABOUT by NavLink</NavLink><br/>
      <Routes>
        <Route
          path='/home'
          element={<Home/>}   
        />
         <Route
          path='/about'
          element={<About/>}   
        />
      </Routes>
    </>
  );
}

export default App;
