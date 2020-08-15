import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ extend }) =>
    extend &&
    css`
      width: 100%;
    `}

  ${({ size }) => {
    switch (size) {
      case "small":
      default:
        return css`
          height: 32px;
        `;
    }
  }}
`;
