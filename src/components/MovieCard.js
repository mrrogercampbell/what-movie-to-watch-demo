import React from 'react'
import Thumb from './Thumb'

const MovieCard = ({ Poster, Title, Plot, Released, imdbRating }) => {
    return (
        <div className="movie">
            <img src={Poster} alt={Title} />
            <h1>{Title}</h1>
            <p>{Plot}</p>
            <div className='ratings-container'>
                <div className='ratings-text'>
                    <p>Released Date: {Released}</p>
                    <p>Rating: {imdbRating}/10</p>
                </div>
                <Thumb imdbRating={imdbRating} />
            </div>
        </div>
    );
};

export default MovieCard;