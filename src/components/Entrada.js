import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Numero from './Numero';


export default props => (
    <View style={styles.entrada}>
        <Numero propsNumero={props.propsNum1}/>
        <Numero propsNumero={props.propsNum2}/>
    </View>
);

const styles = StyleSheet.create({
    entrada:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})