import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from '../actions/actions';
import {apolloClient} from './Client';
import {getPokemons} from './Queries';

const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    apolloClient
      .query({query: getPokemons})
      .then((response) => {
        console.log('REPONSE GRAPHQL', response.data.pokemon);
        dispatch(fetchProductsSuccess(response.data.pokemon));
        return response.data.pokemon;
      })
      .catch((error) => {
        console.log('error', error);
        dispatch(fetchProductsError(error));
      });
  };
};

export default fetchPokemons;
