import React from "react";
import { useGlobalContext } from "./1.Context";
import { NavLink } from "react-router-dom";

const AllMovies = () => {
  const { movie ,load} = useGlobalContext();
  // console.log(movie);
  if (load) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...........</div>
      </div>
    );
  }

  return (
    <div className="movie-page">
      <div className=" container grid grid-4-col">
        {movie.map((item) => {
          ///......movie name ...
          const name = item.Title.substring(0, 15);
          // const {Title}=item
          // const name=Title.substring(0,15)

          return (
            <NavLink to={`/movies/${item.imdbID}`} key={item.imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{item.Title.length >= 15 ? `${name}.....` : name}</h2>
                  <img src={item.Poster} alt={item.imdbID}></img>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default AllMovies;
