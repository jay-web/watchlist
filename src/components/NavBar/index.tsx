import { HiOutlineHome } from "react-icons/hi2"
import { NavList, StyledNavLink, StyledDynamicNav, StyledDynamicLink } from "./style"

import {  useState } from "react"
import { deletePlaylist } from "../../hooks/reducer"

import { FaPlay } from "react-icons/fa"
import { useWatchedContext } from "../../context/watched"
import { MdDeleteForever } from "react-icons/md"


const NavBar = () => {
  const{ watchlist, setWatchlist }  = useWatchedContext();
  const [_, setShowPlaylist ] = useState(false);



  const handleDelete = (name:string) => {
   
    setWatchlist(deletePlaylist(name))
  }
  
    return <nav className="nav">
      <NavList>
        <li>
          <StyledNavLink to="/" onClick={() => setShowPlaylist(false)}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/list/all" onClick={() => setShowPlaylist(true)}>
            <span>My Lists</span>
          </StyledNavLink>
        </li>
       { watchlist.map((item) => {
               return <StyledDynamicNav key={item.name}>
                <li>
                <StyledDynamicLink to={`/list/${item.name}`}>
                <FaPlay /> {item.name}</StyledDynamicLink>
                <MdDeleteForever onClick={() => handleDelete(item.name)} />
                </li>
                
               </StyledDynamicNav>
          })}
        
       
        
      </NavList>
    </nav>
  }

  export default NavBar;