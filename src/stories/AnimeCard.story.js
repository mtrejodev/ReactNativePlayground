import React from 'react';
import {storiesOf} from '@storybook/react-native';
import AnimeCard from '../components/AnimeCard';
import {View} from 'react-native';

storiesOf('AnimeCard', module)
  .addDecorator((getStory) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {getStory()}
    </View>
  ))
  .add('default', () => (
    <AnimeCard action={() => console.log('CLCKED CARD')} />
  ));
