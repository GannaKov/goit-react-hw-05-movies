import PropTypes from 'prop-types';
import { Link  } from "react-router-dom";
import { Container, CardWrapper, FilmName } from "./FilmList.styled";

export const FilmsList = ({ location, films }) => {
  return (
    <Container>
      {films.map((film) => (
        <CardWrapper key={film.id}>
          <Link to={`/movies/${film.id}`} state={{from:location}} > 
            <img src={'https://www.themoviedb.org/t/p/w500'+film.poster_path} alt={film.original_title} />
            <FilmName>{film.original_title}</FilmName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

FilmsList.propTypes = {
  location:PropTypes.objectOf(PropTypes.string),
  films:PropTypes.arrayOf(PropTypes.object).isRequired,
}