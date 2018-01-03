/**
 * Created by czljcb on 2018/1/2.
 */


import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
} from 'react-native';


import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component{

    static navigationOptions = {
        title: 'HomeScreen',
    };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'red'}}></View>
        )
    }
}


class MessageScreen extends Component{


    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render(){
        const { params } = this.props.navigation.state;

        return(
            <View style={{flex:1,backgroundColor:'white'}}></View>
        )
    }
}

class DetailsScreen extends Component{

    static navigationOptions = {
        title: 'DetailsScreen',
    };
    render(){
        return(

            <View style={{flex:1,backgroundColor:'orange'}}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Message', { user: 'Lucy' })
                }}>go</Text>
            </View>
        )
    }
}




const RootTabs = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'My Chats',

            },




        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                title: 'My Details',
            },

        },
    },
    {
        navigationOptions: {
            headerBackTitle: 'back',
            headerTintColor: '#333333',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
        },

        // mode: 'card',
    },

);


const SimpleApp = StackNavigator({
    Home: {
        screen: RootTabs,
        navigationOptions: {
            // title: 'My Chats',
        },
    },

    Message: {
        screen: MessageScreen,
    },
});

export default class App extends Component{
    render(){
        return(
            <SimpleApp/>
        )
    }
}