/**
 * Created by ward on 2018/1/3.
 */




import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
} from 'react-native';




export default class LiveView extends Component{

    // static navigationOptions = {
    //     // title: '电视',
    // };
    render(){
        return(
            <View style={styles.container}>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})