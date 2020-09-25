import React from 'react';
import IconButton from '../components/IconButton';
import {storiesOf} from '@storybook/react-native';

storiesOf('IconButton', module)
  .add('on', () => (
    <IconButton
      icon={'heart'}
      color={'#333'}
      onPress={() => console.log('un-favorited!')}
    />
  ))
  .add('off', () => (
    <IconButton
      icon={'heart-o'}
      color={'#333'}
      onPress={() => console.log('favorited!')}
    />
  ));
