import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeadlinesScreen from '../screens/Headlines';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const HeadlineStack = () => (
  <Stack.Navigator
    initialRouteName="HeadlinesScreen"
    options={({navigation, route}) => {
      return {
        headerTitle: props => <Text>Here</Text>,
      };
    }}>
    <Stack.Screen name="Headlines" component={HeadlinesScreen} />
  </Stack.Navigator>
);

export default HeadlineStack;
