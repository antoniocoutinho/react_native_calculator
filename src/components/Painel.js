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
        this.state = {num1: '1111', num2: '2222'};
        //Binding created to solve problems context
        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
    }
    calcular(){
        const result = parseInt(this.state.num1) + parseInt(this.state.num2)
        console.log(result);  
    }

    atualizaValor(nomeCampo, numero){
        
        let obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }
        render (){
            return (   
                <View>
                    <Entrada 
                        propsNum1={this.state.num1} 
                        propsNum2={this.state.num2}
                        atualizaValor={this.atualizaValor}
                    />
                    <Operacao />
                    <Comando acao={this.calcular}/>
                </View>
            )
        }
    }
export { Painel }