import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovie(){

    const [query, setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    const search = async (e)=>{
        e.preventDefault();


        // const query = "Jurassic Park"; 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=396b59064018c338a1233f5302dd7d8f&language=en-US&query=${query}&nclude_adualt=false`
    
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
        
    
    }

    return(
        <>
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query">Movie name</label>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="movie name"
                    value={query}  
                    onChange={e=>setQuery(e.target.value)}  
                />

                <button type="submit">Search</button>
            </form>

            <div className="card-list">
                {movies.map((movie, i)=>(
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}

            </div>
        </>
    );
}

export default SearchMovie;