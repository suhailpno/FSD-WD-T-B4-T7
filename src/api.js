// api.js
const API_KEY = "c9780bdd";
const BASE_URL = "https://www.omdbapi.com/"; // Updated to https

export const fetchMovies = async (searchTerm, type, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?s=${searchTerm}&type=${type}&apikey=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=popular&apikey=${API_KEY}` // Updated to https
  );
  const data = await response.json();
  return data;
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=top_rated&apikey=${API_KEY}` // Updated to https
  );
  const data = await response.json();
  return data;
};
