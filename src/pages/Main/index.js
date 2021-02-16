/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Container } from './styles';

import { Header } from '~/components/Header/';

import { Tabs } from '~/components/Tabs'

export default function Main(){
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  )
}