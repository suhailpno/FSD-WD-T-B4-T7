// src/About.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section
        className="relative flex justify-center items-center h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Content */}
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-4 font-extrabold text-4xl sm:text-6xl">
            About Movie Search App
          </h1>
          <p className="text-lg sm:text-2xl">
            Your gateway to explore and discover the world of movies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="mb-4 font-semibold text-3xl">
            Welcome to Movie Search App
          </h2>
          <p className="text-lg leading-relaxed">
            Movie Search App is a comprehensive platform designed to help you
            find, explore, and manage information about your favorite movies and
            series. Whether you're a casual viewer or a hardcore cinephile, our
            app provides you with all the tools you need to dive deep into the
            cinematic universe.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="mb-6 font-semibold text-3xl">Features</h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">
                  Comprehensive Search
                </h3>
                <p>
                  Utilize the powerful OMDB API to search for movies by title,
                  genre, or keyword, ensuring you find exactly what you're
                  looking for.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">
                  Detailed Information
                </h3>
                <p>
                  Access in-depth details about each movie, including plot
                  summaries, cast lists, ratings, and more to enrich your
                  viewing experience.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">
                  Favorites Management
                </h3>
                <p>
                  Create and manage a personalized list of favorite movies,
                  making it easy to keep track of what you want to watch next.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Used Section */}
        <div className="mb-12">
          <h2 className="mb-6 font-semibold text-3xl">Technologies Used</h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">React</h3>
                <p>
                  Built with React, leveraging its component-based architecture
                  for a dynamic and responsive user interface.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">Tailwind CSS</h3>
                <p>
                  Styled using Tailwind CSS, allowing for rapid UI development
                  with utility-first classes and responsive design.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="mt-1 mr-4 text-3xl text-blue-500" />
              <div>
                <h3 className="mb-2 font-semibold text-xl">OMDB API</h3>
                <p>
                  Integrated with the OMDB API to fetch real-time movie data,
                  ensuring accurate and up-to-date information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-12">
          <h2 className="mb-6 font-semibold text-3xl">Getting Started</h2>
          <p className="mb-4 text-lg">
            Follow these simple steps to set up and run Movie Search App locally
            on your machine.
          </p>
          <ol className="space-y-2 text-lg list-decimal list-inside">
            <li>
              <span className="font-semibold">Clone the Repository:</span> Use
              the following command to clone the repository to your local
              machine.
              <pre className="bg-gray-800 mt-2 p-2 rounded-md overflow-x-auto">
                git clone https://github.com/suhailpno/FSD-WD-T-B4-T7.git
              </pre>
            </li>
            <li>
              <span className="font-semibold">Install Dependencies:</span>{" "}
              Navigate to the project directory and install the necessary
              dependencies.
              <pre className="bg-gray-800 mt-2 p-2 rounded-md overflow-x-auto">
                npm install
              </pre>
            </li>
            <li>
              <span className="font-semibold">
                Start the Development Server:
              </span>{" "}
              Launch the development server to run the application locally.
              <pre className="bg-gray-800 mt-2 p-2 rounded-md overflow-x-auto">
                npm run dev
              </pre>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default About;
