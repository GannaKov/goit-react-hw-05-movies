import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import {
  Status,
  keyApi,
  fetchFilms,
  BASE_URL,
} from 'components/Utils/FetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { FilmsList } from 'components/FilmList/FilmList';

export const Movies = () => {
  const location = useLocation();
  const [status, setStatus] = useState('Status.IDLE');
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFilm = searchParams.get('query');

  const handleFormSubmit = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };
  useEffect(() => {
    if (queryFilm) {
      setStatus(Status.PENDING);
      const searchUrl = `${BASE_URL}search/movie?api_key=${keyApi}&query=${queryFilm}&page=`;

      async function fetchData() {
        try {
          const films = await fetchFilms(1, searchUrl);
          if (films.results.length === 0) {
            toast.error('We did not find anything. Try again with a new word!');
            setStatus(Status.IDLE);
            setSearchParams({});
            return;
          }
          setFilms(films.results);
          setStatus(Status.RESOLVED);
        } catch (error) {
          setStatus(Status.REJECTED);
          toast.error('Ups... Something is wrong. Try again!', {
            duration: 4000,
            position: 'top-center',
          });
        }
      }
      fetchData();
    }
  }, [queryFilm, setSearchParams]);
  if (status === 'pending') {
    return <Loader />;
  }

  return (
    <>
      <Searchbar onSubm={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' ? (
        <FilmsList location={location} films={films}></FilmsList>
      ) : null}
    </>
  );
};
export default Movies;
