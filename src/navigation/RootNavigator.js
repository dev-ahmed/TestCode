import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const RouteConfigs = {
  Tabs: { screen: TabNavigator },
};

const StackNavigatorConfig = {
  headerMode: 'none',
};

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);
