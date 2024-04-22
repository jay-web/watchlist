import { useState } from "react";
import Button from "../../ui/Button";
import Box from "../../ui/box";
import NavBar from "../NavBar";

import User from "../User";
import {  StyledSidebar } from "./style";
import { useAuth } from "../../context/auth";

import { useWatchedContext } from "../../context/watched";
import SearchBar from "../SearchBar";
import Logo from "../../ui/logo";


const SideBar = () => {
  const {setUser } = useAuth();
  const [isLogout, setIsLogout] = useState(false);
  const {queryInWatchlist, setQueryInWatchlist } = useWatchedContext();

  const setShowLogout =() => {
    setIsLogout(!isLogout);
  }

  const handleLogout = () => {
    setUser("");
    setQueryInWatchlist("");

  }

  return (
    <StyledSidebar>
      <Box>
        <Logo>Watchlists</Logo>
        <SearchBar placeholder="search in playlist" query={queryInWatchlist} setQuery={setQueryInWatchlist} navigatePath="/list/all"></SearchBar>
        <NavBar />
      </Box>
      <Box>
        {isLogout && <Button onClick={handleLogout}>Logout</Button>}
        <User setShowLogout={setShowLogout} />
      </Box>
    </StyledSidebar>
  );
};

export default SideBar;
