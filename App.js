import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Signup} from './screens';
import bottomTab from './navigation/bottomtabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'SignUp'}>
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={bottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
