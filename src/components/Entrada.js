import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Numero from './Numero';


export default props => (
    <View style={styles.entrada}>
        <Numero propsNumero={props.propsNum1} atualizaValor={props.atualizaValor}/>
        <Numero propsNumero={props.propsNum2} atualizaValor={props.atualizaValor}/>
    </View>
);

const styles = StyleSheet.create({
    entrada:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})