import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled.h1`
    color: var(--color-brand-500);
    font-weight: bold;
    letter-spacing: 2px;

    @media screen and (max-width: 500px) {
    
    font-size:2rem;

 }
`
interface LogoProps {
    children: React.ReactNode
}

const Logo = ({children}: LogoProps ) => {
    return <Link to="/">
        <StyledLogo> {children}</StyledLogo>
    </Link>
}

export default Logo;