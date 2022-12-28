import { Link,Outlet,useParams,useLocation } from "react-router-dom";
import  {  useState, useEffect}from 'react';
import toast from 'react-hot-toast'
import { Status, keyApi, fetchFilm,BASE_URL} from 'components/Utils/FetchMovies'; 
import { Loader } from 'components/Loader/Loader';
import { GoBack } from "components/GoBack/GoBack";

export const FilmDetails = () => { 
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [ film, setFilm] = useState (null)
    const {id} = useParams();
    const location = useLocation();
    console.log("Details",location)
  const backLinkHref = location.state?.from ?? "/home";

    useEffect(() => {setStatus(Status.PENDING )
         async function fetchData() {
        try {
            const trendUrl =
            `${BASE_URL}movie/${id}?api_key=${keyApi}`;
           
          const film  = await fetchFilm(trendUrl);
          
          setFilm(film)
          console.log("film", film )
          setStatus(Status.RESOLVED)
        }
          catch (err){setStatus(Status.REJECTED )
            toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
          position: 'top-center'}, ) }
          
      }
      fetchData()},[id])
      if(status==="pending"){return <Loader/>}
      if (status === 'resolved'){ 
      const genres =film.genres.map((genre)=>genre.name).join(', ')

    return (
      <main>
         <GoBack to={backLinkHref}>Back to list</GoBack>
        <div>
        <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title}/>
        <h2>{film.original_title}</h2>
 <p>Overview {film.overview}</p>
  <p>User Score: {film.popularity}</p>
  <p>Genres: {genres}</p>
        </div>
        <p>Additional Information</p>
        <ul>
        <li>
          <Link to="cast">Read about our cast</Link>

        </li>
        <li>
          <Link to="reviews">Get to know the reviews</Link>
        </li>
        
      </ul>
      <Outlet />
      </main>
    );}
  };
  //https://api.themoviedb.org/3/movie/76600?api_key=894ef72300682f1db325dae2afe3e7e2
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //<img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title}/>
  //https://api.themoviedb.org/3/movie/991833?api_key=894ef72300682f1db325dae2afe3e7e2
  //{film.genres.map((genre)=>(<p>Genres: {genre.name}</p>)) }
  //  <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title}/>
//   <h2>{film.original_title}</h2>
//   <p>Overview {film.overview}</p>
//   <p>User Score: {film.popularity}</p>