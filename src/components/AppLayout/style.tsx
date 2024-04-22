import styled from "styled-components";

const StyledAppLayout = styled.div `
    
    display: grid;
    grid-template-columns: .2fr 1fr;
    grid-template-rows: 1fr;
    height: 100vh;


    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;

    }
    
`

export default StyledAppLayout;