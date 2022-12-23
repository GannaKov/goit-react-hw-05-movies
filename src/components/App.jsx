import { Routes, Route } from "react-router-dom";
import React from 'react';
//import React, { useState } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';



export const App = () => {
 

  return (
    <div>
      <GlobalStyle />  
      <Routes>
    <Route path="/" element={(<div>Home</div>)} />
        <Route path="/about" element={(<div>Movies</div>)} />
        
      </Routes>
   </div>
  );
};
// https://api.themoviedb.org/3/movie/550?api_key=894ef72300682f1db325dae2afe3e7e2
//{ <Route path="/" element={<Home />} />
//<Route path="/about" element={<About />} />
//<Route path="/products" element={<Products />} /> }