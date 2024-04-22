import { StyledMoviesList } from "./style";
import List from "../List";

import { useMoviesContext } from "../../context/movies";
import ErrorMessage from "../../ui/error";

import Loader from "../../ui/loader";
import { Link, Outlet } from "react-router-dom";
import Movie from "../Movie";

const MoviesList = () => {
  const { movies, error, isLoading } = useMoviesContext();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  if (!movies) return null;

  return (
    <StyledMoviesList>
      <List
        movies={movies}
        render={(movie) => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/${movie.imdbID}`} key={movie.imdbID}>
                <Movie movie={movie} showCheck={false} showAdd={true} showDelete={false} />
              </Link>
            </li>
          );
        }}
      />
      <Outlet />
    </StyledMoviesList>
  );
};

export default MoviesList;
