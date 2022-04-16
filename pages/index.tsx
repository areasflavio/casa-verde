import { AssinaturaNewsletter } from 'components/AssinaturaNewsletter';
import { Info } from 'components/Info';
import { Menu } from 'components/Menu';

export default function Home() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
      <Info />
    </main>
  );
}
