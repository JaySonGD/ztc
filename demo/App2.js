/**
 * Created by czljcb on 2017/12/26.
 */


import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


class Room extends Component{

    _timeUpDate (){
        console.log('把一个定时器的引用挂在this上');
        var num = this.state.timeNum
        num++;
        this.setState({
            timeNum:num,
        })
    }

    constructor(props){
        super(props)
        this.state = {
            timeNum : 0,
        }

        console.log('初始化state....')

    }

    componentWillMount() {
        console.log('即将加载组件的时候调用....')

    }


    render(){

        console.log('渲染组件的时候调用....')

        return(
            <Text style={styles.text}> hi {this.props.name} {this.state.timeNum} </Text>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log('每次传入Props，就会调用...')
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('每次props,或者state改变，就会调用...'+nextProps+'...'+nextState)

        return true
    }

    componentWillUpdate() {
        console.log('组件即将更新调用....')

    }
    componentDidUpdate() {
        console.log('组件更新完成调用....')

    }

    componentDidMount() {
        console.log('加载组件完成的时候调用....')

        // setInterval(this._timeUpDate.bind(this),500)
        // setInterval(()=>{
        //     console.log('把一个定时器的引用挂在this上');
        // },1000)
    }

    componentWillUnmount() {
        console.log('组件即将销毁的时候调用....')

    }
}

export default class App extends Component
{
    render(){
        return(
        <View style={styles.container}>
            <Room name={'hello tv'} />
        </View>
        )
    }


}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'red',
    },

    text:{
        marginTop:20,
        backgroundColor:'white',
        height:200,
    }
});