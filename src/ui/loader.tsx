import { HashLoader } from "react-spinners";
import styled from "styled-components";

const StyledLoader = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height:100%;
`

const Loader = () => {
    return <StyledLoader>
        <HashLoader color="red" size={100} />
    </StyledLoader>
}

export default Loader;