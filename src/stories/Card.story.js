/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Card from '../components/Card';

import {storiesOf} from '@storybook/react-native';

storiesOf('Card', module)
  .addDecorator((getStory) => (
    <View style={{flex: 1, alignItems: 'center'}}>{getStory()}</View>
  ))
  .add('default', () => (
    <Card
      image={require('../images/charizard.png')}
      text={'Charizard'}
      is_favorite={false}
      action={() => {
        console.log('clicked!');
      }}
    />
  ))
  .add('favorited', () => (
    <Card
      image={require('../images/lugia.png')}
      text={'Lugia'}
      is_favorite={true}
      action={() => {
        console.log('clicked!');
      }}
    />
  ));
