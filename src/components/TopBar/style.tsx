import styled from "styled-components";

export const StyleTopBar = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .logout{
      width: 100% !important;
    }

   
  }

  @media screen and (min-width: 501px) {
    display: none;
  }
`;

export const StyledMenu = styled.div`
  position: flex;
  flex-direction: column;
  padding: 1rem;
  transition: all 0.5s;
  align-items: stretch;
  overflow:hidden;

  & .logout {
    width: 100%;
  }

  


`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-0);
  /* backdrop-filter: blur(4px); */
  z-index: 1000;
  transition: all 0.5s;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

export const StyledMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 70dvh;
  padding: 2rem 0px;
  overflow-y: scroll;
  scrollbar-color: green;
  scrollbar-width:thin;
  box-sizing: content-box;


  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 2rem;
  }


`;
