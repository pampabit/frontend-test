import apiUrl from './config';

const product = {
  getAll: async () => {
    const reponse = await fetch(`${apiUrl}product`);
    const data = await reponse.json();
    return data;
  },
  getById: async id => {
    const reponse = await fetch(`${apiUrl}product/${id}`);
    const data = await reponse.json();
    return data;
  },
};
export default product;
