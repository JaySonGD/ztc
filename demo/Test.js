/**
 * Created by ward on 2018/1/2.
 */

import React , {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Alert,
} from 'react-native';

import CommonNavigationBar from './CommonNavigationBar'

export default class App extends Component{

    render(){
        return(
            <View style={styles.container}>
                <CommonNavigationBar title="hello TV"
                                     leftBarButtonItem={<Text onPress={
                                         ()=>{
                                            alert('12')
                                         }
                                     }>leftTitle</Text>}
                                     rightBarButtonItem={<Text>roghtItem</Text>}
                ></CommonNavigationBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',

    }
})