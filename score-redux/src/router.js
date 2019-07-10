import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';
import AddScore from './screens/AddScore';

export const SettingsScreen = createStackNavigator(
  {
    Main: {
      screen: Settings,
      navigationOptions: () => ({
        title: 'Add Players',
        headerBackTitle: null
      }),
    },
  },
  {
    mode: 'modal',
  }
);

export const GameScreen = createStackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Game Score',
        headerBackTitle: null
      }),
    },
    Modal: {
      screen: AddScore,
      navigationOptions: () => ({
        title: 'Update Score',
        headerBackTitle: null
      }),
    }
  },
  {
    mode: 'modal',
  }
);

export const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Game: {
        screen: GameScreen
      },
      Settings: {
        screen: SettingsScreen
      }
    },
    {
      initialRouteName: 'Settings'
    }
  );
};
