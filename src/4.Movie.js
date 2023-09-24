import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [load, setLoad] = useState(true);

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;
  useEffect(() => {
    var time = setTimeout(() => {
      fetchdata(`${url}&i=${id}`);
    }, 500);
    return () => clearTimeout(time);
  }, []);
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // console.log(data.Search);
      if (data.Response === "True") {
        setLoad(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (load) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...........</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <img src={movie.Poster} />
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Movie;
