import styled from "styled-components";

export const StyledList = styled.ul`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    
    /* flex-direction: row;
    justify-content: left;
     */
    row-gap: 5rem;
    column-gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;

    @media screen and (max-width: 615px)  {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        justify-content: center;
        align-items: center;

    }
    @media screen and (max-width: 780px) and (min-width: 616px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto 1fr;

    }
  
    @media screen and (max-width: 1180px) and (min-width: 781px){
        grid-template-columns:  repeat(3, 1fr);
        grid-template-rows: auto 1fr;

    }
   

   
    
    
`