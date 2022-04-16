import { Container } from './styles';

export const Menu = () => {
  return (
    <Container>
      <img src="images/logo.svg" alt="CasaVerde" />

      <nav>
        <ul>
          <li>
            <a href="#">Como fazer</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Vídeos</a>
          </li>
          <li>
            <a href="#">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
