/**
 * Created by ward on 2018/1/8.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class HomeView extends Component{

    render(){

        return(
            <View style={styles.container}>
                <Text>homeView</Text>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
})