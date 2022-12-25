import { Routes, Route} from "react-router-dom";
import React from 'react';
import { Toaster } from 'react-hot-toast'
//import React, { useState } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { Home } from "../../pages/Home";
import { Link,Container, Header} from "./App.styled";


export const App = () => {
 

  return (
    <Container>
      <GlobalStyle />  
      <Toaster toastOptions={{
      
      error: {duration: 3000,
        style: { border: '1px solid red',
        padding: '16px',
        
          minWidth: '450px',
         
        },
      },
    }}/>
      <Header> 
        <nav>
      <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
</nav>
</Header> 
     
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/movies" element={<div>Movies</div>} />
       
        <Route path="*" element={<div>NotFound </div>} />
      </Routes>
   </Container>
  );
};
// https://api.themoviedb.org/3/movie/550?api_key=894ef72300682f1db325dae2afe3e7e2
//{ <Route path="/" element={<Home />} />
//<Route path="/about" element={<About />} />
//<Route path="/products" element={<Products />} /> }