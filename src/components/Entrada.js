import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Numero from './Numero';


export default props => (
    <View style={styles.entrada}>
        <Numero/>
        <Numero/>
    </View>
);

const styles = StyleSheet.create({
    entrada:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})