import styled from "styled-components";

export const StyledMovieDetails = styled.div`

    background-color: var(--color-grey-50);
    display: flex;
    padding: 2rem;
    height: 40rem;
    width: 100%;
    z-index:1000;
    justify-content: center;
    & img {
        height: 100%;
        border-radius: 5px;
    }

`

export const StyledMovieInfo = styled.div`
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    padding: 0px 2rem;
    gap:1rem;

    & button{
        align-self: flex-start;
        
    }
`
export const StyledSpan = styled.span`

`
export const Title = styled.p`
     grid-row:1 / 2;
    grid-column:1 / 3;
`
export const Actors = styled.p`
    grid-row: 2 / 3;
    grid-column:1 / 4
`
export const Director = styled.p`
    grid-row: 3 / 4;
    grid-column:1 / 3;
 `
 export const Genre = styled.p`
    grid-row: 4 / 5;
    grid-column:1 / 3;
`
export const Plot = styled.p`
    grid-row: 5 / 6;
    grid-column:1 / -1;
`

export const Released = styled.p`
    grid-row: 6 / 7;
    grid-column:1 / 3;
`

export const ButtonToAdd = styled.span`
    display: flex;
    gap:1.5rem;
    grid-column: 1 / -1;
    grid-row: 7 /-1;
    
   
`

export const Label = styled.span`
    font-weight: bold;
`

export const IMDBRating = styled.div`
    grid-column: 4 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;

`