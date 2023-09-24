import React from "react";
import { Route, Routes } from "react-router-dom";
import ContextProvider from "./1.Context";
import Home from "./3.Home"
import Movie from"./4.Movie"
import "./App.css";


const App = () => {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<Movie />}></Route>
          <Route path="*" element={<h1>Page Not Found...</h1>}></Route>
        </Routes>
      </ContextProvider>
    </div>
  );
};

export default App;
