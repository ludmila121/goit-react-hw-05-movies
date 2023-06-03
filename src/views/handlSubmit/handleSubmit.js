import { useSearchParams } from 'react-router-dom';
import SearchMovies from '/src/views/MoviesPage.jsx';
import { useState } from 'react';
SearchMovies(() => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

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
});

export default handlSubmit;
