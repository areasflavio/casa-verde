import { AssinaturaNewsletter } from 'components/AssinaturaNewsletter';
import { Info } from 'components/Info';
import { Menu } from 'components/Menu';
import { Ofertas } from 'components/Ofertas';

export default function Home() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
      <Info />
      <Ofertas />
    </main>
  );
}
