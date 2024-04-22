import { HiEllipsisHorizontal, HiOutlineUserCircle } from "react-icons/hi2";
import { StyledUser, StyledUsername } from "./style";
import { useAuth } from "../../context/auth";



interface UserProps {
    setShowLogout:() => void
}

const User = ({setShowLogout}: UserProps ) => {
    const {user} = useAuth();
   
    return <StyledUser>
         
        <HiOutlineUserCircle />
        <StyledUsername>{user}</StyledUsername>
        <HiEllipsisHorizontal onClick={() => setShowLogout()} cursor="pointer" />
       
    </StyledUser>
}

export default User;