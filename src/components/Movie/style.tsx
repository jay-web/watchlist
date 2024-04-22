import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  min-height: 400px;
 
  border-radius: 5px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1);
  position: relative;

  cursor: pointer;
  transition: all linear 200ms;

  &:last-of-type {
    align-self: flex-start;
  }

  & img {
    width: 100%;
    height: 270px;
    border-radius: 5px 5px 0 0;
    z-index: 900;
    margin-bottom: 1rem;
  }

  &:hover {
    /* transform: scale(1.02); */
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.4);
  }

  & svg {
    position: absolute;
    z-index: 1000;
    transition: all linear 200ms;
    font-size: 2.2rem;

    &:hover {
      transform: scale(1.1) translateY(5px);
      color: var(--color-red-700);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Title = styled.p`
  padding: 0.1rem 1rem;
  font-weight: 500;
`;
export const Year = styled.span`
  font-weight: 400;
  padding: 0.1rem 1rem;
`;



export const InfoSection = styled.div`
    /* position:relative; */
    display:flex;
    flex-direction:column;

    & span{
      align-self: right;
    }
`
export const StyleDelete  = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  gap: 2rem;

  & p{
    font-weight: 500;
  }
`

export const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap:1rem;
`