import styled, {css} from "styled-components";

export const SVGSpan = styled.span<{
    $isWatched?: boolean;
    $direction: "right" | "left" | "bottomRight";
  }>`
    ${(props) =>
      props.$direction === "left" &&
      css`
        & svg {
          position: absolute;
          top: 0.3rem;
          font-size: 2.2rem;
          /* stroke: 1px solid white; */
          color:var(--color-grey-700);
          /* color:green; */
          /* background-color: red; */
  
          &:hover {
            transform: scale(1.1) translateY(5px);
            color: var(--color-brand-500);
          }
  
          &:active {
            transform: scale(0.9);
          }
        }
      `}
  
    ${(props) =>
      props.$direction === "right" && props.$isWatched === false &&
      css`
        & svg {
          position: absolute;
          color: var(--color-grey-300);
          top: 0.3rem;
          right: 0.2rem;
          
          &:hover {
            transform: scale(1.1) translateY(0px) !important;
            /* background: white; */
            border-radius: 100%;
            color:green;
          }
  
          &:active {
            transform: scale(0.9);
          }
        }
      `}

       
    ${(props) =>
      props.$direction === "right" && props.$isWatched === true && 
      css`
        & svg {
          position: absolute;
          color: green;
          top: 0.4rem;
          right: 0.2rem;

          &:hover {
            transform: scale(1) translateY(0px);
            border-radius: 100%;
            /* background: green; */
            color:green;
          }
  
          &:active {
            transform: scale(1);
          }
          
        }
      `}

      ${(props) =>
      props.$direction === "bottomRight" &&
      css`
        & svg {
          position: absolute;
          bottom: 0.3rem;
          right: 0.2rem;
          font-size: 2.2rem;
          /* stroke: 1px solid white; */
          color:var(--color-grey-700);
          /* color:green; */
          /* background-color: red; */
  
          &:hover {
            transform: scale(1.1) translateY(-5px);
            color: var(--color-brand-500);
          }
  
          &:active {
            transform: scale(0.9);
          }
        }
      `}

    
         /* position: relative; */
         transition: all linear 200ms;
        z-index: 1000;
        color: white;
        border-radius: 1rem;
  `;
  