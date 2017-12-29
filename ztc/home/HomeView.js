/**
 * Created by czljcb on 2017/12/28.
 */
import React ,{Component} from 'react';
import {
    View,Text,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

import MessageView from './MessageView';



export default class HomeView extends Component{


    render(){

        return(
            <View style={styles.home}>
                <Text style={styles.homeText} onPress={()=>{
                    this.props.navigator.push({
                        component: MessageView,
                        title: 'My message',
                        passProps : {'name':'Home','age':34},
                        tintColor:'red',

                    })

                }}>gogogo</Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'red',
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