import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  color: #202020;
  margin-top: 30px;

  @media (max-width: 1200px) {
    width: 100vw;
  }

  @media (max-width: 840px) {
    position: relative;
    width: 100%;
    flex-direction: column;
    padding: 0;
    padding-left: 16px;

    align-items: center;
    gap: 16px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 840px) {
      justify-content: center;
      row-gap: 16px;
    }

    li {
      position: relative;

      & + li::before {
        content: '/';
        margin: 0 16px;
      }
    }

    a {
      transition: color 0.2s;

      &:hover {
        color: #ffcb47;
      }
    }
  }
`;
