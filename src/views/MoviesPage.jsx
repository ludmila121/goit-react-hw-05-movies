import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

export default function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    async function fetchMovies() {
      try {
        const response = await fetchSearchMovies(searchParams);
        setMovies(response);
        if (!response.length) {
          alert('Nothing found for your request');
        }
      } catch (error) {
        console.error();
      }
    }
    fetchMovies();
  }, [searchParams]);

  const handlSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchForm onSubmit={handlSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
