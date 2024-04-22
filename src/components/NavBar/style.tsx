import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: .5rem 2.4rem;
    transition: all 0.3s;
  }

 
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-0);
    background-color: var(--color-brand-500);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-0);
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  
  & select {
    width: 100%;
  }
` 

export const StyledDynamicNav = styled.ul`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:left;

  & li {
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor:pointer;
    transition: all linear 200ms;

    & svg {
      transition: all linear 200ms;
      &:hover{
      color:var(--color-brand-500);
      transform: scale(1.2);
      
    }
    }
   
  }
    
`

export const StyledDynamicLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 5px 10px;
    transition: all 0.3s;
  }

 
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-500);
    /* background-color: var(--color-brand-500); */
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
    color: var(--color-grey-0);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-500);
    
  }
`;