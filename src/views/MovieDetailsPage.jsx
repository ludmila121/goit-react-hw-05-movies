import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchDetailsFilm } from "services/api";
import { MovieCard } from "./MovieDetailsPage.styled";

export default function MoviesDetailsPage() {
    const {movieId}= useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=> {
        (async function detailsFilm() {
            try {
                const data = await fetchDetailsFilm(movieId);
                setMovie(data);
            }catch (error){
                navigate('/');
            }
        })();
    }, [movieId, navigate] );

    function goBack(){
        navigate(location?.state?.from ?? '/');
    }
    return(
        <>
        <button type="button" onClick={goBack}>
            Go back
        </button>
        {movie && (
            <MovieCard>
                <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}/>
                <div>
                    <h2>{movie.title}</h2>
                    <p>User score: {movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
                </div>
            </MovieCard>
        )}
        <hr/>
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to="cast" state= {{from: location?.state?.from}}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location?.state?.from}}>
                        Reviews
                    </Link>
                </li>
            </ul>
        </div>
        <hr/>
        <Outlet/>
        </>
    );
};