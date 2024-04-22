
import Modal from "../Modal";
import { StyleDelete } from "../Movie/style";
import { ActionButton } from "./style";
import { useState } from "react";
import { useWatchedContext } from "../../context/watched";
import { deleteMovie } from "../../hooks/reducer";


import Button from "../../ui/Button";
import { IMovie } from "../../types";

interface DeleteProps {
    movie: IMovie;
    children: JSX.Element
}

const DeleteFromPlaylist = ({ movie, children } :DeleteProps ) => {
    const [openName, setOpenName] = useState("");
    const { setWatchlist } = useWatchedContext();

    const handleDelete = () => {
        
        setWatchlist(deleteMovie(movie.playlist!, movie));
      };


    return  <Modal openName={openName} setOpenName={setOpenName}>
    <Modal.Open opens="confirm">
        {children}
     
    </Modal.Open>
    <Modal.Window name="confirm" portalKey={movie.imdbID}>
      <StyleDelete>
        <p>Are you sure want to delete '{movie.playlist}' playlist ?</p>
      <ActionButton>
      <Button onClick={() => handleDelete()} >Delete Playlist</Button>
       <Button onClick={() => setOpenName("")}>Cancel</Button>
      </ActionButton>
      </StyleDelete>
    
     
    </Modal.Window>
  </Modal>
}

export default DeleteFromPlaylist;