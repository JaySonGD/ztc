/**
 * Created by czljcb on 2017/12/27.
 */


import React , {Component} from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

var screenW = Dimensions.get('window').width;


export default class App extends Component{
    _onMomentumScrollBegin(e) {
        console.log('当一帧滚动开始的时候');
    }

    _onMomentumScrollEnd(e) {
        console.log('当一帧滚动结束的时候');
    }

    _onScroll(e) {
        console.log(e)
        console.log('监听滚动的时候');
    }

    render(){
        return(
            <ScrollView style={styles.container}
                        onMomentumScrollBegin={this._onMomentumScrollBegin.bind(this)}

                        onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}

                // 监听开始拖拽
                //         onScrollBeginDrag={this._onScrollBeginDrag.bind(this)}


                // 监听结束拖拽
                       // onScrollEndDrag={this._onScrollEndDrag.bind(this)}

                // 监听滚动动画完成
                       // onScrollAnimationEnd={this._onScrollAnimationEnd.bind(this)}

                // 监听滚动的时候
                        onScroll={this._onScroll.bind(this)}


                // 设置滚动频率,一滚动就监听
                         scrollEventThrottle={1}

            >
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>
                <Image source={require('./1.png')} style={styles.image}/>

            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',

    },

    image:{
       width:screenW,
        height:200,
        borderWidth : 5,
        borderColor:'orange',
    }
})