import { screen } from '@testing-library/react';
import render from '../../test-utils/testing-library-utils';
import Header from './Header';

describe('header renders correctly', () => {
  test('render correctly', async () => {
    render(<Header />);

    const brand = screen.getByText(/brand/i);
    expect(brand).toBeInTheDocument();

    const cart = screen.getByText(/productos en el carrito/i);
    expect(cart).toBeInTheDocument();
  });
});
