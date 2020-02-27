import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import AboutScreen from '../screens/About';
import NewsListScreen from '../screens/NewsList';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        console.log('route', route);
        let iconName;

        if (route.name === 'Top Headlines') {
          iconName = 'book';
        } else if (route.name === 'News') {
          iconName = 'bars';
        } else if (route.name === 'Profile') {
          iconName = 'profile';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3498DB',
      inactiveTintColor: '#85929E',
    }}>
    <Tab.Screen name="Top Headlines" component={HomeScreen} />
    <Tab.Screen name="News" component={NewsListScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigation;
