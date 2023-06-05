import { useSearchParams } from 'react-router-dom';
import SearchMovies from '/src/views/MoviesPage.jsx';
import { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

SearchMovies(() => {
  const [query, setQuery] = useState('');
  const setSearchParams = useSearchParams();

  const handlChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handlSubmit = e => {
    e.preventDefault();
    const currentQuery = query.trim();
    if (!currentQuery) {
      return alert('Please enter a valid request!');
    }
    setSearchParams({ query: currentQuery });
    setQuery('');
  };
  return (
    <>
      <form onSubmit={handlSubmit}>
        <input type="text" value={query} onChange={handlChange}></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
});

export default SearchMovies;
