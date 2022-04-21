import { useEffect, useState } from 'react';
import { Container, PlantaCard } from './styles';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Planta = {
  name: string;
  preco: number;
  precoFormatado: string;
  img: string;
  imgFormatado: string;
  ordem: number;
};

export const Ofertas = () => {
  const [plantas, setPlantas] = useState<Planta[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) =>
        setPlantas(
          data.map((item) => ({
            ...item,
            imgFormatado: item.img.replace('01_card', ''),
            precoFormatado: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.preco),
          }))
        )
      );
  }, []);

  return (
    <Container>
      <span>Conheça nossas</span>
      <h2>plantas</h2>

      <ul>
        {plantas.map((planta) => (
          <PlantaCard key={planta.name} planta={planta.imgFormatado}>
            <div>
              <h4>{planta.name}</h4>
              <small>{planta.precoFormatado}</small>
              <a href="#">Comprar</a>
            </div>
          </PlantaCard>
        ))}
      </ul>
    </Container>
  );
};
