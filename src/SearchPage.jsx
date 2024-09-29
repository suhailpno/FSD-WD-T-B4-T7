import React, { useState, useEffect } from "react";
import { fetchMovies, fetchPopularMovies, fetchTopRatedMovies } from "./api";
import MovieCard from "./MovieCard";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const lastSearchTerm = searchParams.get("search") || "";

  useEffect(() => {
    const loadInitialContent = async () => {
      try {
        const [popularData, topRatedData] = await Promise.all([
          fetchPopularMovies(),
          fetchTopRatedMovies(),
        ]);

        if (popularData.Response === "True") {
          setPopularMovies(popularData.Search);
        } else {
          setError("Failed to fetch popular movies.");
        }

        if (topRatedData.Response === "True") {
          setTopRatedMovies(topRatedData.Search);
        } else {
          setError("Failed to fetch top rated movies.");
        }
      } catch (err) {
        setError("An error occurred while fetching initial content.");
      }
    };

    loadInitialContent();

    const savedSearchTerm = lastSearchTerm || ""; // Removed localStorage usage
    setSearchTerm(savedSearchTerm);
    if (savedSearchTerm) {
      setIsSearchActive(true);
      handleSearch(savedSearchTerm);
    }
  }, [lastSearchTerm]);

  const handleSearch = async (term) => {
    if (term.trim()) {
      setLoading(true);
      setSearchTerm(term);
      setSearchParams({ search: term });
      setIsSearchActive(true);
      try {
        const data = await fetchMovies(term, type, page);
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a search term.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleNextPage = async () => {
    const nextPage = page + 1;
    try {
      const data = await fetchMovies(searchTerm, type, nextPage);
      if (data.Response === "True") {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setPage(nextPage);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("An error occurred while fetching more movies.");
    }
  };

  const featuredMovies = popularMovies.slice(0, 5);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-96"
        >
          {featuredMovies.map((movie) => (
            <SwiperSlide key={movie.imdbID}>
              <img
                className="brightness-50 w-full h-96 object-cover"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/1920x600.png?text=Hero+Image"
                }
                alt={movie.Title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                <h1 className="drop-shadow-lg mb-4 font-extrabold text-5xl md:text-6xl">
                  {movie.Title}
                </h1>
                <p className="drop-shadow-lg mb-8 text-lg md:text-2xl">
                  {movie.Plot ||
                    "Discover and explore your favorite movies and series"}
                </p>
                <Link to={`/movie/${movie.imdbID}`}>
                  <button className="flex items-center bg-red-600 hover:bg-red-700 shadow-lg px-6 py-3 rounded-full text-white transition duration-300">
                    <FaSearch className="mr-2" />
                    Explore Now
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto px-6 py-12 container">
        <form
          onSubmit={handleSubmit}
          className="flex md:flex-row flex-col justify-center items-center mb-12"
        >
          <div className="relative w-full md:w-2/3 lg:w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search movies or series..."
              className="border-2 border-gray-600 bg-gray-800 shadow-lg py-3 pr-12 pl-10 hover:border-red-500 focus:border-red-600 rounded-full focus:ring-2 focus:ring-red-600 w-full text-white focus:outline-none transition duration-300"
              aria-label="Search for movies"
            />
            <FaSearch className="top-1/2 left-3 absolute text-gray-400 transform -translate-y-1/2" />
          </div>

          <button
            type="submit"
            className={`flex items-center bg-red-600 hover:bg-red-700 shadow-lg mt-4 md:mt-0 md:ml-4 px-6 py-3 rounded-full text-white transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
            aria-label="Search"
          >
            {loading ? (
              <div className="loader">🔄</div>
            ) : (
              <>
                <FaSearch className="mr-2" /> Search
              </>
            )}
          </button>
        </form>

        {error && <p className="mb-6 text-center text-red-500">{error}</p>}

        {isSearchActive ? (
          <>
            <h2 className="mb-8 font-semibold text-3xl text-center">
              Search Results
            </h2>
            {movies.length > 0 ? (
              <>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {movies.map((movie) => (
                    <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                      <MovieCard
                        movie={movie}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleNextPage}
                    className="bg-red-600 hover:bg-red-700 shadow-lg px-6 py-3 rounded-full text-white transition duration-300"
                  >
                    Load More
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center">
                No results found for "{searchTerm}".
              </p>
            )}
          </>
        ) : (
          <p className="text-center">
            Start searching for movies by entering a keyword above.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
