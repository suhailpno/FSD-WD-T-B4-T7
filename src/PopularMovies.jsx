// src/PopularMovies.jsx
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "./api"; // Import your API service

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchMovies("popular", "movie");
      setPopularMovies(data.Search || []);
    };
    getPopularMovies();
  }, []);

  return (
    <div className="mx-auto p-4 container">
      <h2 className="mb-4 font-bold text-3xl">Popular Movies</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
