import styled from "styled-components";

const StyledListView = styled.div`
   
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;

    
    @media screen and (max-width: 615px)  {
        align-items: center;
    }

    @media screen and (max-width: 1180px) and (min-width: 781px){
        align-items: space-between;
        justify-content: space-between;

    }
    
   
`



export const Styledh3 = styled.h3`
   
    font-weight: 600;
`

export const StyledInstruction = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem
`




export default StyledListView;