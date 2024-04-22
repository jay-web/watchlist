import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap:1rem;


    & form {
    display: flex;
    flex-direction: column;
    gap:3rem;
    padding: 2rem;


    }
   
 
`

export const SelectFormList = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  
 

  
`

export const StyledSelect = styled.div`

    display: flex;
    flex-direction: column;
    gap:3rem;
    padding: 2rem;  
    & select{
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

    & label {
      font-weight: 500;
    }
  
  
`

export const CreateNewList = styled.div`
  display: flex;
  flex-direction: column;
  gap:2rem;

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
`

export const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap:1rem;
`

export const NoMovie = styled.div`
  font-weight: 500;
  padding: 1rem;
  margin-top: 1rem;
  color:var(--color-brand-500);
`