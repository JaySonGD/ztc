/**
 * Created by ward on 2018/1/8.
 */

import React ,{Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Root from './root';


export default class App extends Component{

    render(){

        return(
                <Root/>
            )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
    },
})