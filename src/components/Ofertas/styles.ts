import styled, { keyframes } from 'styled-components';

interface PlantaCardProps {
  planta: string;
}

const seta = keyframes`
    from {
        margin-left: 24px;
    }
    to {
        margin-left: 30px;
    }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 44px;

  span {
    font-size: 1.375rem;
    line-height: 1.227;

    color: #8f8f8f;
  }

  h2 {
    font-size: 5.125rem;
    line-height: 1.146;
    text-align: center;

    color: #202020;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;

    @media (max-width: 1240px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 840px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const PlantaCard = styled.li<PlantaCardProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  background-image: ${(props) => `url('images/plantas/${props.planta}.png')`};
  background-repeat: no-repeat;
  background-position: 0% 25%;

  div {
    grid-column: 2;
    display: flex;
    flex-direction: column;

    padding: 27px 27px 27px 0;

    @media (max-width: 840px) {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  h4 {
    font-size: 2rem;
    line-height: 1.156;
    color: #202020;
  }

  small,
  a {
    font-size: 1rem;
    line-height: 1.25;
  }

  small {
    color: #b8b8b8;
    margin-top: 8px;
  }

  a {
    color: #ffcb47;
    margin-top: 24px;

    &:hover::after {
      animation: ${seta} 0.5s ease-in 0s infinite alternate;
    }

    &::after {
      content: '→';
      font-size: 1.5rem;
      margin-left: 24px;
    }
  }
`;
