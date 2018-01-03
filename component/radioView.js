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

import HttpRequest from './httpRequest'


export default class RadioView extends Component{

    // static navigationOptions = {
    //     // title: '',
    // };

    componentDidMount() {
        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/HKRadio.json',null,(json)=>{
            console.log(json)

        },(error)=>{
           console.log(error)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Play', { user: 'Lucy' })
                }}>go</Text>
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