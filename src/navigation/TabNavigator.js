import React from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import ProductsNavigator from './ProductsNavigator';
import Blank from '../containers/Blank';

const screens = {
  ProductsNavigator: {
    screen: ProductsNavigator,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="home" />,
      tabBarOnPress: () => {},
    }),
  },
  View1: {
    screen: Blank,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="menu" />,
      tabBarOnPress: () => {},
    }),
  },
  View2: {
    screen: Blank,
    navigationOptions: () => ({
      tabBarIcon: <Icon name="options" />,
      tabBarOnPress: () => {},
    }),
  },
};

const options = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarComponent: BottomTabBar,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  initialRouteName: 'ProductsNavigator',
};

export default createBottomTabNavigator(screens, options);
