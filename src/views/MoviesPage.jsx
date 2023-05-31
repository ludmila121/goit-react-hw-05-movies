import MoviesList from "components/MoviesList";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "services/api";



export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    
    useEffect(() => {
        if (!searchParams.get('query')){
            return;
        }
        (async function fetchMovies(){
            try{
                const response = await fetchSearchMovies(searchParams);
                setMovies(response);
                if (!response.length){
                    alert('Nothing found for your request');
                }
            } catch(error){
                console.error();
            }
        })();
    }, [searchParams]);

    const handlChange = e => {
        setQuery(e.currentTarget.value);
    };

    const handlSubmit = e => {
        e.preventDefault();
        const currentQuery = query.trim();
        if(!currentQuery){
            return alert('Please enter a valid request!');
        }
        setSearchParams({query: currentQuery});
        setQuery('');
    };

    return(
        <>
        <form onSubmit={handlSubmit}>
            <input type="text" value={query} onChange={handlChange}></input>
            <button type="submit">Search</button>
        </form>
         {movies && <MoviesList movies={movies} url={''} location={location} />}
        </>
    );
}