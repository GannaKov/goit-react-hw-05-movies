import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { Toaster } from 'react-hot-toast';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const FilmDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const FilmReviews = lazy(() =>
  import('../../components/Filmreviews/FilmReviews')
);
const FilmCast = lazy(() => import('../../components/FilmCast/FilmCast'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<FilmDetails />}>
            <Route path="cast" element={<FilmCast />} />
            <Route path="reviews" element={<FilmReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          error: {
            duration: 3000,
            style: {
              border: '1px solid red',
              padding: '16px',

              minWidth: '450px',
            },
          },
        }}
      />
      <GlobalStyle />
    </div>
  );
};
//<Route path="*" element={<Home />} />
// https://api.themoviedb.org/3/movie/550?api_key=894ef72300682f1db325dae2afe3e7e2
//{ <Route path="/" element={<Home />} />
//<Route path="/about" element={<About />} />
//<Route path="/products" element={<Products />} /> }
// export const getProductById = (productId) => {
//   return products.find((product) => product.id === productId);
// };
