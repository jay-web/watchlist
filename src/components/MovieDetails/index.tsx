import { useEffect } from "react";

import { useParams } from "react-router-dom";
import Loader from "../../ui/loader";
import ErrorMessage from "../../ui/error";
import {
  Director,
  StyledMovieDetails,
  StyledMovieInfo,
  Title,
  Genre,
  Plot,
  Released,
  ButtonToAdd,
  Label,
  IMDBRating,
  Actors,
} from "./style";
import Button from "../../ui/Button";

import { useFetchMovieById } from "../../hooks/useFetchMovie";
import { useWatchedContext } from "../../context/watched";

import AddToPlaylist from "../Playlist/addToPlaylist";
import DeleteFromPlaylist from "../Playlist/deleteFromPlaylist";

const placeholderImage =
  "https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBwb3N0ZXIlMjBwbGFjZWhvbGRlcnxlbnwwfHwwfHx8MA%3D%3D";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, error, isLoading } = useFetchMovieById(id!);
  const { watchlist } = useWatchedContext();

  let inWatchedList = watchlist.find((playlist) =>
    playlist.movies.find((item) => item.imdbID === id)
  )
    ? true
    : false;
  // let isWatched = movie?.watchedByYou ? true : false;

  useEffect(() => {
    if (movie?.Title) return;

    document.title = `Movie | ${movie?.Title}`;

    return () => {
      document.title = "Watchlists";
    };
  }, [movie?.Title]);

  if (movie === null) return null;

  let image = movie?.Poster !== "N/A" ? movie?.Poster : placeholderImage;

  return (
    <StyledMovieDetails>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {!isLoading && !error && movie && (
        <>
          <img src={image} alt="" />
          <StyledMovieInfo>
            <Title>
              <Label>Title</Label>: {movie.Title}
            </Title>
            <Actors>
              <Label>Actors</Label>: {movie.Actors}
            </Actors>
            <Director>
              <Label>Director</Label>: {movie.Director}
            </Director>
            <Genre>
              <Label>Genre</Label>: {movie.Genre}
            </Genre>
            <Plot>
              <Label>Plot</Label>: {movie.Plot}
            </Plot>
            <Released>
              <Label>Release</Label>: {movie.Released}
            </Released>

            <ButtonToAdd>
              <AddToPlaylist movie={movie}>
                <Button disabled={inWatchedList}>
                  {inWatchedList ? "Added in Watchlist" : "Add to watchlist"}
                </Button>
              </AddToPlaylist>
              {inWatchedList && (
                <DeleteFromPlaylist movie={movie} >
                  <Button>Delete from playlist</Button>
                </DeleteFromPlaylist>
              )}
            </ButtonToAdd>

            <IMDBRating>
              <Label>IMDb Rating</Label>⭐ {movie.imdbRating}
            </IMDBRating>
          </StyledMovieInfo>
        </>
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetails;
