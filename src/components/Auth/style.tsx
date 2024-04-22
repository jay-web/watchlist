import styled from "styled-components";


export const  StyledFormDiv = styled.div`
    display:flex;
    height: 100dvh;
    align-items: center;
    justify-content: center;

`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap:2.5rem;
    padding: 2rem 3rem;

    & input {
        padding:.5rem;
        border: 1px solid var(--color-grey-300);
        border-radius: var(--border-radius-sm);
        
        &:focus{
        outline: none;
      }
        &::placeholder{
            opacity:0.5;
        }

    }

    & svg {
        align-self: center;
        font-size: 3.5rem;
        color: var(--color-brand-700);
    }
`

export default StyledForm;