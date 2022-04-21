import { AssinaturaNewsletter } from 'components/AssinaturaNewsletter';
import { Footer } from 'components/Footer';
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
      <Footer />
    </main>
  );
}
