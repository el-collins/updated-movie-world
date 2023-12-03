import React from "react";

const MovieCard = ({ movie }) => {
  const movieURL = `https://www.imdb.com/title/${movie.imdbID}`;


  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <a href={movieURL} target="_blank" rel="noopener noreferrer" className="movie-card">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        /> </a>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
