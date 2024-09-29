import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchMovieDetail } from "./api"; // Import the API function
import { AiFillStar } from "react-icons/ai"; // Star icon from react-icons

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetail = async () => {
      const data = await fetchMovieDetail(id);
      setMovie(data);
      setLoading(false);
    };
    getMovieDetail();
  }, [id]);

  if (loading) return <div className="text-center text-white">Loading...</div>;

  const handleBack = () => {
    const lastSearchQuery = localStorage.getItem("lastSearchQuery"); // Get the last search query
    if (lastSearchQuery) {
      navigate(`/search?query=${encodeURIComponent(lastSearchQuery)}`); // Navigate to the search results page
    } else {
      navigate("/"); // Fallback to home if no query is available
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div
        className="relative flex flex-col justify-center h-screen"
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60"></div>
        <div className="relative flex flex-col justify-center p-6 lg:p-10 h-full text-white">
          <div className="flex items-center">
            {/* Poster Image with Shadow and Round Edges */}
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="shadow-2xl rounded-lg w-56 h-auto transform transition duration-300 hover:scale-105"
            />
            <div className="ml-6">
              <h1 className="drop-shadow-lg mb-4 font-extrabold text-6xl">
                {movie.Title}
              </h1>
              <div className="flex items-center mb-4 font-medium text-lg">
                <p className="mr-4">{movie.Released}</p>
                <span className="mx-2 text-gray-400">|</span>
                <p>{movie.Genre}</p>
                <span className="mx-2 text-gray-400">|</span>
                <p>{movie.Runtime}</p>
              </div>

              {/* Plot */}
              <p className="drop-shadow-lg mb-6 text-lg">{movie.Plot}</p>

              {/* Ratings Section */}
              <div className="flex space-x-4 mb-4">
                {movie.Ratings.map((rating) => (
                  <div
                    key={rating.Source}
                    className="flex items-center bg-gray-800 shadow-lg px-4 py-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
                  >
                    <AiFillStar className="mr-2 text-xl text-yellow-500" />
                    <p className="text-gray-300">
                      <span className="font-bold">{rating.Source}:</span>{" "}
                      {rating.Value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Director and Writer Section */}
              <div className="mt-6">
                <p className="mb-1 text-gray-400 text-lg">
                  <span className="font-bold">Director:</span> {movie.Director}
                </p>
                <p className="mb-1 text-gray-400 text-lg">
                  <span className="font-bold">Writer:</span> {movie.Writer}
                </p>
              </div>

              {/* Additional Movie Info */}
              <div className="mt-6">
                <p className="mb-1 text-gray-400 text-lg">
                  <span className="font-bold">Country:</span> Sweden, Finland,
                  Denmark
                </p>
                <p className="mb-1 text-gray-400 text-lg">
                  <span className="font-bold">Language:</span> Swedish, Finnish,
                  Esperanto
                </p>
                <p className="mb-1 text-gray-400 text-lg">
                  <span className="font-bold">Awards:</span> 1 win
                </p>
              </div>

              {/* Enhanced Back to Movies Button */}
              <button
                onClick={handleBack} // Use the handleBack function
                className="inline-block bg-red-600 hover:bg-red-700 shadow-lg mt-6 px-6 py-3 rounded-full font-bold text-white transform transition duration-300 hover:scale-105"
              >
                Back to Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
