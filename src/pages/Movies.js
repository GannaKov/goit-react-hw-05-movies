import React from 'react';
import { useSearchParams } from "react-router-dom";

import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';

import { FilmsList } from 'components/FilmList/FilmList';
//  import { status,films } from 'hooks/fetchControls';
import { useFetchControls  } from 'hooks/fetchControls';

export const Movies =()=>{  
   
    // const [ status, setStatus] = useState("Status.IDLE");
   
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFilm = searchParams.get("query");
    console.log("query",queryFilm)

const handleFormSubmit = query => {
    const nextQuery = query!== "" ? { query } : {};
    setSearchParams(nextQuery);
    console.log("searchParams",searchParams)
    
    //setPage(1) 
};
// const keyApi='894ef72300682f1db325dae2afe3e7e2'

const { status, films}=useFetchControls (queryFilm)
// console.log("in F",films)
if(status==="pending"){return <Loader/>}

  return ( 
    <main>
           <Searchbar onSubm={handleFormSubmit}/>
           {status==="pending" && (<Loader/>)}
          { status === 'resolved'?
 (<FilmsList films={films}></FilmsList>):null}

    </main>    
  )
   
    
       
      
}
//if (status === 'resolved'){ 
 //   <FilmsList films={films}></FilmsList>}
//https://api.themoviedb.org/3/search/movie?api_key=894ef72300682f1db325dae2afe3e7e2&page=1&query=dog