import styled, { css } from "styled-components";

export type sizes = "small" | "medium" | "large" | "component";
export type variations = "primary" | "secondary" | "tertiary" | "danger";


const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  component: css`
    font-size: inherit;
    padding: inherit;
    font-weight: inherit;
    text-align: inherit;
    text-transform: none;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  tertiary: css`
    color: inherit;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &:focus{
      outline: none;
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button<{ size?: sizes; $variation?: variations }>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size || "small"]}
  ${(props) => variations[props.$variation || "primary"]}

  &:disabled{
    background-color: var(--color-grey-200);
    color:black;
    opacity:.5;
  }
`;

export default Button;
