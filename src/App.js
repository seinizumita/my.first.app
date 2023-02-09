import { useEffect } from "react";
import React from "react";

//83f5033f

const API_URL ='http://www.omdbapi.com?apikey=83f5033f'

    

const App = () =>{

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('The Room');

    }, [])



    return(
        <h1>App</h1>
    );
}

export default App;