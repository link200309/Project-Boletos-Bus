import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ReservaNavigation from './src/navigation/ReservaNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <ReservaNavigation />
    </NavigationContainer>
  );
};

export default App;
