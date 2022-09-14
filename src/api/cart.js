import apiUrl from './config';

const cart = {
  addToCart: async body => {
    const reponse = await fetch(`${apiUrl}cart`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const data = await reponse.json();
    return data;
  },
};
export default cart;
