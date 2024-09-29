// src/TopRatedMovies.jsx
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "./api"; // Import your API service

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetchMovies("top rated", "movie");
      setTopRatedMovies(data.Search || []);
    };
    getTopRatedMovies();
  }, []);

  return (
    <div className="mx-auto p-4 container">
      <h2 className="mb-4 font-bold text-3xl">Top Rated Movies</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
