/**
 * @providesModule CZButton
 */

import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,

} from 'react-native';

import PropTypes from 'prop-types';


export default class CZButton extends Component{

    static propTypes = {
        title:PropTypes.string,
        imageUri:PropTypes.string,
        titleStyle:PropTypes.object,
        imageStyle:PropTypes.object,

        highImageUri:PropTypes.string,
        highTitleStyle:PropTypes.object,

        // 监听点击
        onPressIn:PropTypes.func,
        onPressOut:PropTypes.func,

        // 按钮样式
        buttonStyle:PropTypes.object
    }

    constructor(props){
        super(props)
        this.state = {
            highLighted : true,
        }

    }

    render(){

        console.log(this.props.highTitleStyle)
        console.log(this.props.buttonStyle)
        console.log(this.props.highTitleStyle)

        return(

            <TouchableOpacity style={[styles.container,this.props.buttonStyle]}
                              onPressIn={()=>{
                                  this.setState({
                                      highLighted:true,
                                  })

                                  if(this.props.onPressIn){
                                      this.props.onPressIn(this)
                                  }
                              }}

                              onPressOut={()=>{

                                  this.setState({
                                      highLighted:false
                                  })
                                  if(this.props.onPressOut){
                                      this.props.onPressOut(this)
                                  }
                              }}
                              activeOpacity={this.props.highTitleStyle || this.props.highImageUri?0.9:0.3}

            >

                {/*<Text style={[this.props.titleStyle,this.props.highTitleStyle]}>{this.props.title}</Text>*/}
                {/*文字*/}
                {this.props.title?<Text style={[this.props.titleStyle,this.state.highLighted?this.props.highTitleStyle:null]}>{this.props.title}</Text>:null}


                {/*头像*/}
                {this.props.imageUri?<Image source={{uri:this.state.highLighted && this.props.highImageUri?this.props.highImageUri:this.props.imageUri}} style={[styles.imageStyle,this.props.imageStyle]}/> : null}



            </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    imageStyle:{
        marginLeft:5,
    }
})
