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
        this.state = {num1: '14', num2: '13'};
        //Binding created to solve problems context
        this.calcular = this.calcular.bind(this);
    }
    calcular(){
        const result = parseInt(this.state.num1) + parseInt(this.state.num2)
        console.log(result);  
    }
        render (){
            return (   
                <View>
                    <Entrada propsNum1={this.state.num1} propsNum2={this.state.num2}/>
                    <Operacao />
                    <Comando acao={this.calcular}/>
                </View>
            )
        }
    }
export { Painel }