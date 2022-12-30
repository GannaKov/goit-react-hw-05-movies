import {  useState, useEffect}from 'react';
import { useLocation } from "react-router-dom";
import toast from 'react-hot-toast'
import { Loader } from 'components/Loader/Loader';
import { FilmsList } from 'components/FilmList/FilmList';
import { Status, keyApi, fetchFilms,BASE_URL} from 'components/Utils/FetchMovies'; 


export const Home = () => {
    
  const location = useLocation();
  const [ films, setFilms] = useState(null); 
  const [ status, setStatus] = useState("Status.IDLE"); 
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
      fetchData()  
}, [])
if(status==="pending"){return <Loader/>}
if (status === 'resolved'){  return (
    <>
   <FilmsList location ={location} films={films}></FilmsList>
      </>
  );}
  };
  export default Home;  