import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle="light-content"  backgroundColor="#020a15" />
            <Routes />
    </>
    );

export default App;
