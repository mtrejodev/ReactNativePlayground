import {FAVORITED_CARD} from '../actions/types';

const INITIAL_STATE = {
  cards: [
    {
      id: 1,
      label: 'Charizard',
      image: require('../images/charizard.png'),
      is_favorite: false,
    },
    {
      id: 2,
      label: 'Empoleon',
      image: require('../images/empoleon.jpg'),
      is_favorite: true,
    },
    {
      id: 3,
      label: 'Entei',
      image: require('../images/entei.png'),
      is_favorite: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITED_CARD:
      let cards = state.cards.map((item) => {
        return item.id === action.payload
          ? {...item, is_favorite: !item.is_favorite}
          : item;
      });

      return {...state, cards};

    default:
      return state;
  }
};
