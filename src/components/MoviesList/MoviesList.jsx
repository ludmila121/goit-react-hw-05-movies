import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const MoviesList = () => {
  const movies = useState(null);
  const location = useLocation();

  <ol>
    {movies.map(movie => {
      const { id, title } = movie;
      return (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      );
    })}
  </ol>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default MoviesList;
