import styled from 'styled-components';

export const Css = {
  Section: styled.section`
    padding: 10px 25px;

    & > :not(:first-child) {
      margin-top: 10px;
    }
  `,
};
