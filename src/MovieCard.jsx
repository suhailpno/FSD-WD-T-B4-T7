// src/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative bg-gray-800 shadow-lg hover:shadow-xl rounded-lg w-48 h-72 transform transition-transform overflow-hidden group hover:scale-105">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450.png?text=No+Image"
        }
        alt={movie.Title}
        className="group-hover:opacity-90 w-full h-3/5 transition-opacity duration-300 object-cover"
      />
      <div className="flex flex-col justify-between p-4 h-2/5">
        <h3 className="mb-1 line-clamp-2 font-bold text-lg">{movie.Title}</h3>
        <p className="text-gray-400 text-sm">{movie.Year}</p>
      </div>
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-semibold text-lg text-white">View Details</span>
      </div>
    </div>
  );
};

export default MovieCard;
