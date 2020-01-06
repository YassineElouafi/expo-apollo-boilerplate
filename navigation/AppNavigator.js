import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '@screens/HomeScreen';
import IntroScreen from '@screens/IntroScreen';
import LoginScreen from '@screens/LoginScreen';

const AuthStack = createStackNavigator({
  Intro: {screen:IntroScreen,navigationOptions: { headerTitle: 'INTRO' }},
  Login: {screen:LoginScreen,navigationOptions: { headerTitle: 'LOGIN' }}
},{
  initialRouteName: 'Intro',
});

const LoggedInStack = createStackNavigator({
  Home: {screen:HomeScreen,navigationOptions: { headerTitle: 'HOME' }}
},{
  initialRouteName: 'Home',
});

export const LoggedInNavigator = createAppContainer(LoggedInStack);
export const AuthNavigator = createAppContainer(AuthStack);
