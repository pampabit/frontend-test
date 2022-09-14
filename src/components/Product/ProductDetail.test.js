import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import render from '../../test-utils/testing-library-utils';
import ProductDetail from './ProductDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '8hKbH2UHPM_944nRHYN1n',
  }),
}));

describe('product page works corretly', () => {
  test('render correctly', async () => {
    render(<ProductDetail />);
    expect(screen.queryAllByAltText('product-image'));
  });

  test('actions correctly', async () => {
    render(<ProductDetail />);
    const image = screen.queryAllByAltText('product-image');
    expect(image.length);

    const addButton = await screen.findByTestId('addButton');
    expect(addButton).toBeInTheDocument();
    const storageSelect = await screen.findByTestId('storage');
    expect(storageSelect).toBeInTheDocument();
    const colorSelect = await screen.findByTestId('color');
    expect(colorSelect).toBeInTheDocument();

    userEvent.selectOptions(storageSelect, ['2000']);
    expect(storageSelect.value).toBe('2000');
    userEvent.selectOptions(colorSelect, ['1000']);
    expect(colorSelect.value).toBe('1000');
    fireEvent.click(addButton);

    expect(await screen.findByTestId('addedButton')).toBeInTheDocument();
  });
});
