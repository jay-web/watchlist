import { Link, useParams } from "react-router-dom";

import List from "../List";

import { useWatchedContext } from "../../context/watched";
import { useEffect } from "react";
import Movie from "../Movie";
import { IMovie } from "../../types";
import { NoMovie } from "./style";

const Playlist = () => {
  const { playlistname } = useParams();
  const { watchlist, queryInWatchlist } = useWatchedContext();

  useEffect(() => {}, [watchlist]);

  const playlistMovies =
    watchlist.find((item) => item.name == playlistname)?.movies || [];

  const allMoviesInWatchlist: IMovie[] = watchlist.reduce<IMovie[]>(
    (acc, current) => {
      return acc.concat(current.movies);
    },
    []
  );

  const filter = allMoviesInWatchlist.filter((item) => {
    if (item.Title?.toLowerCase().includes(queryInWatchlist.toLowerCase())) {
      return item;
    }
  });

  console.log(allMoviesInWatchlist);

  if (playlistname == "all" && allMoviesInWatchlist.length == 0) {
    return <NoMovie>No movies are in your playlists</NoMovie>;
  }

  return (
    <List
      movies={playlistname != "all" ? playlistMovies : filter}
      showCheck={true}
      render={(movie) => {
        return (
          <li key={movie.imdbID}>
            <Link to={`/${movie.imdbID}`} key={movie.imdbID}>
              <Movie
                movie={movie}
                showCheck={true}
                showAdd={false}
                showDelete={true}
              />
            </Link>
          </li>
        );
      }}
    />
  );
};

export default Playlist;
