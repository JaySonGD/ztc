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
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';

const Screen = {height, width} = Dimensions.get('window');


export default class PlayView extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.data.name}`,
    });

    render(){
        const { params } = this.props.navigation.state;

        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={styles.videoBoxStyle}>
                    <Video source={{uri:params.data.m3u8}}
                           style={styles.videotyle}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    videoBoxStyle:{
        backgroundColor:'red',
        width:Screen.width,
        height:Screen.width/16*9,
    },
    videotyle:{
        width:Screen.width,
        height:Screen.width/16*9,
    }
})