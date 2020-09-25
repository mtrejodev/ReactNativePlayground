import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Provider from '../components/PokemonProvider';
import CardList from '../components/PokemonList';

storiesOf('PokemonList', module)
  .addDecorator((getStory) => <Provider> {getStory()} </Provider>)
  .add('with cards', () => {
    return <CardList />;
  });
