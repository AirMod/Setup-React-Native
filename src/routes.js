import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from '~/pages/Main';

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator   screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Main}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;
