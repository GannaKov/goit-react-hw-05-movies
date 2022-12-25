import { Link } from "react-router-dom";
import { Container, CardWrapper, FilmName } from "./FilmList.styled";

export const FilmsList = ({ films }) => {
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`${film.id}`}>
            <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title} />
            <FilmName>{film.original_title}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
// let imgSrc = 'https://www.themoviedb.org/t/p/w500' + poster_path;