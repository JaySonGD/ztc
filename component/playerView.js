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
    Animated,

} from 'react-native';

import Video from 'react-native-video';



export default class PlayerView extends Component{

    static navigationOptions = {
        //title: 'player',
        header:null,
        headerLeft:null,
    };
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
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
                           resizeMode={'contain'}
                           style={styles.backImageStyle}
                    />
                </TouchableOpacity>
                <Text style={styles.titleStyle}>{params.data}</Text>
                <Animated.View                            // 可动画化的视图组件
                    style={{

                        opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                    }}
                >
                </Animated.View>
            </View>
        )
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {   // 同时开始旋转
            toValue: 360,
        }).start()
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
        width:44,
        height:44,
        position:'absolute',
        top:44,
        left:22,
        paddingLeft:10,

    },
    backImageStyle:{
        width:44,
        height:44,
    },

    titleStyle:{
        position:'absolute',
        top:57,
        alignSelf:'center',
        backgroundColor:'transparent',
        color:'white',
        fontSize:18,
    },

    coverStyle:{
        position:'absolute',
        top:200,
        alignSelf:'center',
        width:200,
        height:200,
        backgroundColor:'red',
    }
})