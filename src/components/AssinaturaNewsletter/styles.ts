import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 200px 0 300px;

  background-image: url('/images/image-hero.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media (max-width: 1100px) {
    background-image: none;
  }

  @media (max-width: 980px) {
    padding: 75px 0 150px;
  }

  span {
    font-size: 22px;
    color: #202020;
    opacity: 0.5;
  }

  h2 {
    font-family: 'Elsie Swash Caps';
    font-weight: 900;
    font-size: 82px;
    line-height: 94px;

    color: #202020;

    margin-top: 12px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #202020;
    opacity: 0.5;

    margin-top: 24px;
    max-width: 480px;

    @media (max-width: 840px) {
      max-width: 100%;
    }
  }

  form {
    display: grid;
    grid-template-areas: 'mail input btn';
    grid-template-columns: auto 1fr auto;

    align-items: center;
    margin-top: 36px;

    height: 72px;
    width: 50%;
    background: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    @media (max-width: 980px) {
      width: 100%;
    }

    @media (max-width: 580px) {
      grid-template-areas:
        'mail input'
        'btn  btn';
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
    }

    img {
      grid-area: mail;
      margin: 0 16px;
    }

    input {
      grid-area: input;
      height: 100%;

      font-size: 16px;
      line-height: 20px;

      color: #202020;

      opacity: 0.3;
    }

    button {
      grid-area: btn;
      background: #ffcb47;
      height: 100%;

      font-size: 16px;
      line-height: 20px;
      text-align: center;

      padding: 0 24px;
      color: #ffffff;

      &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;
