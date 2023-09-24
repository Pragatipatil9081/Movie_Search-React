import React, { createContext, useContext, useEffect, useState } from "react";
//create Context=ContextProvider
//usecontext=Appcontext
const Appcontext = createContext();

const ContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(true);
  const [err, seterr] = useState({ show: "false", msg: "" });
  const [searc, setSearc] = useState("titanic");

  // const url="https://www.omdbapi.com/?apikey=727bbdc1&s=titanic";
  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;
  // const url = "https://www.omdbapi.com/?apikey=27c5e37f&s=titanic";
  useEffect(() => {
    var time = setTimeout(() => {
      fetchdata(`${url}&s=${searc}`);
    },500);
     return ()=>clearTimeout(time)

  }, [searc]);
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // console.log(data.Search);
      if (data.Response === "True") {
        setLoad(false);
        seterr({
          show: false,
          msg: "",
        });
        setMovie(data.Search);
      } else {
        seterr({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const valuePro = {
    load,
    err,
    movie,
    searc,
    setSearc,
  };

  return <Appcontext.Provider value={valuePro}>{children}</Appcontext.Provider>;
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export default ContextProvider;
export { Appcontext, useGlobalContext };
