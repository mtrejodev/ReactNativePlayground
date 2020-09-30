import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Provider from '../components/Provider';
import SectionList from '../components/SectionsList';
storiesOf('AnimeList', module)
  .addDecorator((content) => <Provider>{content()}</Provider>)
  .add('list', () => <SectionList />);
