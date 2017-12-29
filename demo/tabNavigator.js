/**
 * Created by czljcb on 2017/12/27.
 */

import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    NavigatorIOS,
    TabBarIOS,
    Image,
    AlertIOS,
    Button,
    TouchableOpacity,
    TextInput,

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HttpRequest from './HttpRequest';

class Home extends Component{

    constructor(props){
        super(props)
        Image.getSize('https://upload-images.jianshu.io/upload_images/304825-a28ad210f0641360.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
            (w,h)=>{
                console.log('获取图片尺寸')
                console.log(w,h)

            },(error)=>{

            }

        )
    }

    _getData() {

        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/HKRadio.json',null,(obj)=>{
            console.log(obj)

        },(error)=>{
            console.log(error)

        })
    }

    _postData(){
        HttpRequest.post('http://oz3odd99d.bkt.clouddn.com/HKRadio.json',null,(obj)=>{
            console.log(obj)

        },(error)=>{
            console.log(obj)
        })
    }

    render(){
        return(

            <View style={styles.home}>
                <TouchableOpacity activeOpacity={0.9}
                                  onLongPress={()=>{
                                      //AlertIOS.alert('onLongPress')
                                  }}
                                  onPress={()=>{
                                      //AlertIOS.alert('onPress')
                                      this._getData()
                                      this._postData()


                                  }}
                                  onPressIn={()=>{
                                      //AlertIOS.alert('onPressIn')
                                  }}
                                  onPressOut={()=>{
                                      AlertIOS.alert('onPressOut')
                                  }}
                                  // disabled={true}

                >
                    <View style={styles.homeSub1}>
                    </View>
                </TouchableOpacity>
                <Text numberOfLines={1}
                      onPress={()=>{
                          //AlertIOS.alert('onPress')
                          this._getData()
                          this._getData()


                      }}
                      selectable={true}
                      style={styles.homeText}
                >通过disabled，可以控制一个被TouchableOpacity包装的组件什么时候能点击</Text>
                <Button title="我是按键"
                        style={styles.homeButton}
                        onPress={()=>{
                    AlertIOS.alert('hi')
                }}/>

                <TextInput style={styles.homeInput}
                           placeholder={'我是hello'}
                           autofocus={true}
                           blurOnSubmit={true}
                           editable={true}
                           // keyboardType={'number-pad'}
                           maxLength={60}
                           // multiline={true}
                           placeholderTextColor={'red'}
                           returnKeyType={'search'}
                           secureTextEntry={true}
                           selectionColor={'white'}
                           clearButtonMode={'while-editing'}
                           clearTextOnFocus={true}
                           enablesReturnKeyAutomatically={true}

                           onBlur={(text)=>{
                              // console.log(text)
                              //AlertIOS.alert('监听文本框失去焦点')
                           }}
                           onChange={(text)=>{
                               //console.log(text)
                           }}

                           onChangeText={(text)=>{
                               console.log(text)
                           }}
                           onEndEditing={()=>{
                               console.log('文本框结束编辑');
                           }}
                           onFocus={()=>{
                               console.log('获取焦点');
                           }}
                           onSubmitEditing={()=>{
                               console.log('点击提交按钮');
                           }}


                />

                <Text>1.加载RN项目的资源</Text>
                <Image source={require('./1.png')} style={{width:50,height:50}}/>
                <Text>3.加载网络中的资源</Text>
                <Image source={{uri:'https://upload-images.jianshu.io/upload_images/304825-f42422912d2bf8d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'}} style={{width:50,height:50}}/>
                <Image
                    resizeMode={'cover'}
                    defaultSource={{uri:'bj'}}
                    source={{uri:'http://upload-images.jianshu.io/upload_images/304825-f42422912d2bf8d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700'}}
                    style={{width:50,height:50}}
                    onLoad={()=>{
                        console.log('图片加载完成时调用此函数')
                    }}

                    onloadstart={()=>{
                        console.log('图片加载开始时调用')
                    }}


                    onloadend={()=>{
                        console.log('加载结束后，不论成功还是失败，调用此回调函数')
                    }}


                    onError={(e)=>{
                        console.log(e)
                    }}

                    onProgress={(e)=>{
                        console.log(e)
                        console.log(e.nativeEvent);
                    }}


                />

                <Text>2.加载App中的资源</Text>
                <Image source={{uri:'bj'}} style={{width:150,height:150}}
                       blurRadius={100}
                />
            </View>
        )
    }
}

export default class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            selectedTab : 'home'
        }
    }


    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../images/ys.png')} />}
                    renderSelectedIcon={() => <Image source={require('../images/ys.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() =><Image source={require('./images/ys.png')} />}
                    renderSelectedIcon={() => <Image source={require('./images/ys.png')} />}
                    // renderBadge={() =>
                    //     <Button style={{width:50,height:50,backgroundColor:'red'}} title={'ok'} onPress={()=>{
                    //
                    //         }
                    //     }/>
                    // }
                    onPress={() =>{ this.setState({ selectedTab: 'profile' })}}>
                    <Home/>
                </TabNavigator.Item>
            </TabNavigator>

        )
    }
}


const styles = StyleSheet.create({


    home:{
        flex:1,
        backgroundColor:'green',
        // justifyContent:'center',
        alignItems:'center',
    },
    homeSub1:{
        marginTop:64,
        width:100,
        height:100,
        backgroundColor:'red',
    },
    homeText:{
       color:'white',
        fontSize:25,
        fontWeight:'bold',
        lineHeight:59,
        backgroundColor:'orange',

    },
    homeButton:{
        backgroundColor:'red',
    },
    homeInput:{

        borderWidth:0.5,
        borderColor:'black',
        height:35,
        borderRadius:5,
        width:100,
        paddingLeft:20,
    },


})