import React , {  useState, useEffect}from 'react';
import { useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast'
import { Searchbar } from 'components/SearchBar/SearchBar';
import { fetchFilms } from 'components/Utils/FetchMovies';
import { FilmsList } from 'components/FilmList/FilmList';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };
export const Movies =()=>{  
   
    const [ status, setStatus] = useState("Status.IDLE");
    const [ films, setFilms] = useState(null); 
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [searchWord, setSearchWord] = useState("");
  
    console.log("name",name)
 //const [ films, setFilms] = useState(null); 
//   const [ status, setStatus] = useState("Status.IDLE"); 
const handleFormSubmit = searchWord => {
    setSearchParams(searchWord)
    setSearchWord(searchWord)
    console.log("searchWord",searchWord)
    //setPage(1) 
};
const keyApi='894ef72300682f1db325dae2afe3e7e2'
const searchUrl =
 `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${searchWord}&page=`;
useEffect(() => {  if (searchWord){setStatus(Status.PENDING )

console.log(searchUrl,searchWord)
    fetchFilms(1,searchUrl).then(films=>{setFilms(films.results)
       
    setStatus(Status.RESOLVED)})//end then
    .catch( () => 
    {setStatus(Status.REJECTED )
        toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
      position: 'top-center'}, ) 
  })//end catch}
    
}}, [searchWord, searchUrl])
console.log("in F",films)
  return ( 
    <main>
           <Searchbar onSubm={handleFormSubmit}/>
          { status === 'resolved'?
 (<FilmsList films={films}></FilmsList>):null}

    </main>    
  )
   
    
       
      
}
//if (status === 'resolved'){ 
 //   <FilmsList films={films}></FilmsList>}
//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1