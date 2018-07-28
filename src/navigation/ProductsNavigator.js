import { createStackNavigator } from 'react-navigation';
import Containers from '../containers';

const RouteConfigs = {
  Products: { screen: Containers.Products },
};

const StackNavigatorConfig = {
  headerMode: 'none',
};

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);
