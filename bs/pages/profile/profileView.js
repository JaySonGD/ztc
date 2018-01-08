/**
 * Created by ward on 2018/1/8.
 */
/**
 * Created by ward on 2018/1/8.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ProfileView extends Component{

    render(){

        return(
            <View style={styles.container}>
                <Text>ProfileView</Text>
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