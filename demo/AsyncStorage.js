/**
 * Created by ward on 2018/1/2.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    AlertIOS,
    AsyncStorage,

} from 'react-native';

export default class CZButton extends Component{



    constructor(props){
        super(props)
        this.state = {
            saveText:''
        }
    }


    render(){


        return(

            <View style={styles.container}>
                <Text style={styles.textStyle}
                      onPress={()=>{
                          //AlertIOS.alert('123')
                          var obj = {'name':'Jayson','age':23}
                          AsyncStorage.setItem('user',JSON.stringify(obj),(error)=>{
                              if (error) {
                                  alert('存储失败');
                              } else  {
                                  alert('存储成功');
                              }
                          })
                      }}
                >save</Text>
                <Text style={styles.textStyle}
                      onPress={()=>{

                          AsyncStorage.getItem('user',(error,json)=>{
                             if(!error){
                                 this.setState({
                                     saveText:json,
                                 })

                                 var obj = JSON.parse(json)
                             }
                          })

                      }}
                >get</Text>
                <Text style={styles.textStyle}
                      onPress={()=>{

                          AsyncStorage.removeItem('user',(error)=>{
                              if(!error){
                                alert('ok')
                              }
                          })

                      }}
                >delete</Text>
                <Text>{this.state.saveText}</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        // flexDirection:'row',
        flex:1,
        alignItems:'center',
    },
    textStyle:{
        marginTop:100,
        paddingTop:14,
        paddingLeft:35,
        width:100,
        height:44,
        backgroundColor: 'orange',
    },


})
