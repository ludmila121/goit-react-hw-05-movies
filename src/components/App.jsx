import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from 'views/Cast/Cast';
import Reviews from 'views/Reviews';
import { GlobalStyle } from '../GlobalStyle';
import Loader from './Loader/Loader';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const HomePage = lazy(() => import('../views/HomePage'));
const MoviesDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const NotFoundView = lazy(() => import('../views/NotFoundPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </>
  );
};
