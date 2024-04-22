import { StyledHeader } from "./style";

interface HeaderProps {
   children: React.ReactNode
}

const Header = ({ children}: HeaderProps) => {
    return <StyledHeader>
       {children}
    </StyledHeader>
};


export default Header;