import { Suspense } from 'react';
import { Outlet,useParams,useLocation } from "react-router-dom";
import  {  useState, useEffect}from 'react';
import toast from 'react-hot-toast'
import { Status, keyApi, fetchFilm,BASE_URL} from 'components/Utils/FetchMovies'; 
import { Loader } from 'components/Loader/Loader';
import { GoBack } from "components/GoBack/GoBack";
import { FilmBox,FilmInfoDiv,FilmInfoSpan, FilmInfoTitle, FilmInfoItem,FilmAddTitle,FilmAddItem,
  StyledLink, FilmAddList} from './MovieDetail.styled';

export const FilmDetails = () => { 
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [ film, setFilm] = useState (null)
    const {id} = useParams();
    const location = useLocation();
    console.log("Details",location)
  const backLinkHref = location.state?.from ?? "/";

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
      <>
         <GoBack to={backLinkHref}>Back to list</GoBack>
        <FilmBox>
        <img src={'https://www.themoviedb.org/t/p/w400'+film.poster_path} alt={film.original_title}/>
        <FilmInfoDiv>     
           <FilmInfoTitle>{film.original_title}</FilmInfoTitle>
           <ul>
            <FilmInfoItem> <FilmInfoSpan>Overview:</FilmInfoSpan><p>{film.overview}</p></FilmInfoItem>
            <FilmInfoItem><FilmInfoSpan>User Score:</FilmInfoSpan> <p>{film.popularity}</p></FilmInfoItem>
            <FilmInfoItem> <FilmInfoSpan>Genres:</FilmInfoSpan><p> {genres}</p></FilmInfoItem>
           </ul>
  </FilmInfoDiv>
</FilmBox>
        <FilmAddTitle>Additional Information</FilmAddTitle>
        <FilmAddList>
        <FilmAddItem>
          <StyledLink  to="cast">Read about our cast</StyledLink>

        </FilmAddItem>
        <FilmAddItem>
          <StyledLink  to="reviews">Get to know the reviews</StyledLink>
        </FilmAddItem>
        
      </FilmAddList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </>
    );}
  };

  export default FilmDetails; 
  //https://api.themoviedb.org/3/movie/76600?api_key=894ef72300682f1db325dae2afe3e7e2
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  //<img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title}/>
  //https://api.themoviedb.org/3/movie/991833?api_key=894ef72300682f1db325dae2afe3e7e2
  //{film.genres.map((genre)=>(<p>Genres: {genre.name}</p>)) }
  //  <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title}/>
//   <h2>{film.original_title}</h2>
//   <p>Overview {film.overview}</p>
//   <p>User Score: {film.popularity}</p>