import React , {  useState, useEffect}from 'react';
import toast from 'react-hot-toast'
import { fetchFilms } from 'components/Utils/FetchMovies';
import { FilmsList } from 'components/FilmList/FilmList';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  };
export const Home = () => {
    const trendUrl =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=894ef72300682f1db325dae2afe3e7e2&page=';
   
  const [ films, setFilms] = useState([]); 
  const [ status, setStatus] = useState("Status.IDLE"); 
//   const [  totalHits, setTotalHits] = useState(0); 
//   const KEY = '894ef72300682f1db325dae2afe3e7e2';

  useEffect(() => {setStatus(Status.PENDING )
    fetchFilms(1,trendUrl).then(films=>{setFilms(films.results)
        setStatus(Status.RESOLVED)})//end then
        .catch( () => 
        {setStatus(Status.REJECTED )
            toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
          position: 'top-center'}, ) 
      })//end catch
}, [])
if (status === 'resolved'){ console.log(films)
    return (
    <main>
   <FilmsList films={films}></FilmsList>
      </main>
       
     
   
  );}
   
  };
//   <ul>{films.map(film => (
//     <li 
//     key={film.id} >{film.original_title} 
//     </li>
//   ))}</ul>
  //https://api.themoviedb.org/3/trending/all/day?api_key=894ef72300682f1db325dae2afe3e7e2

//   function fetchMovies(page) {
//     openSpinnerHome();
//     cleanRender(refs.galleryEl);
  
//     const trendUrl =
//       'https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=';
//     fetchFilms(page, trendUrl).then(data => {
//       try {
//         const destinationEl = refs.galleryEl;
//         filmsTrendRender(data, destinationEl);
  
//         let totalPage = data.total_pages;
//         // ------ V copie
//         if (totalPage > 1) {
//           paginationControl(
//             Number(data.total_pages), // total page
//             Number(data.page), // current page
//             trendUrl, // big part of url);
//             onClickTrend
//           );
//         }
//       } catch {
//         console.log(e);
//       } finally {
//         closeSpinnerHome();
//       }
  
//       // ------ end of V copie
//     });
//   }
  
//   export function trendsControls() {
//     let page = 1;
//     async function mainFunctionCode() {
//       try {
//         await fetchGenreId()
//           .then(genreId => {
//             genreIdArr = genreId.genres;
//           })
//           .catch(error => console.log(error));
  
//         fetchMovies(page);
//       } catch (e) {
//         console.log(e);
//       }
//     }
  
//     mainFunctionCode();
//   }