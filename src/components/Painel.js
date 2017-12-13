import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props){
        super(props);
        this.state = {num1: '', num2: ''};
    }
        render (){
            return (   
                <View>
                    <Entrada propdnNum1={this.state.num1} propdnNum2={this.state.num2}/>
                    <Operacao />
                    <Comando />
                </View>
            )
        }
    }
export { Painel }