import styled from "styled-components";

const StyledRating = styled.div`
    
    display: flex;
    justify-content: right;
    padding: 5px;
    font-weight: 600;
`

const Span = styled.span`
    font-size: 70%;
    font-weight: 400;
`

const Rating  = () => {
    return <StyledRating>🙂 83<Span>/100</Span></StyledRating>
}

export default Rating;