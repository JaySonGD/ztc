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
    TouchableOpacity,

} from 'react-native';

import Video from 'react-native-video';



export default class PlayerView extends Component{

    static navigationOptions = {
        //title: 'player',
        header:null,
    };

    render(){
        const { params } = this.props.navigation.state;

        return(
            <View style={{flex:1,backgroundColor:'white'}}>

                <Image source={require('./resources/bg.jpeg')}
                />
                <TouchableOpacity onPress={()=>{
                                    this.props.navigation.goBack()
                                }}
                                  style={styles.backStyle}
                >
                <Image source={require('./resources/back.png')}
                       resizeMode={'cover'}
                />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    videoStyle:{

    },
    backStyle:{
        width:100,
        height:100,
        position:'absolute',
        top:64,
        left:0,
        paddingLeft:10,

    },
})