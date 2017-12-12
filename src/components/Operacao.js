import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker
 } from 'react-native';

export default props => (
    <Picker style={styles.operacao}>
        <Picker.Item label='Soma'/>
        <Picker.Item label='Subtração'/>        
    </Picker>    
) 

const styles = StyleSheet.create({
    operacao:{
        marginTop: 15,
        marginBottom: 15
    }
})