// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import MovieDetail from "./MovieDetail";
import About from "./About";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-20">
          {" "}
          {/* Adjust padding-top if NavBar height changes */}
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/popular" element={<PopularMovies />} />
            <Route path="/top-rated" element={<TopRatedMovies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
