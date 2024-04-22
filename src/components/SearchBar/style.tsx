import styled from "styled-components";


export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 1rem 0 2rem 0;
    position: relative;
    

    & input{
        padding:.5rem 3.4rem;
        width: 100%;
        border: 1px solid var(--color-grey-300);
        border-radius: var(--border-radius-sm);
        flex-grow: 1;
        
        &:focus{
        outline: none;
      }
        &::placeholder{
            opacity:0.5;
        }
    
    }

    & svg {
        position:absolute;
        font-size: 2rem;
        margin:1rem 1.5rem 1rem 1rem;
        
    }

    & button {
        position:absolute;
        right:0rem;
        align-self: stretch;
        height: 100%;
    }

   
`

