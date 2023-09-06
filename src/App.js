import React from 'react';
import {useState,useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL='http://www.omdbapi.com?apikey=8c70dd9f';

const movie1 = {

    
        "Title": "Italian Spiderman",
        "Year":"2007",
        "imdbID":"tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    
}
const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Spiderman');

    },[])
    return (
        <div className = "app">
            <h1>MovieLand</h1>

            <div className = "search">
                <input
                placeholder="Search for Movies"
                value  ={searchTerm}
                onChange = {(e) =>setSearchTerm(e.target.value)}
                />
                <img
                src = {SearchIcon}
                alt = "search"
                onClick = {() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length >0
                ?(
                    <div className = "container">
                        {movies.map((movie)=>(
                            <MovieCard movie = {movie}/>
                        )
                        )}
                   </div>

                ):(
                    <div className ="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        
        </div>
    );
}

export default App;