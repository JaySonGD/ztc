/**
 * Created by czljcb on 2017/12/27.
 */


import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AlertIOS,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';



class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View>
                <Text>Chat with Lucy {params.name} {params.age}</Text>
                <Button title="back" onPress={
                    ()=>{

                    }
                }/>
            </View>
        );
    }
}

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerRight: <Button title='Info'/>,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{name:'Jayson','age':12})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}




export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});


export default class App extends Component{

    render(){
        return(
            <SimpleApp/>
        )
    }
}





const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor : 'red',
        justifyContent:'center',
        alignItems:'center',
        height: 100,

    },

})