/**
 * Created by czljcb on 2017/12/26.
 */


import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    View,
    Text,
    StyleSheet,
    AppRegistry,
} from 'react-native';


class Room extends Component{
    // 定义属性
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number,
    }
//    PropTypes.array

// // 布尔类型
//     PropTypes.bool
//
// // 函数类型
//     PropTypes.func
//
// // 数值类型
//     PropTypes.number
//
// // 对象类型
//     PropTypes.object
//
// // 字符串类型
//     PropTypes.string
//
//  // 规定prop为必传字段
//     PropTypes.func.isRequired
//
// // prop可为任意类型
//     PropTypes.any.isRequired


    // 初始值
    static defaultProps = {
        name:'ios',
        age:2
    }




    render(){
        console.log('name:'+this.props.name+';age:'+this.props.age)
        return(
            <View>

            </View>
        )
    }
}

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Room/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
    },
})