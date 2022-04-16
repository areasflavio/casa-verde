import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 995px;
  margin: 0 auto;

  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  @media (max-width: 940px) {
    flex-direction: column;

    img {
      height: 400px;
      object-fit: cover;
    }
  }

  div {
    padding: 60px 32px;
  }

  span,
  li {
    font-size: 1.375rem;
    line-height: 1.227;

    color: #8f8f8f;
  }

  h3 {
    margin-top: 12px;
    font-size: 2.625rem;
    line-height: 1.143;

    color: #202020;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: 32px;

    li {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-right: 16px;
        background: #ffcb47;
      }

      @media (max-width: 400px) {
        &::before {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;
