import React, { useEffect, useState }  from 'react';
import { Notifications } from 'expo';
import { askAsync, NOTIFICATIONS, LOCATION } from 'expo-permissions'
import { SafeAreaView, AsyncStorage} from 'react-native'
import * as Localization from 'expo-localization';

import { colors } from '@utils/constants';
import { ThemeProvider } from 'styled-components';
import { Root } from '@utils/styled'
import { AuthNavigator } from './navigation/AppNavigator';
import Authenticated from './components/Authenticated';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

import { setContext } from 'apollo-link-context';

import i18n from 'i18n-js';
i18n.fallbacks = true;
i18n.translations = {
  'en': require('./config/lang/en'),
  'fr': require('./config/lang/fr'),
  'ar': require('./config/lang/ar')
};

i18n.locale = Localization.locale;

import { GRAPHQL_ENDPOINT } from 'react-native-dotenv';
import {getToken, signIn} from '@utils/methods';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const App = () =>{

  const [token, setToken] = useState(null);
  const [firebase_token, setFirebaseToken] = useState('');

  const httpLink = new HttpLink({ uri: `${GRAPHQL_ENDPOINT}` })
  
  const authLink = setContext(async (req, { headers }) => {
    let token = await getToken();
    setToken(token);
    return {
      ...headers,
      headers: {
        authorization: token ? `Bearer ${token}` : null
      },
    };
  });

  const link = authLink.concat(httpLink);

  const defaultOptions = {
    watchQuery: { fetchPolicy: 'cache-and-network', errorPolicy: 'ignore' },
    query: { fetchPolicy: 'cache-and-network', errorPolicy: 'all' },
  }
  const client = new ApolloClient({ link, cache: new InMemoryCache(), defaultOptions });

  const registerForPushNotifications = async () => {
    const result = await askAsync(NOTIFICATIONS, LOCATION);
    if (result.status !== 'granted') return;
    let token = await Notifications.getExpoPushTokenAsync();
    setFirebaseToken(token);
  }
 
  const changeLoginState = async (token = null) => { 
    if(token === null)  {
      AsyncStorage.removeItem('AUTH_TOKEN');
    }else{
      await signIn(token);
    }
    setToken(token);
  };

  useEffect( ()=>{ 
    registerForPushNotifications()
    AsyncStorage.getItem('AUTH_TOKEN').then(value =>{
      setToken(value);
    })
  })

  const renderAuth = () =>{
    return <AuthNavigator screenProps={{ changeLoginState,firebase_token }} />;
  }

  const renderAuthenticated = () => {
    return <Authenticated changeLoginState={changeLoginState} />
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={colors}>
        <SafeAreaView style={{flex: 1}}>
          <Root>
            { token === null ?  renderAuth() : renderAuthenticated() }
          </Root>
        </SafeAreaView>
      </ThemeProvider>
    </ApolloProvider>
  );

}

export default App;