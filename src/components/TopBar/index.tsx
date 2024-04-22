
import { HiOutlineUserCircle } from "react-icons/hi2";
import { StyleTopBar, StyledMenu, StyledMenuItems } from "./style";
import { useState } from "react";
import MenuModal from "./menu";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";

import { MdDeleteForever } from "react-icons/md";
import { useWatchedContext } from "../../context/watched";
import { deletePlaylist } from "../../hooks/reducer";
import { useAuth } from "../../context/auth";
import Logo from "../../ui/logo";


const TopBar = () => {
  const [showMenu, setShowMenu] = useState("");
  const { watchlist, setWatchlist } = useWatchedContext();
  const { user, setUser } = useAuth();

  let atIndex = user.split("").findIndex(item => item === "@");
  let username = user.slice(0, atIndex); 

  const handleDelete = (name: string) => {
    setWatchlist(deletePlaylist(name));
  };

  return (
    <StyleTopBar>
      <Logo>Watchlists </Logo>

      <MenuModal openName={showMenu} setOpenName={setShowMenu}>
        <MenuModal.Open opens="menu">
          <HiOutlineUserCircle size="3rem" />
        </MenuModal.Open>
        <MenuModal.Window name="menu" portalKey="menu">
          <StyledMenu>
            <Logo>Watchlists: {username}</Logo>
            <StyledMenuItems>
              <Link to="/list/all" onClick={() => setShowMenu("")}>
                <span>My Playlists</span>
              </Link>
              {watchlist.map((item) => {
                return (
                  <div key={item.name}>
                    <li onClick={() => setShowMenu("")}>
                      <Link to={`/list/${item.name}`} >{item.name}</Link>
                      <MdDeleteForever
                        onClick={() => handleDelete(item.name)}
                      />
                    </li>
                  </div>
                );
              })}
            </StyledMenuItems>
          
            <Button onClick={() => setUser("")} className="logout">Logout</Button>
          
          </StyledMenu>
        </MenuModal.Window>
      </MenuModal>
    </StyleTopBar>
  );
};

export default TopBar;
