import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';

export default class Visor extends Component {
    constructor(props){
        super(props);
        this.state = { resultado: ''};
    }
    
    render () {
        return(
            <View> 
                <TextInput
                    placeholder="Resultado"
                    value={this.state.resultado}
                    style={styles.visorView}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    visorView:{
        height:100,
        fontSize: 35
    }
})