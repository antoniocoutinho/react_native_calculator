import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button
} from 'react-native';

const calculate = () => alert("Button Test")

export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {input1: 'input1', input2: 'input2'};
  }


  render() {
    return (
      <View style={styles.background}>

        <View style={styles.cabecalho}>
          <Text style={styles.txtCabecalho}>Calculadora 1.0</Text>
        </View>
      
        <View style={styles.resultado} >
         <Text style={styles.txtResultado}>Resultado</Text>
        </View>

        <View style={styles.painel} >
          
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputs}
              onChangeText={(i) => this.setState({i})}
              value={this.state.input1}
              />

            <TextInput
              style={styles.inputs}
              onChangeText={(n) => this.setState({n})}
              value={this.state.input2}
              />
          </View>

          <View>
            <Picker
              style={styles.pickerView}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Soma" value="+" />
              <Picker.Item label="Subtração" value="-" />
              <Picker.Item label="Divisão" value="/" />
              <Picker.Item label="Multiplicação" value="*" />
            </Picker>
          </View>

          <View style={styles.bntView}>
            <Button 
              title="Calcular"
              onPress={calculate}
            />
          </View>

        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cabecalho:{
    flex: 1,
    backgroundColor: '#0091F4',
    borderWidth:3,
    borderColor: 'red',
    alignItems: 'center',
    padding:5
  },
  txtCabecalho:{
    fontSize: 28,
    color: 'white'
  },
  resultado: {
      flex: 2,
      padding: 10    
  },
  txtResultado: {
    fontSize: 40,
    textAlign: 'left',
  },
  painel:{
    flex:10,
    borderWidth:3,
    borderColor: 'yellow'
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
  },
  inputs:{
    height: 70,
    width: 150,
    borderColor: 'gray',
    fontSize: 18,
    margin: 10,
    borderWidth: 1
  },
  pickerView:{
    marginTop: 10
  },
  bntView:{
    marginTop: 10
  }
});
