import { FormEvent, useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button";
import Modal from "../Modal";
import {
  ActionButton,
  SelectFormList,
  StyledForm,
  StyledSelect,
} from "./style";
import { useWatchedContext } from "../../context/watched";



import { addMovie, addPlaylist } from "../../hooks/reducer";

import CreateNewPlaylist from "./createNewPlaylist";
import { IMovie } from "../../types";

interface AddToPlaylistProps {
  movie: IMovie;
  children: JSX.Element;
}

const AddToPlaylist = ({ movie, children }: AddToPlaylistProps) => {
  const [showForm, setShowForm] = useState(false);
  const [playlist, setPlaylist] = useState("playlist-1");
  const [newPlaylist, setNewPlaylist] = useState("");
  const [openName, setOpenName] = useState("");



  const { watchlist, setWatchlist } = useWatchedContext();
  const availablePlaylists = useMemo(() => watchlist.map((item) => item.name), [watchlist]);

  useEffect(() => {
      setPlaylist(availablePlaylists[0] || "playlist-1");
  }, [availablePlaylists])

  let addToPlaylist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   
    e.preventDefault();

    setWatchlist(addMovie(playlist, movie));
    setOpenName("");
  };

  let createPlaylist = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(newPlaylist == "") return;
    e.preventDefault();
    setWatchlist(addPlaylist(newPlaylist));
    setWatchlist(addMovie(newPlaylist, movie));
    setOpenName("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    

    setPlaylist(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
   
  };

  return (
    <Modal openName={openName} setOpenName={setOpenName}>
      <Modal.Open opens="form">{children}</Modal.Open>

      <Modal.Window name="form" portalKey={movie?.imdbID}>
        <StyledForm onSubmit={handleSubmit}>
          {!showForm && availablePlaylists.length > 0 ? (
            <SelectFormList>
              <StyledSelect>
              <label>Select playlist to add new movie</label>
              <select value={playlist} onChange={handleOnChange}>
                {availablePlaylists.map((item, id) => {
                  return (
                    <option value={item} key={id}>
                      {item.toUpperCase()}
                    </option>
                  );
                })}
              </select>
              </StyledSelect>
             
            </SelectFormList>
          ) : <CreateNewPlaylist newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} >
            <>
            <Button onClick={createPlaylist}>Create Playlist</Button>
            { availablePlaylists.length > 0 && <Button onClick={(e) => {
                    e.preventDefault();
                    setShowForm(false);
                  }}>Choose from playlists</Button>}
            </>
           
          </CreateNewPlaylist>
          
          }
          <ActionButton>
            {!showForm && availablePlaylists.length > 0 && (
              <>
                <Button onClick={addToPlaylist}>Add to Playlist</Button>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm(true);
                  }}
                >
                  Create Playlist
                </Button>
              </>
            )}
          </ActionButton>
        </StyledForm>
      </Modal.Window>
    </Modal>
  );
};

export default AddToPlaylist;
