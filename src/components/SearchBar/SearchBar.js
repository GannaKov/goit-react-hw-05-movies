import PropTypes from 'prop-types';
import toast from 'react-hot-toast'
import {FaSistrix} from 'react-icons/fa';
import React , {  useState}from 'react';
import {  SearchForm,SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchBar.styled';

export const Searchbar =({onSubm})=>{
  const [searchWord, setSearchWord] = useState("");
  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value.toLowerCase());
  };
  
  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchWord.trim() === '') {
      toast.error('Please fill the search form ');
      return;
    }
    
   onSubm(searchWord);
   
  };
  return ( 
  
    <SearchForm  onSubmit={handleSubmit}>
    <SearchFormButton type="submit" >
      <SearchFormButtonLabel><FaSistrix size={24}/></SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput 
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      value={searchWord}
      onChange={handleChange}/>
  </SearchForm>
     
    );
}
Searchbar.propTypes = {
  onSubm:PropTypes.func.isRequired
}