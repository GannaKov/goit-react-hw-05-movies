import  { useState, useEffect}from 'react';
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast'
import { Status, keyApi, fetchFilm,BASE_URL} from 'components/Utils/FetchMovies'; 
import { Loader } from 'components/Loader/Loader';
import { ReviewsItem, ReviesList,ReviewAuthor,ReviewDate } from './FilmReviews.styled';

export const FilmReviews = () => {
    const {id} = useParams();
    const [ status, setStatus] = useState("Status.IDLE"); 
    const [reviews, setReviews] = useState (null)
useEffect(() => {setStatus(Status.PENDING )
    async function fetchData() {
   try {
       const trendUrl =
       `${BASE_URL}movie/${id}/reviews?api_key=${keyApi}`;
      
     const data = await fetchFilm(trendUrl);
     
     setReviews(data.results)
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
    {reviews.length?(
    <ReviesList> {reviews.map(({id,author,created_at,content}) => (
    <ReviewsItem key={id  }>
        <ReviewAuthor>{author}</ReviewAuthor>
       <ReviewDate >{ new Date(created_at).toLocaleString() }
    </ReviewDate>
        <p>{content}</p>
    </ReviewsItem>
  ))}</ReviesList>
):(<p>There are no reviews yet</p>)} 
  </>)
}
}
  export default FilmReviews
