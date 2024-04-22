import styled from "styled-components";

export const StyledUser = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .3rem 1rem;
    border: 1px solid var(--color-grey-300);
    border-radius: 5px;


    & button{
        transform: translateY(-35px);
    }
`

export const StyledUsername = styled.span`

    text-align: left;
    font-size: 1.2rem;
`

