import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'AUTH_TOKEN';
let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  return await AsyncStorage.getItem(AUTH_TOKEN).then( val => {
    return val;
  });
};

export const isLoggedIn = async () => {
  var current_token = await AsyncStorage.getItem(AUTH_TOKEN);
  return false;
};

export const signIn = async (newToken) => {
  token = newToken;
  return await AsyncStorage.setItem(AUTH_TOKEN, newToken)
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};