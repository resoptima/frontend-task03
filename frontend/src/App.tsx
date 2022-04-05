import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Pagination from "./components/pagination";
import { getMoviesList, getMoviesSearchList } from "./api/movies";
import MoviesList from "./components/moviesList";
import { Movie } from "./types";
import { Loading } from "./components/loading";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    getMoviesList(currentPage).then((data: Movie[]) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    updateMoviesList(0, searchValue);
  }, [searchValue]);

  const updateMoviesList = (page: number, value?: string) => {
    setIsLoading(true);
    setCurrentPage(page);

    if (value || searchValue) {
      getMoviesSearchList(page, value || searchValue).then((data: Movie[]) => {
        setMovies(data);
        setIsLoading(false);
        !data && setMovies([]);
      });
    } else {
      getMoviesList(page).then((data: Movie[]) => {
        setMovies(data);
        setIsLoading(false);
      });
    }
  };

  const nextPage = () => {
    // the api is not sending the total number of pages
    if (currentPage <= 83) {
      updateMoviesList(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      updateMoviesList(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const firstPage = () => {
    updateMoviesList(0);
    setCurrentPage(0);
  };

  const searchMovies = (value: string) => {
    value ? setSearchValue(value) : setSearchValue("");
  };

  return (
    <div className="App">
      <Header searchMovies={searchMovies} />
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <MoviesList data={movies} />
          <Pagination
            currentPage={currentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            firstPage={firstPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
