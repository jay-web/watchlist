import styled from "styled-components";

import { Logo } from "../SideBar/style";
import { HiOutlineUserCircle } from "react-icons/hi2";

const StyleTopBar = styled.div`
    display: flex;
    padding:1rem;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 500px) {
   
        display:none;
        
    }
`

const TopBar = () => {
    return <StyleTopBar>
    <Logo>Watchlists</Logo>
    <HiOutlineUserCircle size="3rem" />
    </StyleTopBar>
}

export default TopBar;