import { Movie } from "../types";

export const getMoviesList = async (page: number) => {
  const movies: Movie[] = await fetch(
    `http://localhost:8080/movies?_page=${page}&_limit=12`
  ).then((response) => response.json());

  return movies;
};

export const getMoviesSearchList = async (page: number, word: string) => {
  const movies: Movie[] = await fetch(
    `http://localhost:8080/movies?_page=${page}&_limit=12q=${word}`
  ).then((response) => response.json());

  return movies;
};