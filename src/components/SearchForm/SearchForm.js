import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handlSubmit = e => {
    e.preventDefault();
    const currentQuery = query.trim();
    if (!currentQuery) {
      return alert('Please enter a valid request!');
    }
    onSubmit({ query });
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
};

export default SearchForm;
