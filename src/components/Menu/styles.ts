import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 1240px;
  padding-right: 30px;

  z-index: 999;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  color: #202020;

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

    li + li::before {
      content: '/';
      margin: 0 16px;
    }
  }
`;
