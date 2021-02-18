import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import airmod from '~/assets/img/airmod.png'

import { Setup, SetupHeader, SafeAreaView, Logo, SetupText, SetupDescription, Blue } from './styles';

export default function Main() {
  return (
    <SafeAreaView>
      <Setup>
          <SetupHeader>
            <Logo source={airmod} />
            <SetupText>WELCOME TO AIRMOD.DEV</SetupText>
            <SetupDescription>
              Facilitating the development of applications in <Blue>react native</Blue>, 
              here we have the necessary settings to start your new project.
            </SetupDescription>
            <Icon name="code" size={100} color="#FFF" />
          </SetupHeader>
      </Setup>
    </SafeAreaView>
  );
}