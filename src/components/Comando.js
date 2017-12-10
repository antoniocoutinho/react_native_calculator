import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
 } from 'react-native';

const alertt = () => {alert("oi")}

export default props => (
    <View >
        <Button
        title={"Teste"}
        onPress={alertt}
        />
    </View>
) 

const styles = StyleSheet.create({
    visorView:{
        height:100,
        fontSize: 35
    }
})