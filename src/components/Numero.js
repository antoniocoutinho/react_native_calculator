import React from 'react';
import { Text, TextInput, View, StyleSheet} from 'react-native';

export default props => (
    
        <TextInput 
            value={props.propsNumero}
            style={styles.numero}
            onChangeText={valorDoCampo =>
                 props.atualizaValor(valorDoCampo)}
        />
)

const  styles = StyleSheet.create({
    numero:{
        width: 140,
        height:80,
        fontSize: 20
    }
})