import { useEffect, useState } from 'react';
import { Container, OfertasGrid } from './styles';

type Planta = {
	name: string;
	preco: number;
	precoFormatado: string;
	img: string;
	imgFormatado: string;
	ordem: number;
}

export const Ofertas = () => {
	const [plantas, setPlantas] = useState<Planta[]>([]);

	useEffect(() => {
		fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
			.then(response => response.json())
			.then(data => setPlantas(data.map(item => ({
				...item,
				imgFormatado: item.img.replace('01_card', ''),
				precoFormatado: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)
			}))));
	}, []);

  return (
    <Container>
			<span>Conheça nossas</span>
			<h2>ofertas</h2>

			<OfertasGrid>
				{ plantas.map(planta => (
					<li key={planta.name}>
						<img src={`images/plantas/${planta.imgFormatado}.png`} alt={planta.imgFormatado} />

						<div>
							<h4>{planta.name}</h4>
							<small>{planta.precoFormatado}</small>
							<a href="#">Comprar</a>
						</div>
					</li>
				))}
			</OfertasGrid>
    </Container>
  );
};
