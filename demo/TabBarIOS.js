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
} from 'react-native';



class Home extends Component{
    render(){
        return(

            <View style={styles.home}>
                <View style={styles.homeSub1}>
                </View>
            </View>
        )
    }
}


export  default class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            selectedItem : 0
        }
    }

    render(){
        return(

            <TabBarIOS

                tintColor={'orange'}
                unselectedItemTintColor={'white'}
                translucent={true}
            >

                <TabBarIOS.Item title='首页'
                                icon={require('../images/ys.png')}
                                badge={10}
                                selected={0==this.state.selectedItem}
                                onPress={()=>{
                                    this.setState({
                                        selectedItem:0,
                                    })
                                }}
                >
                    <NavigatorIOS
                        style={{flex: 1}}

                        initialRoute={
                            {
                                component: Home,
                                title: 'My home',
                                passProps : {'name':'mainNav','age':23},
                                // barTintColor:'orange',
                                // navigationBarHidden:true,
                                shadowHidden:true,
                                titleTextColor:'orange',
                                // translucent:false,
                                // backButtonTitle : "后退",
                                leftButtonTitle : "My",

                                //onLeftButtonPress : () => this._handleNavigationRequest(),
                                onLeftButtonPress : () => {
                                    AlertIOS.alert('hi')
                                },

                            }

                        }

                    />


                </TabBarIOS.Item>

                <TabBarIOS.Item title='消息'
                                icon={require('../images/ys.png')}
                                badge={10}
                                selected={1==this.state.selectedItem}
                                onPress={()=>{
                                    this.setState({
                                        selectedItem:1,
                                    })
                                }}
                >
                    <NavigatorIOS
                        style={{flex: 1}}

                        initialRoute={
                            {
                                component: Home,
                                title: '消息',
                                passProps : {'name':'mainNav','age':23},
                                // barTintColor:'orange',
                                // navigationBarHidden:true,
                                shadowHidden:true,
                                titleTextColor:'orange',
                                // translucent:false,
                                // backButtonTitle : "后退",
                                leftButtonTitle : "My",

                                //onLeftButtonPress : () => this._handleNavigationRequest(),
                                onLeftButtonPress : () => {
                                    AlertIOS.alert('hi')
                                },

                            }

                        }

                    />

                </TabBarIOS.Item>


            </TabBarIOS>
        )
    }
}


const styles = StyleSheet.create({


    home:{
        flex:1,
        backgroundColor:'green',
    },
    homeSub1:{
        marginTop:64,
       width:100,
        height:100,
        backgroundColor:'red',
    },
})