import { FaRegSadTear } from "react-icons/fa";
import styled from "styled-components";

interface ErrorProps {
  message: string;
}

const ErrorDiv = styled.div`
  /* background-color: var(--color-brand-500); */
  color: var(--color-brand-500);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* height:50vh; */

  & div{
    text-align:center;
  }

  & p {
    font-weight: bold;
    font-size: 2rem;
  }

  & span {
    font-size: 4rem;
  }
  & svg {
    font-size: 4rem;
    margin-top: 1rem;
  }
`;

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <ErrorDiv>
      {message ? (
        <div>
          <p>{message} </p>
          <p>
            {" "}
            <FaRegSadTear />{" "}
          </p>
        </div>
      ) : (
        <div>
          <p>
            Something went wrong <span>🐶</span>
          </p>
          <p> Please try again. </p>
        </div>
      )}
    </ErrorDiv>
  );
};

export default ErrorMessage;
