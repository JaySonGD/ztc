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
import CZButton from 'CZButton'

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
                <CZButton title={'button'}
                          titleStyle={{
                              fontSize:34,
                          }}
                          onPressOut={()=>{
                            //alert('onPressOut')
                          }}
                          onPressIn={()=>{
                             // alert('onPressIn')
                          }}
                          highImageUri='bj'
                          highTitleStyle={{
                              color:'red'
                          }}
                          imageUri='bj'
                          imageStyle={{
                              width:50,
                              height:44,
                          }}
                          buttonStyle={{
                              marginTop:100,
                              width:100,
                              height:44,
                              backgroundColor:'orange',
                              borderRadius:5,
                          }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
    },
    buttonStyle:{
        marginTop:100,
        width:100,
        height:44,
        backgroundColor:'orange',
        borderRadius:5,


    },

})