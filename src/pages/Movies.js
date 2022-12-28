import  {  useState, useEffect}from 'react';
import toast from 'react-hot-toast'
import { useSearchParams } from "react-router-dom";
import { Status, keyApi, fetchFilms,BASE_URL} from 'components/Utils/FetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';

import { FilmsList } from 'components/FilmList/FilmList';
//  import { status,films } from 'hooks/fetchControls';
// import { useFetchControls  } from 'hooks/fetchControls';

export const Movies =()=>{  
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [ films, setFilms] = useState (null)
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFilm = searchParams.get("query");
   

const handleFormSubmit = query => {
    const nextQuery = query!== "" ? { query } : {};
    setSearchParams(nextQuery);
    
    
    //setPage(1) 
};
// const keyApi='894ef72300682f1db325dae2afe3e7e2'
useEffect(() => { 
    if (queryFilm){setStatus(Status.PENDING )
       const searchUrl =
       `${BASE_URL}search/movie?api_key=${keyApi}&query=${queryFilm}&page=`;

async function fetchData() {
    try { 
        const films  = await fetchFilms(1,searchUrl);
    if(films.results.length===0){
        toast.error('We did not find anything. Try again with a new word!');
        setStatus(Status.IDLE ) 
        setSearchParams({})
    return}
   
    setFilms(films.results)
    setStatus(Status.RESOLVED)
} catch (error) {setStatus(Status.REJECTED )
    toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
  position: 'top-center'}, ) 
}
}

fetchData();
}
 
}, [queryFilm, setSearchParams])

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