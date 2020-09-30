import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from '../actions/actions';
// import {apolloClient} from './Client';
// import {getAnimes} from './Queries';

export const fetchAnime = () => {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch('https://kitsu.io/api/edge/categories')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProductsSuccess(data.data));
        return data;
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(fetchProductsError(error));
      });
  };
};

export const fetchAnimeContent = async (url) => {
  try {
    const response = await fetch(url);
    const message = await response.json();
    return message;
  } catch (error) {
    console.log('REPONSE ERROR', error);
    return error;
  }
};
