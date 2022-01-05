import styled from 'styled-components';

export const Css = {
  ButtonOption: styled.div`
    display: flex;
    justify-content: start;

    > :not(:last-child) {
      margin-right: 10px;
    }
  `,

  Button: styled.button`
    padding: 4px 8px;
    border-radius: 7px;
    min-width: 80px;
    cursor: pointer;
    font-weight: 700;
    :hover {
      background-color: ${({ theme }) => theme.color.buttonHover};
    }
  `,
};
