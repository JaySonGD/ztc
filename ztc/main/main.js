/**
 * Created by czljcb on 2017/12/28.
 */


import React , {Component} from 'react';

import TabNavigator from 'react-native-tab-navigator';
import {
  View,
    StyleSheet,
    Image,
    NavigatorIOS,
} from 'react-native';

import HomeView from '../Home/HomeView';



class Main extends Component{

    constructor(props){
        super(props)
        this.state= {
            selectedIndex: 0,
        }

        console.log(props)

        //this.props.func = this._seleItem().bind(this)

    }
    _seleItem(){

    }


    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title='首页'
                    selected={0 == this.state.selectedIndex}
                    barTintColor={'orange'}
                    selectedTitleStyle={{color:'orange'}}

                    onPress={()=>{
                        this.setState({
                            selectedIndex:0,
                        })
                    }}

                    renderIcon={()=><Image source={require('../images/v3_indi_channel_off.png')}/>}
                    renderSelectedIcon = {()=><Image source = {require('../images/v3_indi_channel_on.png')}/>}
                >
                    <HomeView navigator={this.props.navigator}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='直播'
                    selected={1 == this.state.selectedIndex}
                    barTintColor={'orange'}
                    selectedTitleStyle={{color:'orange'}}
                    onPress={()=>{
                        this.setState({
                            selectedIndex:1,

                        })


                    }}
                    renderIcon={()=><Image source={require('../images/v3_indi_channel_off.png')}/>}
                    renderSelectedIcon = {()=><Image source = {require('../images/v3_indi_channel_on.png')}/>}
                >
                    <HomeView/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

export default class App extends Component{

    constructor(props){
        super(props)
        this.state={
            defaultTitle : '首页'
        }
    }
    _setTitle(title){
        this.setState({
            defaultTitle:title,
        })
    }

    render(){
        return(

        <NavigatorIOS
            style={{flex: 1}}

            initialRoute={
                {
                    component: Main ,
                    title: this.state.defaultTitle,
                    passProps : {'name':'mainNav'},
                    barTintColor:'orange',
                    titleTextColor:'white',

                }

            }
        />


        )
    }
}



