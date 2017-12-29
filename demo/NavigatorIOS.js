/**
 * Created by czljcb on 2017/12/27.
 */


import React,{Component} from 'react';
import {
    View,
    Text,
    NavigatorIOS,
    StyleSheet,
    AlertIOS,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';


class Message extends Component{
    render(){
        return(
            <View style={styles.home}>
                <Text style={styles.homeText} onPress={()=>{
                    this.props.navigator.pop()

                }}>this is message {this.props.name}</Text>
            </View>
        )
    }
}

class Home extends Component{
    render(){
        return(
            <View style={styles.home}>
                <Text style={styles.homeText} onPress={()=>{
                    this.props.navigator.push({
                        component: Message,
                        title: 'My message',
                        passProps : {'name':'Home','age':34},
                        tintColor:'red',

                    })

                }}>this is home {this.props.name}</Text>
            </View>
        )
    }
}



export default class App extends Component{
    //
    // _handleNavigationRequest(){
    //     AlertIOS.alert('hi')
    // }

   render(){
       return(
           <NavigatorIOS
               style={{flex: 1}}

               initialRoute={
                   {
                       component: Home,
                       title: 'My home',
                       passProps : {'name':'mainNav','age':23},
                       // barTintColor:'orange',
                       // navigationBarHidden:true,
                       shadowHidden:true,
                       titleTextColor:'orange',
                       // translucent:false,
                       // backButtonTitle : "后退",
                       leftButtonTitle : "My",

                       //onLeftButtonPress : () => this._handleNavigationRequest(),
                       onLeftButtonPress : () => {
                            AlertIOS.alert('hi')
                        },

                   }

               }
           />
       )
   }
}


const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    homeText:{
        color:'green',
        fontSize:34,
        height:200,
        backgroundColor:'red',
    },
})