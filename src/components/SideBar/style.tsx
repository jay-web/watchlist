import styled from "styled-components";

export const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 1rem 2.4rem;
    border-right: 1px solid var(--color-grey-200);

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:3.2rem;

    @media screen and (max-width: 500px) {
    
       display:none;

    }
`



