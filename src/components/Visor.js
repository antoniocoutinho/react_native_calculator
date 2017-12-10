import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';

export default props => (
    <View >
        <TextInput
            placeholder="Resultado"
            editable={false} 
            style={styles.visorView}
        />
    </View>
) 

const styles = StyleSheet.create({
    visorView:{
        height:100,
        fontSize: 35
    }
})