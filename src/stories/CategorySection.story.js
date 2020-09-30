import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import CategorySection from '../components/CategorySection';

storiesOf('CategorySection', module)
  .addDecorator((content) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {content()}
    </View>
  ))
  .add('anime', () => <CategorySection />);
