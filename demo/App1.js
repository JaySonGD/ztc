/**
 * Created by czljcb on 2017/12/26.
 */


import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from  'react-native';


export default class App extends Component{


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sub1}>

                    <View style={styles.sub11}></View>
                    <View style={styles.sub12}></View>

                </View>

                <Text style={styles.sub2}>flexWrap:决定子控件在父视图内是否允许多行排列。组件只排列在一行上，可能导致溢出。
                    wrap   组件在一行排列不下时，就进行多行排列
                </Text>

                <View style={styles.sub3}>
                    <Text style={styles.sub31}>组件在一行排列不下时，就进行多行排列</Text>
                    <Text style={styles.sub31}>组件在一行排列不下时，就进行多行排列</Text>
                    <Text style={styles.sub32}>组件在一行排列不下时，就进行多行排列</Text>
                    {/*<Text style={styles.sub32}>组件在一行排列不下时，就进行多行排列</Text>*/}

                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex : 1,
        // flexDirection:'row',
    },

    sub1:{
        position: 'absolute',
        top:350,
        left:100,
        width:300,
        height:300,
        backgroundColor:'green',

        flexDirection:'row',
        // borderBottomWidth:10,
        // borderLeftWidth:5,
        // borderBottomColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'yellow',
    },

    sub11:{

        position: 'absolute',
        // position: 'relative',

        top: 0,
        left:0,
        width:50,
        height:50,

        backgroundColor:'white'
    },

    sub12:{

        // position: 'absolute',
        position: 'relative',

        top: 10,
        left:30,
        width:50,
        height:50,

        backgroundColor:'red'
    },

    sub2:{
        backgroundColor:'white',

        marginTop:20,
        paddingTop:40,

        borderWidth:1,
        borderColor:'orange',
    },

    sub3:{
        flexDirection:'row',
        flexWrap:'wrap',

        // flex-start: 子组件向主轴起点对齐，如果主轴水平，从左开始，主轴垂直，从上开始。
        // flex-end 子组件向主轴终点对齐，如果主轴水平，从右开始，主轴垂直，从下开始。
        // center 居中显示，注意：并不是让某一个子组件居中，而是整体有居中效果
        // space-between 均匀分配,相邻元素间距离相同。每行第一个组件与行首对齐，每行最后一个组件与行尾对齐。
        // space-around 均匀分配,相邻元素间距离相同。每行第一个组件到行首的距离和每行最后一个组件到行尾的距离将会是相邻元素之间距离的一半

        // justifyContent: 'center',
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',

        // flex-start 子组件向侧轴起点对齐。
        // flex-end 子组件向侧轴终点对齐。
        // center 子组件在侧轴居中。
        // stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。

        // alignItems:'center',
        // alignItems:'flex-start',
        // alignItems:'flex-end',
        alignItems:'stretch',



        height:250,
        backgroundColor:'green',
    },

    sub31:{
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,

        color:'red',
        padding:10,
        fontSize:18,
        // width:100,
        flex:1,
    },
    sub32:{
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,

        color:'red',
        padding:10,
        fontSize:18,
        // width:100,
        // auto 继承它的父容器的alignItems属性。如果没有父容器则为 "stretch"
        // flex-start 子组件向侧轴起点对齐。
        // flex-end 子组件向侧轴终点对齐。
        // center 子组件在侧轴居中。
        // stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。
        alignSelf:'flex-end',
        flex:2,
    },


});