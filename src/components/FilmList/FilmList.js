import { Link  } from "react-router-dom";
import { Container, CardWrapper, FilmName } from "./FilmList.styled";

export const FilmsList = ({ location, films }) => {
  
  
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }} > 
          {/* <Link to={`/movies/${film.id}`}  > */}
            <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title} />
            <FilmName>{film.original_title}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
// let imgSrc = 'https://www.themoviedb.org/t/p/w500' + poster_path;
/* <ul>
{trendingFilms?.map(film => (
  <style.item key={film.id}>
    <Link to={`/movies/${film.id}`}>{film.title}</Link>
  </style.item>
))}
</ul> */
