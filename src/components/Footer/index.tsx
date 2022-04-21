import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <strong>Made by Flávio Arêas</strong>
      <ul>
        <li>
          <a
            href={'https://linkedin.com/in/areasflavio'}
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={'https://github.com/areasflavio'}
            target={'_blank'}
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </Container>
  );
};
