import styled from "styled-components";
//import { HiSearch } from "react-icons/hi";




// export const Wrapper = styled.div`
//   display: inline-flex;
//   align-items: center;
//   position: relative;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;
    
export const SearchForm = styled.form ` 
display: flex;
align-items: center;
width: 100%;
max-width: 300px;
background-color: #fff;
border-radius: 3px;
border:1px solid black;
overflow: hidden;
margin-bottom:16px`
       
      
      
 export const SearchFormButton =styled.button `
 display: inline-block;
 width: 48px;
 height: 48px;
 border: 0;
 background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
 background-size: 40%;
 background-repeat: no-repeat;
 background-position: center;
 opacity: 0.6;
 transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
 cursor: pointer;
 outline: none;
 :hover {
        opacity: 1;
      }`
        
        // export  const FaSistrix =styled.svg `
        // color: red;` 
      
    
      
    export const SearchFormButtonLabel =styled.span` 
    //position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    //clip-path: inset(50%); 
    border: 0;`
       
   
      
export const SearchFormInput = styled.input`display: inline-block;
width: 100%;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding-left: 4px;
padding-right: 4px;
::placeholder {
        font: inherit;
        font-size: 18px;
      }`
        
// export const Wrapper = styled.div`
//   display: inline-flex;
//   align-items: center;
//   position: relative;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;

// export const Input = styled.input`
//   padding: 8px 32px 8px 8px;
//   border-radius: 4px;
//   font: inherit;
// `;

// export const Icon = styled(HiSearch)`
//   width: 20px;
//   height: 20px;
//   position: absolute;
//   right: 6px;
// `;
