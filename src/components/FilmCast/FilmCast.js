import  {  useState, useEffect}from 'react';
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast'
import { Status, keyApi, fetchFilm,BASE_URL} from 'components/Utils/FetchMovies'; 
import { Link } from "react-router-dom";

export const FilmCast = () => {const {id} = useParams();
const [ status, setStatus] = useState("Status.IDLE"); 
const [ cast, setCast] = useState (null)
useEffect(() => {
    async function fetchData() {
   try {
       const trendUrl =
       `${BASE_URL}movie/${id}/credits?api_key=${keyApi}`;
      //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
     const cast = await fetchFilm(trendUrl);
     
     setCast(cast.cast)
     console.log("cast", cast)
     setStatus(Status.RESOLVED)
   }
     catch (err){setStatus(Status.REJECTED )
       toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
     position: 'top-center'}, ) }
     
 }
 fetchData()},[id])
 if (status === 'resolved'){ 
   

  return (
    <main>
      
      <div>
     <ul> {cast.map((actor) => (
        <li key={actor.credit_id  }>
            <img src={'https://www.themoviedb.org/t/p/w300'+actor.profile_path} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>Character {actor.character}</p>
        </li>
      ))}</ul>
    
   
      </div>
     
   
    </main>
  );}

}

