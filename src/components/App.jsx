import { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Cast from "views/Cast";
//import HomePage from "views/HomePage";
//import MoviesDetailsPage from "views/MovieDetailsPage";
//import MoviesPage from "views/MoviesPage";
//import NotFoundView from "views/NotFoundPage";
import Reviews from "views/Reviews";
//import AppBar from "./AppBar/AppBar";
import { GlobalStyle } from "./GlobalStyle";
import Loader from "./Loader/Loader";

const AppBar = lazy(() => import ('./AppBar'));
const HomePage = lazy(() => import('../views/HomePage') );
const MoviesDetailsPage =lazy(() => import ('../views/MovieDetailsPage'));
const MoviesPage = lazy (() => import ('../views/MoviesPage'));
const NotFoundView = lazy(() => import ('../views/NotFoundPage')) ;

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Suspense fallback={<Loader/>}>
      <Routes>
         <Route path="/" element={<AppBar />} >
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies" element={<MoviesDetailsPage />} >
           <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
          </Route >
         </Route >
         <Route path="*" element={<NotFoundView />} />
      </Routes>  
      </Suspense>
    </>  
  );
};
