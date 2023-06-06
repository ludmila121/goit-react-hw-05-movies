import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchFilms } from 'services/api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchFilms();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
