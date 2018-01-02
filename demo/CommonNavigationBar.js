/**
 * Created by ward on 2018/1/2.
 */

import React , {Component} from 'react';

import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

const navigationBarHeight = 64;

var Screen = {
    height,
    width
} = Dimensions.get('window');

export default class CommonNavigationBar extends Component{

    static propTypes = {
        leftBarButtonItem:PropTypes.object,

        middleView:PropTypes.object,

        rightBarButtonItem:PropTypes.object,

        title:PropTypes.string,

        titleStyle:PropTypes.object,

        contentView:PropTypes.object

    }

    constructor(props){
        super(props)
        if(this.props.title && this.props.middleView){
            throw 'error : 不能同时设置'
        }

        if (this.props.contentView && (this.props.middleView ||
            this.props.rightBarButtonItem || this.props.title  ||
            this.props.titleStyle || this.props.contentView)
        ) throw "设置了contentView,其他设置无效,不要同时设置"


    }
    _renderMiddleTitle(){
        return(
            <Text style={[styles.titleStyle,this.props.titleStyle]}>{this.props.title}</Text>
        )
    }
    _renderContentView(){
        return (<View style={styles.container}>
            {/*左边*/}
            <View style={styles.leftStyle}>
                {this.props.leftBarButtonItem}
            </View>

            {/*中间*/}
            <View style={styles.middleStyle}>
                {this.props.title?this._renderMiddleTitle():this.props.middleView}
            </View>

            {/*右边*/}
            <View style={styles.rightStyle}>
                {this.props.rightBarButtonItem}
            </View>
        </View>)
    }

    render(){
        return(
            <View style={styles.barStyle}>
                {this.props.contentView?this.props.contentView:this._renderContentView()}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    barStyle:{
        height:navigationBarHeight,
        width:Screen.width,
        backgroundColor:'white',
        flexDirection:'row',
    },
    container:{
        backgroundColor:'white',
        width:Screen.width,

        flexDirection:'row',
        height:44,
        backgroundColor:'white',
        position:'absolute',
        bottom:0


    },
    leftStyle:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:"center",
    },
    middleStyle:{
        flex:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    rightStyle:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    titleStyle:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
    },

})
