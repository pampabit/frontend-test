import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import render from '../../test-utils/testing-library-utils';
import App from './Index';

describe('Home works corretly', () => {
  test('render correctly', async () => {
    render(<App />);

    const theTitle = screen.getByText(/productos/i);
    expect(theTitle.tagName).toEqual('H1');

    const searchBox = screen.getByPlaceholderText('Buscar');
    expect(searchBox).toBeInTheDocument();

    const image = await screen.findAllByAltText('product-image');
    expect(image.length);
  });

  test('should be able to search and display product results', async () => {
    render(<App />);
    const searchBox = screen.getByPlaceholderText('Buscar');
    userEvent.type(searchBox, 'A');
    const image = await screen.findAllByAltText('product-image');
    expect(image.length);
  });

  test('should be able to display the results in grid and list', async () => {
    render(<App />);
    const image = await screen.findAllByAltText('product-image');
    expect(image.length);

    const changeView = screen.getByRole('button', { name: /viewMode/i });
    userEvent.click(changeView);

    const image2 = await screen.findAllByAltText('product-image');
    expect(image2.length);
  });
});
