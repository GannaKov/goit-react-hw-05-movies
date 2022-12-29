import React , {  useState, useEffect}from 'react';
import toast from 'react-hot-toast'
import { Loader } from 'components/Loader/Loader';
import { FilmsList } from 'components/FilmList/FilmList';
import { Status, keyApi, fetchFilms,BASE_URL} from 'components/Utils/FetchMovies'; 


export const Home = () => {
    
   
  const [ films, setFilms] = useState(null); 
  const [ status, setStatus] = useState("Status.IDLE"); 
//   const [  totalHits, setTotalHits] = useState(0); 
//   const KEY = '894ef72300682f1db325dae2afe3e7e2';

  useEffect(() => {setStatus(Status.PENDING )
    const trendUrl =
    `${BASE_URL}trending/movie/day?api_key=${keyApi}&page=`;
    async function fetchData() {
      try {
        const films  = await fetchFilms(1,trendUrl);
        setFilms(films.results)
        setStatus(Status.RESOLVED)}
        catch (err){setStatus(Status.REJECTED )
          toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
        position: 'top-center'}, ) }
    }
    
    // fetchFilms(1,trendUrl).then(films=>{setFilms(films.results)
    //     setStatus(Status.RESOLVED)})//end then
      //   .catch( () => 
      //   {setStatus(Status.REJECTED )
      //       toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
      //     position: 'top-center'}, ) 
      // })//end catch
      fetchData()  
}, [])
if(status==="pending"){return <Loader/>}
if (status === 'resolved'){ console.log(films)
    return (
    <>
   <FilmsList films={films}></FilmsList>
      </>
       
     
   
  );}
   
  };
  export default Home;  