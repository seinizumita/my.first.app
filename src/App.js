import { useEffect, useState } from "react";
import React from "react";

import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
//83f5033f

const API_URL ='http://www.omdbapi.com?apikey=83f5033f'
    

const App = () =>{

    const [movies, setMovies] = useState([]);
    const [serachTerm, setSerachTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');

    }, [])



    return(
        <div className="app">
            <h1>MovieMovie</h1>

            <div className="search">
                <input 
                placeholder="Search for Movie"
                value={serachTerm}
                onChange={(e) => setSerachTerm(e.target.value)}
                onKeyUp={() => searchMovies(serachTerm)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(serachTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ?(
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie = {movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }

            

        </div>
    );
}

export default App;