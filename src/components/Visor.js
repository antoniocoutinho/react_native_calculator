import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';

export default Visor = props => (
            <View> 
                <TextInput
                    placeholder='Resultado'
                    value={props.resultado}
                    style={styles.visorView}
                />
            </View>
        );

const styles = StyleSheet.create({
    visorView:{
        height:100,
        fontSize: 35
    }
})