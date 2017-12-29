/**
 * Created by czljcb on 2017/12/26.
 */

import React , {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


class Son extends Component{

    constructor(props){
        super(props)
        this.state = {
            money : 10
        }
    }

    render(){
        return(
            <View style={styles.son}>
                <Text>{this.props.name} 的 son...{this.state.money}</Text>
            </View>
        )
    }

    _receiveMoney(money){
       this.setState({
           money : money

       })
    }
}


class Father extends Component{

    render(){
        return(
            <View style={styles.father}>
                <Son ref = 'son' name = {this.props.name}/>
                <Text style={styles.fatherText} onPress={()=>{
                    this.refs.son._receiveMoney(50)
                    console.log('5555')
                }}>send 50 </Text>
                <Text style={styles.fatherText} onPress={()=>{
                    this.props.say('good father')
                }}>send 50 </Text>
            </View>
        )
    }
}

export default class App extends Component{

    constructor(props) {
      super(props);
      this.state = {
          msg : 'uuuuu'
      };
    }

    render(){
        return(
            <View style={styles.container}>
                <Father name='Jayson' say={this._say.bind(this)}/>
                <Text>{this.state.msg}</Text>
            </View>
        )
    }

    _say(msg){
        this.setState({
            msg:msg,
        })
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    } ,

    father:{
       width:200,
        height:100,
        marginTop:100,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },

    fatherText:{
        backgroundColor:'blue',

    },
});