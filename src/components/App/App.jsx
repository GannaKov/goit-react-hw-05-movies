import { Routes, Route} from "react-router-dom";
// import React from 'react';
import { Toaster } from 'react-hot-toast'
//import React, { useState } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "../../pages/Home";
import { Movies } from "pages/Movies";
import { Link,Container, Header} from "./App.styled";
import { FilmDetails } from "pages/MovieDetails";
import { FilmCast } from "components/FilmCast/FilmCast";
import { FilmReviews } from "components/Filmreviews/FilmReviews";


export const App = () => {
 

  return (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies/>}/>
      <Route path="movies/:id" element={<FilmDetails />}>
         <Route path="cast" element={<FilmCast/>} />
         <Route path="reviews" element={<FilmReviews/>} /> 
      </Route>   
     <Route path="*" element={<div>NotFound </div>} /> 
    </Route>
 </Routes>
   
  );
};
// https://api.themoviedb.org/3/movie/550?api_key=894ef72300682f1db325dae2afe3e7e2
//{ <Route path="/" element={<Home />} />
//<Route path="/about" element={<About />} />
//<Route path="/products" element={<Products />} /> }
// export const getProductById = (productId) => {
//   return products.find((product) => product.id === productId);
// };
