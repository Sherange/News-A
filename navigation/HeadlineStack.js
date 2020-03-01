import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeadlinesScreen from '../screens/Headlines';

const Stack = createStackNavigator();

const HeadlineStack = () => (
  <Stack.Navigator initialRouteName="HeadlinesScreen">
    <Stack.Screen
      name="Headlines"
      component={HeadlinesScreen}
      options={{title: 'US Business Headlines'}}
    />
  </Stack.Navigator>
);

export default HeadlineStack;
