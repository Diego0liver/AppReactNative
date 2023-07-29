import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router/Router';
import {TotalContextProvider} from '../app_financa/src/Context/Context'
import 'react-native-gesture-handler';

function App() {

  return (
    <TotalContextProvider>
     <NavigationContainer>
      <Router />
     </NavigationContainer>
     </TotalContextProvider>
  );
}

export default App;
