/**
 * Created by czljcb on 2017/12/28.
 */
import React ,{Component} from 'react';
import {
    View,Text,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

export default class MessageView extends Component{
    render(){
        return(
            <View style={styles.constructor}>
                <Text style={styles.text} onPress={()=>{
                    this.props.navigator.pop()

                }}>this is message {this.props.name}</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    constructor:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'green',
        fontSize:34,
        height:200,
        backgroundColor:'red',
    },
})