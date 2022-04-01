import React, { useEffect, useState } from "react";
import "./App.css";
import { getMoviesList } from "./api/movies";
import { Movie } from "./types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getMoviesList(0).then((data: Movie[]) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default App;
