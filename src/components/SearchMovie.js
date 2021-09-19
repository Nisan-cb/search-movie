import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovie(){

    const [query, setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    const search = async (e,val ='')=>{
        e.preventDefault();
        const query = val;

        console.log(query);
        //  const query = "Jurassic Park";
        // setQuery(val);

        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=396b59064018c338a1233f5302dd7d8f&language=en-US&query=${query}&nclude_adualt=false`
    
        try{
                const res = await fetch(url);
                const data = await res.json();
                if(data.results){
                    setMovies(data.results);
                console.log(data.results.length);
                }
                else
                    setMovies([]);
                
        

        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
            <form className="form" onSubmit={e=>search(e,query)}>
                <label className="label" htmlFor="query">Movie name</label>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="movie name"
                    value={query}  
                    onChange={async (e) =>{
                        search(e,e.target.value);
                        setQuery(e.target.value);
                        // search2(e);


                    }}  
                />

                <button type="submit">Search</button>
            </form>

            <div className="card-list">
                {movies.filter(movie =>movie.poster_path).map((movie, i)=>(
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}

            </div>
        </>
    );
}

export default SearchMovie;