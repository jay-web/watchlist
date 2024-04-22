import { InfoSection, StyledCard, Title, Year } from "./style";

import { FaCheck } from "react-icons/fa";
import { SVGSpan } from "../../ui/svgSpan";

import { useWatchedContext } from "../../context/watched";
import { markedWatched } from "../../hooks/reducer";

import { BsBookmarkPlusFill } from "react-icons/bs";

import AddToPlaylist from "../Playlist/addToPlaylist";
import { MdDeleteForever } from "react-icons/md";

import DeleteFromPlaylist from "../Playlist/deleteFromPlaylist";
import { IMovie } from "../../types";

const placeholderImage =
  "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmR8ZW58MHx8MHx8fDA%3D";

interface MovieProps {
  movie: IMovie;
  showCheck: boolean;
  showAdd: boolean;
  showDelete: boolean;
}

const Movie = ({
  movie,
  showCheck = true,
  showAdd = true,
  showDelete = false,
}: MovieProps) => {
  const { setWatchlist } = useWatchedContext();

  // const availablePlaylists = watchlist.map((item) => item.name);

  let image = movie.Poster !== "N/A" ? movie.Poster : placeholderImage;
  let isWatched = movie.watchedByYou ? true : false;

  const handleMarkedWatched = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    console.log("Marked watched called");
    e.preventDefault();
    setWatchlist(markedWatched(movie));
  };

  return (
    <StyledCard>
      {showAdd && (
        <AddToPlaylist movie={movie}>
          <SVGSpan $direction="left">
            <BsBookmarkPlusFill />
          </SVGSpan>
        </AddToPlaylist>
      )}
      {showCheck && (
        <SVGSpan $isWatched={isWatched} $direction="right">
          <FaCheck onClick={(e) => handleMarkedWatched(e)} />
        </SVGSpan>
      )}

      <img src={image} />

      <InfoSection>
        <Title>{movie.Title}</Title>
        <Year>({movie.Year})</Year>
        {showDelete && (
          <DeleteFromPlaylist movie={movie}>
            <SVGSpan $isWatched={isWatched} $direction="bottomRight">
              <MdDeleteForever />
            </SVGSpan>
          </DeleteFromPlaylist>
        )}
      </InfoSection>
    </StyledCard>
  );
};

export default Movie;
