import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {Topo, Resultado, Painel, } from './components/';


export default props =>  (
    <View>
        <Topo/>
        <Resultado/>
        <Painel/>          
    </View>
)