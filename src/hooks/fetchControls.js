import  {  useState, useEffect}from 'react';
import { fetchFilms } from 'components/Utils/FetchMovies';
import toast from 'react-hot-toast'


export const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };
  export function useFetchControls (queryFilm){  
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [ films, setFilms] = useState (null)

    const keyApi='894ef72300682f1db325dae2afe3e7e2'
    useEffect(() => { 
        if (queryFilm){setStatus(Status.PENDING )
           const searchUrl =
           `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${queryFilm}&page=`;
   console.log(searchUrl)
       fetchFilms(1,searchUrl)
       .then(films=>{if(films.results.length===0){
           toast.error('We did not find anything. Try again with a new word!');
           setStatus(Status.IDLE ) 
       return}
           setFilms(films.results)
          
       setStatus(Status.RESOLVED)
       // if(page === 1){ 
       //     setPhotos(photos.hits)
       //     setStatus(Status.RESOLVED)
       //     setTotalHits(photos.totalHits )
       //      }
       //    else{ 
       //        setPhotos(prev=>[...prev,...photos.hits])
       //     setStatus(Status.RESOLVED)
       //     setTotalHits(photos.totalHits )
       //  }  
   
   
   })//end then
       .catch( () => 
       {setStatus(Status.REJECTED )
           toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
         position: 'top-center'}, ) 
     })//end catch}
       
   }}, [queryFilm])


   return { status, films}; 
  }