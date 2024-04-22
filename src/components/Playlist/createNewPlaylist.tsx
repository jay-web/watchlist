import { useEffect, useRef } from "react";
import { ActionButton, CreateNewList } from "./style";

interface CreatePlayListProps {
    children: JSX.Element,
    setNewPlaylist: React.Dispatch<React.SetStateAction<string>>,
    newPlaylist:string
}
const CreateNewPlaylist = ({ children, setNewPlaylist, newPlaylist }: CreatePlayListProps) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {

        if(ref.current){
            ref.current.focus();
        }

    }, []);
    return (
        <CreateNewList>
        
          <input
            placeholder="Enter playlist name"
            ref={ref}
            value={newPlaylist}
            onChange={(e) => setNewPlaylist(e.target.value)}
            required
          />
            <ActionButton>

        {children}
          </ActionButton>
       
        </CreateNewList>
      )
}

export default CreateNewPlaylist;