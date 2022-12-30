import  {  useState, useEffect}from 'react';
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast'
import { Status, keyApi, fetchFilm,BASE_URL} from 'components/Utils/FetchMovies'; 
import { Loader } from 'components/Loader/Loader';
import { CastList } from './FilmCast.styled';

export const FilmCast = () => {const {id} = useParams();
const [ status, setStatus] = useState("Status.IDLE"); 
const [ cast, setCast] = useState (null)
useEffect(() => {setStatus(Status.PENDING )
    async function fetchData() {
   try {
       const trendUrl =
       `${BASE_URL}movie/${id}/credits?api_key=${keyApi}`;
     const cast = await fetchFilm(trendUrl);     
     setCast(cast.cast)
     setStatus(Status.RESOLVED)
   }
     catch (err){setStatus(Status.REJECTED )
       toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
     position: 'top-center'}, ) }    
 }
 fetchData()},[id])
 if(status==="pending"){return <Loader/>}

 if (status === 'resolved'){ 
  return (
      <>
        {cast.length?(
      <CastList> {cast.map((actor) => (
        <li key={actor.credit_id  }>
            <img src={'https://www.themoviedb.org/t/p/w300'+actor.profile_path} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>Character {actor.character}</p>
        </li>
      ))}
      </CastList>):(<p>There are no Information</p>)}
      </>
  );
}
}
export default FilmCast
