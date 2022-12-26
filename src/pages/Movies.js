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
    const queryFilm = searchParams.get("query");
    console.log("query",queryFilm)

const handleFormSubmit = query => {
    const nextQuery = query!== "" ? { query } : {};
    setSearchParams(nextQuery);
    console.log("searchParams",searchParams)
   
    //setPage(1) 
};
const keyApi='894ef72300682f1db325dae2afe3e7e2'

useEffect(() => { 
     if (queryFilm){setStatus(Status.PENDING )
        const searchUrl =
        `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${queryFilm}&page=`;
console.log(searchUrl)
    fetchFilms(1,searchUrl).then(films=>{setFilms(films.results)
       
    setStatus(Status.RESOLVED)})//end then
    .catch( () => 
    {setStatus(Status.REJECTED )
        toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
      position: 'top-center'}, ) 
  })//end catch}
    
}}, [queryFilm])
// console.log("in F",films)
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
//https://api.themoviedb.org/3/search/movie?api_key=894ef72300682f1db325dae2afe3e7e2&page=1&query=dog