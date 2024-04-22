import styled from "styled-components";

export const StyledMoviesList = styled.div`
    /* background-color: var(--color-brand-100); */
    display: flex;
    flex-direction: column;
  
    @media screen and (max-width: 615px)  {
        align-items: center;
    }

    @media screen and (max-width: 1180px) and (min-width: 781px){
        align-items: space-between;
        justify-content: space-between;

    }
  

`

