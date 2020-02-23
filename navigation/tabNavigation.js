import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import AboutScreen from '../screens/About';
import NewsListScreen from '../screens/NewsList';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Top Headlines" component={NewsListScreen} />
    <Tab.Screen name="News" component={AboutScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigation;
