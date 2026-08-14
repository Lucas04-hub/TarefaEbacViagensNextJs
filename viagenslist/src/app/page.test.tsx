import { render, screen } from '@testing-library/react';
import Page from './page';

test('deve renderizar a página principal', () => {
  render(<Page />);
  // Substitua pelo texto real que você sabe que existe em page.tsx, por exemplo:
  // expect(screen.getByText('Viagens')).toBeInTheDocument();
});