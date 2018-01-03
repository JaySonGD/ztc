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




export default class PlayView extends Component{

    static navigationOptions = {
        title: 'tvb',
    };

    render(){
        const { params } = this.props.navigation.state;

        return(
            <View style={{flex:1,backgroundColor:'white'}}></View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})