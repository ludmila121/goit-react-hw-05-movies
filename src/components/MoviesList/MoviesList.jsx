import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ol>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ol>
  );
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
