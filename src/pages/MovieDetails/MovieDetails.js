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
  
  const location = useLocation();
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [ film, setFilm] = useState (null)
    const {id} = useParams();
    const backLinkHref = location.state?.from ?? "/";
    useEffect(() => {setStatus(Status.PENDING )
         async function fetchData() {
        try {
            const trendUrl =
            `${BASE_URL}movie/${id}?api_key=${keyApi}`;           
          const film  = await fetchFilm(trendUrl);         
          setFilm(film)     
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
          <StyledLink  to="cast" state={{from:backLinkHref} }>Read about our cast</StyledLink>
        </FilmAddItem>
        <FilmAddItem>
          <StyledLink  to="reviews" state={{from:backLinkHref}}>Get to know the reviews</StyledLink>
        </FilmAddItem>       
      </FilmAddList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </>
    );}
  };

  export default FilmDetails
 
 