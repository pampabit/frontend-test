import apiUrl from './config';

const product = {
  getAll: () => {
    return fetch(`${apiUrl}product`)
      .then(reponse => {
        return reponse.json();
      })
      .then(data => data);
  },
};
export default product;
