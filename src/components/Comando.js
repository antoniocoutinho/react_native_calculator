import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Button
 } from 'react-native';

export default props => (
    <View >
        <Button
        title={"Calcular"}
        onPress={props.acao}
        />
    </View>
) 

const styles = StyleSheet.create({
    visorView:{
        height:100,
        fontSize: 35
    }
})