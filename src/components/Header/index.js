/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';

import {
  Container, Top, Logo, Title,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/img/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Gutavo</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}